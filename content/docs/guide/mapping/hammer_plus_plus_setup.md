---
title: Hammer++ Setup
categories:
  - guide
tags:
  - mapping
  - tools
---

## Background

Momentum Mod ships with a customized build of Hammer (named "Strata Hammer") which includes some, but not all of Hammer++'s features. Our development has been geared more towards stability than new features, with a focus on porting to Qt for cross platform UI and bug fixing. While Strata Hammer should be perfectly usable (and we appreciate testers), it will be a while until Hammer++ features like accurate lighting preview are fully implemented. If you prefer using Hammer++, that is completely reasonable and this guide should get you set up.

The Garry's Mod build of Hammer++ is recommended due to it being much easier to set up. The CS:GO build will require more tools and disk space to set up, but is required for [some shaders](https://developer.valvesoftware.com/wiki/Category:Counter-Strike:_Global_Offensive_pixel_shaders) such as `4WayBlend`.

# Hammer++ for Garry's Mod (Recommended)

**Prerequisites**:
- [Hammer++ Garry's Mod Build](https://ficool2.github.io/HammerPlusPlus-Website/download.html)

## Hammer++ Configuration

1. Follow the installation instructions in the README.txt for the Hammer++ Garry's Mod build
2. Copy the following configuration:

![Hammer++ Game Configurations](/images/hammer-plus-plus-setup/gmod_game_configurations.png)
![Hammer++ Build Programs](/images/hammer-plus-plus-setup/gmod_build_programs.png)

## Mounting Games

In order for Hammer++ to load content from the various games that Momentum Mod mounts, follow these steps:

1. Open mount.cfg in `GarrysMod\garrysmod\cfg`
2. Add the following content to mount.cfg (adjust the paths accordingly):
```
"mountcfg"
{
    "cstrike"	"C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Source\cstrike"
    "tf"		"C:\Program Files (x86)\Steam\steamapps\common\Team Fortress 2\tf"
    "portal"	"C:\Program Files (x86)\Steam\steamapps\common\Portal\portal"
    "portal2"	"C:\Program Files (x86)\Steam\steamapps\common\Portal 2\portal2"
    "momentum"	"C:\Program Files (x86)\Steam\steamapps\common\Momentum Mod Playtest\momentum"
}
```

# Hammer++ for Counter-Strike: Global Offensive

**Prerequisites**:
- [GCFScape](https://nemstools.github.io/pages/GCFScape-Download.html)
- [Hammer++ CS:GO Build](https://ficool2.github.io/HammerPlusPlus-Website/download.html)
- About 42 GB of disk space (depending on how many games are mounted)

## Hammer++ Configuration

1. Opt into the CS:GO legacy branch in Steam by right clicking Counter-Strike 2 -> Properties -> Betas -> Select `csgo_legacy - Legacy Version of CS:GO`
2. Install GCFScape and extract the Hammer++ .zip file into your `Counter-Strike Global Offensive\bin` folder.
3. Run hammerplusplus.exe
4. Copy the following configuration:

![Hammer++ Game Configurations](/images/hammer-plus-plus-setup/csgo_game_configurations.png)
![Hammer++ Build Programs](/images/hammer-plus-plus-setup/csgo_build_programs.png)

## Mounting Games

In order for Hammer++ to load content from the various games that Momentum Mod mounts, follow these steps:

1. Extract materials, models, and sounds from .vpk files:
    - Extract `Counter-Strike Global Offensive\csgo\pak01_dir.vpk` into `Counter-Strike Global Offensive\csgo\mounted_content\csgo_content`
    - Extract `Counter-Strike Source\cstrike\cstrike_pak_dir.vpk` into `Counter-Strike Global Offensive\csgo\mounted_content\cstrike_content`
    - Extract `Portal 2\portal2\pak01_dir.vpk` into `Counter-Strike Global Offensive\csgo\mounted_content\portal2_content`
    - Extract `Team Fortress 2\tf\tf2_misc_dir.vpk` and `Team Fortress 2\tf\tf2_textures_dir.vpk` into `Counter-Strike Global Offensive\csgo\mounted_content\tf2_content`
2. Mount Momentum Mod content by running this command in a command prompt: `mklink /D "<path to steam games>\Counter-Strike Global Offensive\csgo\mounted_content\momentum_content" "<path to steam games>\Momentum Mod Playtest\momentum"`
3. Open `Momentum Mod Playtest\momentum\gameinfo.txt` and copy the following contents into the SearchPaths section:
```
game        "csgo/mounted_content/csgo_content"
game        "csgo/mounted_content/cstrike_content"
game        "csgo/mounted_content/portal2_content"
game        "csgo/mounted_content/tf2_content"
game        "csgo/mounted_content/momentum_content"
```
4. Open Hammer++ and the content from these games should load now.

{{< hint danger >}}
**Warning:** If Hammer++ crashes on startup, you may have to delete the particles folders that were extracted from the .vpk files.
{{< /hint >}}

## Lights.rad Setup

In order to support light emitting textures from Portal 2, copy the contents from `Portal 2\portal2\lights.rad` and paste them into `Counter-Strike Global Offensive\csgo\lights.rad`
