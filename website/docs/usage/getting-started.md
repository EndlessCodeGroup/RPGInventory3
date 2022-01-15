---
sidebar_position: 1
---

# Getting Started

:::info

Minimal required Spigot version is **1.16.5**.
ECInventory uses [Library Loader feature][library-loader] added in Spigot 1.16.5.

:::

## 1. Install dependencies

**ECInventory** can't run without the following plugins:

- [Mimic] - required to integrate with other plugins.
- [CommandAPI] (v6.4.0+) - required for commands.
  Used to implement commands with arguments suggestions.  
  *Check which version you need to install for your Spigot version on [Command API GitHub page][commandapi-gh].*

Optionally you can install these plugins to extend **ECInventory** functionality:

- [PlaceholderAPI] - allows using placeholders in inventories name as well as in slots name, description and commands.

## 2. Install ECInventory

Download the latest release from [GitHub Releases page][releases]. Put the `jar` file into `plugins/` directory.

Run the server to check the plugin loaded correctly.
When server is up, type command `/plugins`, ECInventory should be green in this list.

## 3. Download sample data

Download the sample `data.zip` attached to the latest release from [GitHub Releases page][releases].
Unzip it into `plugins/ECInventory/data/` directory.

Reload ECInventory using command `/inv reload` to apply changed data configs.

:::tip

Sample data contain three files:

- `demo.conf` - configuration of `demo` inventory and slots for it
- `equipments.conf` - configuration of `equipments` inventory and slots for it
- `common.conf` - slots used in both `demo` and `equipments` inventories

:::

:::caution

Inventory `equipments` not works properly ("like in RPGInventory") because features ["configure vanilla inventories"][vanilla-inv] and ["slots synchronization"][slots-sync] are not implemented yet.
These features are [planned in v0.2][v0.2].
You can track progress on GitHub.

:::

## 4. Enjoy!

ECInventory is ready to use!
Try to open inventory using command `/inv open demo`.

Next steps:

- Check available [commands](commands.md)
- Read [how to configure](../config/plugin.md) the plugin

:::tip

Please, write any questions and report problems to [Discord].
Let's make this plugin great together!

:::

[library-loader]: https://www.spigotmc.org/threads/510208/#post-4184317
[discord]: https://discord.gg/5NfPsgb

[mimic]: https://www.spigotmc.org/resources/82515/
[commandapi]: https://www.spigotmc.org/resources/62353/
[commandapi-gh]: https://github.com/JorelAli/CommandAPI#readme
[placeholderapi]: https://www.spigotmc.org/resources/6245/

[releases]: https://github.com/EndlessCodeGroup/ECInventory/releases
[vanilla-inv]: https://github.com/EndlessCodeGroup/ECInventory/issues/9
[slots-sync]: https://github.com/EndlessCodeGroup/ECInventory/issues/19
[v0.2]: https://github.com/EndlessCodeGroup/ECInventory/milestone/2