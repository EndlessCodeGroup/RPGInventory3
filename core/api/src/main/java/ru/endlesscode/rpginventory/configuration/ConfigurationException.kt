/*
 * This file is part of RPGInventory3.
 * Copyright (C) 2019 EndlessCode Group and contributors
 *
 * RPGInventory3 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * RPGInventory3 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with RPGInventory3.  If not, see <http://www.gnu.org/licenses/>.
 */

package ru.endlesscode.rpginventory.configuration

class ConfigurationException : RuntimeException {

    internal constructor(message: String, cause: Throwable) : super(message, cause)

    internal constructor(cause: Throwable) : super(cause)

}

internal fun configError(cause: Throwable): Nothing = throw ConfigurationException(cause)

internal fun configError(message: String, cause: Throwable): Nothing = throw ConfigurationException(message, cause)
