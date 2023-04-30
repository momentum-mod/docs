---
categories:
  - guide
permalink: /guide/install-css-assets/
tags:
  - install
  - cs:s
  - counter strike source
  - assets
---

# How to Install CS:S Assets

## Method 1: Install Through Steam (Easiest, Recommended)

The easiest, most straightforward way to install CS:S assets is [purchasing the game through Steam and installing it through there](https://store.steampowered.com/app/240/CounterStrike_Source/).

<iframe src="https://store.steampowered.com/widget/240/" style="border: none;" frameborder="0" width="70%" height="190"></iframe>

This method is **_heavily_** recommended for a couple of reasons:

- Momentum Mod automatically mounts this install location, so once it's done downloading, you're all set!
- Paying at least $5 anywhere on Steam (if you have not already) will be required to submit runs to Momentum
- You won't be in a moral/legal gray area

## Method 2: Install Through SteamCMD (Experienced, Not Recommended)

This guide covers how to install CS:S assets using SteamCMD and the Counter-Strike Source Dedicated Server content repository.

### Prerequisites

- An internet connection.
- Some free space on your PC. (~4GB)

### Getting SteamCMD

#### Linux/Mac

For Linux/Mac refer to Valve's guide:
[**_developer.valvesoftware.com/wiki/SteamCMD_**](https://developer.valvesoftware.com/wiki/SteamCMD)

#### Windows

- Make a folder for SteamCMD.
- Inside of it download [**_SteamCMD_**](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip), and unzip it.
- Start steamcmd.exe and wait until you got `Steam>` waiting for your input.

### Getting the files

Inside SteamCMD, type or paste each of the following line in the order:

- `login anonymous`
- `force_install_dir ./css`
- `app_update 232330 validate`

### Making the files work in Momentum Mod

- Inside your SteamCMD folder go into the folder `css/cstrike` and copy/cut all `.vpk` files starting with the name `cstrike_pak_`.
- From your Momentum folder go to `momentum\custom`, create a folder `cstrikesource` and paste all those previously copied `.vpk` files inside of it. So for example, the path for the `_dir.vpk` file should look like `momentum\custom\cstrikesource\cstrike_pak_dir.vpk`.
- Finally from the Momentum folder open `momentum\gameinfo.txt`:
  - Find:
  ```
              game				|all_source_engine_paths|hl2/hl2_misc.vpk
  ```
  - And add the following in a new line right after:
  ```
              game				momentum/custom/cstrikesource/cstrike_pak_dir.vpk
  ```
  - Save

{{< hint warning >}}
Note that any updates we may do to `gameinfo.txt` could cause this entry to be deleted, so if CS:S assets stop showing up, make sure to make this edit again!
{{< /hint >}}
