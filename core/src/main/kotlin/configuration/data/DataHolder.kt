package ru.endlesscode.rpginventory.configuration.data

import kotlinx.serialization.hocon.Hocon
import ru.endlesscode.mimic.items.BukkitItemsRegistry
import ru.endlesscode.rpginventory.InventoryLayout
import ru.endlesscode.rpginventory.InventoryLayout.Companion.MAX_SLOT_ID
import ru.endlesscode.rpginventory.InventoryLayoutImpl
import ru.endlesscode.rpginventory.configuration.ConfigurationCollector
import ru.endlesscode.rpginventory.internal.DI
import ru.endlesscode.rpginventory.slot.ItemValidator
import ru.endlesscode.rpginventory.slot.Slot
import ru.endlesscode.rpginventory.slot.SlotImpl
import ru.endlesscode.rpginventory.util.Log
import ru.endlesscode.rpginventory.util.MAX_STACK_SIZE
import ru.endlesscode.rpginventory.util.orEmpty
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
        val textureItem = requireNotNull(itemsRegistry.getItem(config.texture)) {
            "$prefix Unknown texture '${config.texture}'. $errorMimicIdExplanation"
        }
        val correctMaxStackSize = config.maxStackSize.coerceIn(1, MAX_STACK_SIZE)
        if (correctMaxStackSize != config.maxStackSize) {
            Log.w(
                "$prefix max stack size should be in range 1..$MAX_STACK_SIZE, but was '${config.maxStackSize}'.",
                "Will be used $correctMaxStackSize instead, please fix slot config.",
            )
        }

        return SlotImpl(
            id = id,
            name = config.name,
            texture = textureItem,
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
            require(slotId in 0..MAX_SLOT_ID) {
                "$prefix Slot ID should be in range 0..$MAX_SLOT_ID, but it was '$slotId'."
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