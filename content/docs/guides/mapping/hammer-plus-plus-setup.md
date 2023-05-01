---
title: Hammer++ Setup
categories:
  - guide
tags:
  - mapping
  - tools
---

# Hammer++ for Momentum Mod

Momentum Mod is not officially supported by Hammer++, but can be made compatible by following this guide.

**Prerequisites**:

- [GCFScape](https://nemstools.github.io/pages/GCFScape-Download.html)
- [Hammer++ CS:GO Build](https://ficool2.github.io/HammerPlusPlus-Website/download.html)
- About 42 GB of disk space (depending on how many games are mounted)

## Hammer++ Configuration

1. Install GCFScape and extract the Hammer++ .zip file into your `Counter-Strike Global Offensive\bin` folder.
2. Run hammerplusplus.exe
3. Copy the following configuration:

![Hammer++ Game Configurations](/images/hammer-plus-plus-setup/hammer_game_configurations.png)
![Hammer++ Build Programs](/images/hammer-plus-plus-setup/hammer_build_programs.png)

## Mounting Games

In order for Hammer++ to load content from the various games that Momentum Mod mounts, follow these steps:

1. Extract materials, models, and sounds from .vpk files:
   - Extract `Counter-Strike Global Offensive\csgo\pak01_dir.vpk` into `Counter-Strike Global Offensive\csgo\csgo_content`
   - Extract `Counter-Strike Source\cstrike\cstrike_pak_dir.vpk` into `Counter-Strike Global Offensive\csgo\cstrike_content`
   - Extract `Portal 2\portal2\pak01_dir.vpk` into `Counter-Strike Global Offensive\csgo\portal2_content`
   - Extract `Team Fortress 2\tf\tf2_misc_dir.vpk` and `Team Fortress 2\tf\tf2_textures_dir.vpk` into `Counter-Strike Global Offensive\csgo\tf2_content`
2. Mount Momentum Mod content by running this command in a command prompt: `mklink /D "<path to steam games>\Counter-Strike Global Offensive\csgo\momentum_content" "<path to steam games>\Momentum Mod Playtest\momentum"`
3. Open `Momentum Mod Playtest\momentum\gameinfo.txt` and copy the following contents into the SearchPaths section:

```
game        "csgo/csgo_content"
game        "csgo/cstrike_content"
game        "csgo/portal2_content"
game        "csgo/tf2_content"
game        "csgo/momentum_content"
```

4. Open Hammer++ and the content from these games should load now.

{{< hint danger >}}
**Warning:** If Hammer++ crashes on startup, you may have to delete the particles folders that were extracted from the .vpk files.
{{< /hint >}}

## Lights.rad Setup

In order to support light emitting textures from Portal 2, copy the contents from `Portal 2\portal2\lights.rad` and paste them into `Counter-Strike Global Offensive\csgo\lights.rad`
