---
title: How to Install CS:S Assets
permalink: /guide/install-css-assets/
category: guide
tags:
  - install
  - cs:s
---


This guide covers how to install CS:S assets using SteamCMD.
## Prerequisites 
- An internet connection.
- Some free space on your PC. (~4GB)

## Getting SteamCMD
For Linux/Mac refer to Valve's guide:
https://developer.valvesoftware.com/wiki/SteamCMD
### Windows:
- Make a folder for SteamCMD.
- Inside of it download [***SteamCMD***](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip), and unzip it. 
- Start steamcmd.exe and wait until you got 'Steam>' waiting for your input.

## Getting CS:S files

Inside SteamCMD, type or paste each of the following line in the order:
- `login anonymous`
- `force_install_dir ./css`
- `app_update 232330 validate`

## Installing CS:S files

- Inside your SteamCMD folder go into the folder `css/cstrike` and copy/cut all `.vpk` files starting with the name `cstrike_pak_`.
- From your momentum folder go to `momentum\custom`, create a folder `cstrikesource` and paste all previous `.vpk` inside of it.
- Finally from the momentum folder open `momentum\gameinfo.txt`:
  - Find:
  ```
              game				|all_source_engine_paths|hl2/hl2_misc.vpk
  ```
   - And add the following in a new line right after:
  ```
              game				momentum/custom/cstrikesource/cstrike_pak_dir.vpk
  ```
  - Save
