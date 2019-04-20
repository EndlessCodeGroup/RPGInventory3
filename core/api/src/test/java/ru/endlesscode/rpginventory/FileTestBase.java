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

package ru.endlesscode.rpginventory;

import org.jetbrains.annotations.NotNull;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import ru.endlesscode.rpginventory.internal.function.CheckedConsumer;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

public class FileTestBase {
    protected Path testDir;
    protected Path tmpDir;

    @Before
    public void setUp() throws Exception {
        this.testDir = Files.createDirectories(Paths.get("testFiles"));
        this.tmpDir = Files.createTempDirectory(testDir, null);
    }

    @After
    public void tearDown() throws Exception {
        Files.walk(tmpDir)
                .sorted(Comparator.reverseOrder())
                .forEach(CheckedConsumer.wrap(Files::delete));
    }

    protected void createFile(@NotNull String path, @NotNull String content) throws IOException {
        Path target = tmpDir.resolve(path);
        Files.createDirectories(target.getParent());
        Files.write(target, content.getBytes(), StandardOpenOption.CREATE);
    }

    protected void assertFileContentEquals(@NotNull Path file, @NotNull String... content) throws IOException {
        assertFileContentEquals(file, Arrays.asList(content));
    }

    protected void assertFileContentEquals(@NotNull Path file, @NotNull List<String> content) throws IOException {
        final List<String> strings = Files.readAllLines(file);
        Assert.assertEquals(content, strings);
    }
}
