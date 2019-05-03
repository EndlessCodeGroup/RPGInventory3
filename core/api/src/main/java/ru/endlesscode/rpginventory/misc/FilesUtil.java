/*
 * This file is part of RPGInventory.
 * Copyright (C) 2017 EndlessCode Group and contributors
 *
 * RPGInventory is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * RPGInventory is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with RPGInventory.  If not, see <http://www.gnu.org/licenses/>.
 */

package ru.endlesscode.rpginventory.misc;

import org.jetbrains.annotations.NotNull;
import ru.endlesscode.rpginventory.internal.function.CheckedConsumer;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@SuppressWarnings("WeakerAccess")
public class FilesUtil {

    public static String readFileToString(@NotNull Path file) {
        return readFileToString(file, StandardCharsets.UTF_8);
    }

    public static String readFileToString(@NotNull Path file, Charset charset) {
        try {
            return Files.lines(file, charset).collect(Collectors.joining("\n"));
        } catch (IOException e) {
            throw new IllegalArgumentException(String.format(
                    "Given file \"%s\" can't be read",
                    file.toAbsolutePath().toString()
            ), e);
        }
    }

    public static void copyResourceToFile(@NotNull String resource, @NotNull Path file) {
        String validResourcePath = resource.startsWith("/") ? resource : "/".concat(resource);

        try (InputStream is = FilesUtil.class.getResourceAsStream(validResourcePath)) {
            if (is == null) {
                throw new IllegalArgumentException(String.format("Resource file \"%s\" not exists", validResourcePath));
            }

            Files.copy(is, file);
        } catch (IOException e) {
            throw new IllegalArgumentException(String.format(
                    "Failed to copy \"%s\" to given target: \"%s\"",
                    validResourcePath, file.toAbsolutePath().toString()
            ), e);
        }
    }

    public static Path mergeFiles(@NotNull Path pathToDir) {
        return mergeFiles(pathToDir, path -> true);
    }

    public static Path mergeFiles(@NotNull Path pathToDir, @NotNull Predicate<Path> predicate) {
        final Path tmp;
        try {
            tmp = Files.createTempFile(pathToDir, null, ".merged");
            Files.walk(pathToDir)
                    .filter(path -> Files.isRegularFile(path) && !path.equals(tmp))
                    .filter(predicate)
                    .map(file -> readFileToString(file) + "\n")
                    .forEach(CheckedConsumer.wrap(content -> Files.write(tmp, content.getBytes(), StandardOpenOption.APPEND)));
        } catch (IOException e) {
            throw new IllegalArgumentException(String.format(
                    "Files in given directory \"%s\" can't be merged",
                    pathToDir.toAbsolutePath().toString()
            ), e);
        }
        return tmp;
    }

    public static void makeSureDirectoryExists(@NotNull Path directory) throws IOException {
        if (!Files.isDirectory(directory)) {
            final Path tmp = directory.getParent().resolve(
                    directory.getFileName().toString() + ".niceJoke." + System.currentTimeMillis() % 10_000
            );
            Files.move(directory, tmp);
        }

        Files.createDirectories(directory);
    }

}
