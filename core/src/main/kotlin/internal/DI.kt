package ru.endlesscode.rpginventory.internal

import kotlinx.serialization.hocon.Hocon
import org.bukkit.plugin.Plugin
import ru.endlesscode.mimic.bukkit.load
import ru.endlesscode.mimic.items.BukkitItemsRegistry
import ru.endlesscode.rpginventory.configuration.ConfigurationHolder
import ru.endlesscode.rpginventory.configuration.MainConfiguration
import ru.endlesscode.rpginventory.configuration.data.DataConfig
import ru.endlesscode.rpginventory.configuration.data.DataHolder
import ru.endlesscode.rpginventory.misc.I18N
import ru.endlesscode.rpginventory.misc.I18NBukkit

internal object DI {

    private lateinit var plugin: Plugin
    private val servicesManager get() = plugin.server.servicesManager
    private val dataPath get() = plugin.dataFolder.toPath()

    private val itemsRegistry: BukkitItemsRegistry by lazy { checkNotNull(servicesManager.load()) }

    val hocon: Hocon by lazy { Hocon { useConfigNamingConvention = true } }

    private val configHolder by lazy { ConfigurationHolder(dataPath, MainConfiguration.SERIALIZER) }
    private val dataHolder by lazy { DataHolder(itemsRegistry, dataPath) }

    val locale: I18N by lazy { I18NBukkit(dataPath, config.locale) }
    val config: MainConfiguration get() = configHolder.config
    val data: DataConfig get() = dataHolder.data

    fun init(plugin: Plugin) {
        this.plugin = plugin
    }

    fun reload() {
        configHolder.reload()
        dataHolder.reload()
        locale.reload(config.locale)
    }
}