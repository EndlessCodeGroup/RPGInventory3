/*
 * This file is part of ECInventory
 * <https://github.com/EndlessCodeGroup/ECInventory>.
 * Copyright (c) 2021-2022 EndlessCode Group and contributors
 *
 * ECInventory is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * ECInventory is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with ECInventory. If not, see <http://www.gnu.org/licenses/>.
 */

package ru.endlesscode.inventory.internal.data

import kotlinx.serialization.hocon.Hocon
import ru.endlesscode.inventory.InventoryLayout
import ru.endlesscode.inventory.InventoryLayout.Companion.MAX_ROWS
import ru.endlesscode.inventory.InventoryLayoutImpl
import ru.endlesscode.inventory.internal.config.ConfigurationCollector
import ru.endlesscode.inventory.internal.di.DI
import ru.endlesscode.inventory.internal.util.Log
import ru.endlesscode.inventory.internal.util.MAX_STACK_SIZE
import ru.endlesscode.inventory.internal.util.isNullOrEmpty
import ru.endlesscode.inventory.internal.util.orEmpty
import ru.endlesscode.inventory.slot.ContainerSlotImpl
import ru.endlesscode.inventory.slot.Slot
import ru.endlesscode.inventory.slot.WildcardItemValidator
import ru.endlesscode.mimic.items.BukkitItemsRegistry
import java.nio.file.Path

internal class DataHolder(
    private val itemsRegistry: BukkitItemsRegistry,
    private val collector: ConfigurationCollector,
) {

    constructor(
        pluginDataDir: Path,
        itemsRegistry: BukkitItemsRegistry = DI.itemsRegistry,
        hocon: Hocon = DI.hocon,
    ) : this(itemsRegistry, ConfigurationCollector(pluginDataDir.resolve("data"), hocon))

    var slots: Map<String, Slot> = emptyMap()
        private set
    var inventories: Map<String, InventoryLayout> = emptyMap()
        private set

    init {
        collectData()
    }

    fun reload() {
        collectData()
    }

    private fun collectData() {
        val data = collector.collect<DataConfig>()
        slots = data.slots.mapValues { (id, config) -> createSlot(id, config) }
        inventories = data.inventories.mapValues { (id, config) -> createInventory(id, config) }

        val usedSlots = inventories.values.asSequence()
            .flatMap { it.slotsMap.values.asSequence().map(Slot::id) }
            .toSet()
        val unusedSlots = slots.keys - usedSlots
        if (unusedSlots.isNotEmpty()) Log.w("These slots are not used and could be removed: $unusedSlots.")
    }

    private fun createSlot(id: String, config: SlotConfig): Slot {
        val prefix = "Parsing slot '$id':"
        val textureItem = config.texture?.let {
            requireNotNull(itemsRegistry.getItem(it)) {
                "$prefix Unknown texture '${config.texture}'. $errorMimicIdExplanation"
            }
        }

        if (textureItem.isNullOrEmpty() && (config.name.isNotEmpty() || config.description.isNotEmpty())) {
            Log.w(
                "$prefix 'name' and 'description' is present but 'texture' is not specified.",
                "Slot name and description can't be shown without texture.",
            )
        }

        val correctMaxStackSize = config.maxStackSize.coerceIn(1, MAX_STACK_SIZE)
        if (correctMaxStackSize != config.maxStackSize) {
            Log.w(
                "$prefix max stack size should be in range 1..$MAX_STACK_SIZE, but was '${config.maxStackSize}'.",
                "Will be used $correctMaxStackSize instead, please fix slot config.",
            )
        }

        return ContainerSlotImpl(
            id = id,
            name = config.name,
            description = config.description,
            texture = textureItem.orEmpty(),
            type = config.type,
            contentValidator = WildcardItemValidator(config.allowedItems, config.deniedItems),
            maxStackSize = correctMaxStackSize,
        )
    }

    private fun createInventory(id: String, config: InventoryConfig): InventoryLayout {
        val prefix = "Parsing inventory '$id':"
        val defaultSlot = getSlot(config.defaultSlot, prefix)
        require(config.slots.isNotEmpty()) { "$prefix Slots should not be empty." }

        val slotMap = sortedMapOf<Int, Slot>()
        config.slots.forEach { (key, slotName) ->
            val slotIds = parseSlotPositions(key, prefix)
            slotIds.forEach { slotId -> slotMap[slotId] = getSlot(slotName, prefix) }
        }

        val minRows = InventoryLayout.getMinimalRows(slotMap.lastKey() + 1)
        val rows = config.rows ?: minRows
        require(rows in 1..MAX_ROWS) { "$prefix Rows should be in range 1..$MAX_ROWS, but was $rows." }
        require(rows >= minRows) {
            "$prefix Minimal rows required for the given slots is $minRows, but $rows passed."
        }

        return InventoryLayoutImpl(
            id = id,
            name = config.name,
            defaultSlot = defaultSlot,
            slotsMap = slotMap,
            rows = rows,
        )
    }

    private fun getSlot(name: String, errorPrefix: String): Slot {
        return requireNotNull(slots[name]) { "$errorPrefix Unknown slot name '$name'.".trimStart() }
    }
}
