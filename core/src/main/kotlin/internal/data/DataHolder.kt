/*
 * This file is part of ECInventory
 * <https://github.com/EndlessCodeGroup/ECInventory>.
 * Copyright (c) 2021 EndlessCode Group and contributors
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
import ru.endlesscode.inventory.InventoryLayout.Companion.MAX_SLOT_POSITION
import ru.endlesscode.inventory.InventoryLayoutImpl
import ru.endlesscode.inventory.internal.DI
import ru.endlesscode.inventory.internal.config.ConfigurationCollector
import ru.endlesscode.inventory.internal.util.Log
import ru.endlesscode.inventory.internal.util.MAX_STACK_SIZE
import ru.endlesscode.inventory.internal.util.orEmpty
import ru.endlesscode.inventory.slot.ItemValidator
import ru.endlesscode.inventory.slot.Slot
import ru.endlesscode.inventory.slot.SlotImpl
import ru.endlesscode.mimic.items.BukkitItemsRegistry
import java.nio.file.Path

internal class DataHolder(
    private val itemsRegistry: BukkitItemsRegistry,
    private val collector: ConfigurationCollector,
) {

    constructor(
        itemsRegistry: BukkitItemsRegistry,
        pluginDataDir: Path,
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
        val correctMaxStackSize = config.maxStackSize.coerceIn(1, MAX_STACK_SIZE)
        if (correctMaxStackSize != config.maxStackSize) {
            Log.w(
                "$prefix max stack size should be in range 1..$MAX_STACK_SIZE, but was '${config.maxStackSize}'.",
                "Will be used $correctMaxStackSize instead, please fix slot internal.config.",
            )
        }

        return SlotImpl(
            id = id,
            name = config.name,
            texture = textureItem.orEmpty(),
            type = config.type,
            contentValidator = ItemValidator.any,
            maxStackSize = correctMaxStackSize,
        )
    }

    private fun createInventory(id: String, config: InventoryConfig): InventoryLayout {
        val prefix = "Parsing inventory '$id':"
        val emptySlotTexture = config.emptySlotTexture?.let { texture ->
            requireNotNull(itemsRegistry.getItem(texture)) {
                "$prefix Unknown texture '$texture'. $errorMimicIdExplanation"
            }
        }
        require(config.slots.isNotEmpty()) { "$prefix Slots should not be empty." }

        val slotMap = mutableMapOf<Int, Slot>()
        config.slots.forEach { (key, slotName) ->
            val slotId = requireNotNull(key.toIntOrNull()) {
                "$prefix Slot ID should be a number, but it was '$key'."
            }
            require(slotId in 0..MAX_SLOT_POSITION) {
                "$prefix Slot ID should be in range 0..$MAX_SLOT_POSITION, but it was '$slotId'."
            }
            slotMap[slotId] = requireNotNull(slots[slotName]) { "$prefix Unknown slot name '$slotName'." }
        }

        return InventoryLayoutImpl(
            name = config.name,
            emptySlotTexture = emptySlotTexture.orEmpty(),
            slotsMap = slotMap.toSortedMap(),
        )
    }
}