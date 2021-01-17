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

- Inside your css folder move the folder `cstrike` at the root of the momentum folder.
- Inside the momentum folder open `momentum\gameinfo.txt`:
  - Find:
  ```
  game                "C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Source\cstrike\cstrike_pak.vpk"
  game                "C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Source\cstrike\download"
  game                "C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike Source\cstrike"
  ```
   - And replace it by:
  ```
  game				|all_source_engine_paths|cstrike/cstrike_pak.vpk
  game				|all_source_engine_paths|cstrike/download
  game				|all_source_engine_paths|cstrike
  ```
  - Save
