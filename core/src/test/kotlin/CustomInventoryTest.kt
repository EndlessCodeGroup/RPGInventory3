package ru.endlesscode.rpginventory

import io.kotest.assertions.assertSoftly
import io.kotest.core.spec.style.FeatureSpec
import io.kotest.matchers.booleans.shouldBeTrue
import io.kotest.matchers.shouldBe
import io.mockk.spyk
import io.mockk.verify
import org.bukkit.Material
import org.bukkit.inventory.ItemStack
import ru.endlesscode.rpginventory.internal.InstantTaskScheduler
import ru.endlesscode.rpginventory.slot.*
import ru.endlesscode.rpginventory.test.TestInventoryClickEvent
import ru.endlesscode.rpginventory.test.TestInventoryView
import ru.endlesscode.rpginventory.test.mockItemFactory
import ru.endlesscode.rpginventory.util.AIR

class CustomInventoryTest : FeatureSpec({

    val inventoryLayout = InventoryLayoutImpl(
        name = "test",
        emptySlotTexture = AIR,
        slotsMap = sortedMapOf(
            1 to SlotImpl(
                id = "test-slot",
                name = "Test Slot",
                texture = ItemStack(Material.BLACK_STAINED_GLASS_PANE),
                type = Slot.Type.STORAGE,
                contentValidator = ItemValidator.any,
                maxStackSize = 4,
            )
        )
    )

    // SUT
    val inventory = spyk(CustomInventory(inventoryLayout, InstantTaskScheduler()))
    val slot = inventory.getSlot(0)

    beforeSpec {
        mockItemFactory()
    }

    feature("inventory interaction handling") {
        val inventoryView = TestInventoryView()
        val event = TestInventoryClickEvent(inventoryView)

        fun takeContent(content: ItemStack = AIR): TakeSlotContent {
            slot.content = content
            return TakeSlotContent(event, slot)
        }

        fun placeContent(
            item: ItemStack = ItemStack(Material.STICK),
            current: ItemStack = AIR,
        ): PlaceSlotContent {
            slot.content = current
            event.cursor = item
            return PlaceSlotContent(event, slot)
        }

        scenario("take content from empty slot") {
            val interaction = takeContent()
            inventory.handleInteraction(interaction)

            event.isCancelled.shouldBeTrue()
        }

        scenario("take content from slot") {
            val interaction = takeContent(ItemStack(Material.BLAZE_ROD))
            inventory.handleInteraction(interaction)

            verify { inventory.syncSlotWithView(slot) }
        }

        scenario("place item to empty slot") {
            val interaction = placeContent()
            val item = interaction.item
            inventory.handleInteraction(interaction)

            assertSoftly {
                slot.content shouldBe item
                event.currentItem shouldBe AIR
            }
        }

        scenario("place more than max stack size to empty slot") {
            val item = ItemStack(Material.STICK, slot.maxStackSize + 1)
            val interaction = placeContent(item)
            inventory.handleInteraction(interaction)

            assertSoftly {
                slot.content shouldBe ItemStack(Material.STICK, slot.maxStackSize)
                event.cursor shouldBe ItemStack(Material.STICK, 1)
            }
        }

        scenario("place similar item to full slot") {
            val item = ItemStack(Material.STICK)
            val currentContent = ItemStack(Material.STICK, slot.maxStackSize)
            val interaction = placeContent(item, current = currentContent)
            inventory.handleInteraction(interaction)

            assertSoftly {
                slot.content shouldBe currentContent
                event.isCancelled.shouldBeTrue()
            }
        }

        scenario("place similar item to slot") {
            val item = ItemStack(Material.STICK)
            val interaction = placeContent(item, current = ItemStack(Material.STICK, slot.maxStackSize - 1))
            inventory.handleInteraction(interaction)

            slot.content shouldBe ItemStack(Material.STICK, slot.maxStackSize)
        }

        scenario("place similar item to slot with overflow") {
            val item = ItemStack(Material.STICK, 2)
            val interaction = placeContent(item, current = ItemStack(Material.STICK, slot.maxStackSize - 1))
            inventory.handleInteraction(interaction)

            assertSoftly {
                slot.content shouldBe ItemStack(Material.STICK, slot.maxStackSize)
                event.cursor shouldBe ItemStack(Material.STICK, 1)
            }
        }

        scenario("replace item in slot") {
            val newItem = ItemStack(Material.BLAZE_ROD)
            val currentItem = ItemStack(Material.STICK)
            val interaction = placeContent(newItem, current = currentItem)
            inventory.handleInteraction(interaction)

            slot.content shouldBe newItem
        }

        scenario("try to replace item with item not fitting to slot") {
            val largeStack = ItemStack(Material.STICK, slot.maxStackSize + 1)
            val currentItem = ItemStack(Material.BLAZE_ROD)
            val interaction = placeContent(largeStack, current = currentItem)
            inventory.handleInteraction(interaction)

            assertSoftly {
                slot.content shouldBe currentItem
                event.isCancelled.shouldBeTrue()
            }
        }
    }
})
