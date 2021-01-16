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
- some free space on your pc. (~20GB)

## Getting SteamCMD

- Make a folder for SteamCMD.
- Inside of it download [***SteamCMD***](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip), and unzip it. 
- Start steamcmd.exe and wait until you got 'Steam>' waiting for your input.

## Getting CSS files

Inside SteamCMD, type or paste each of the following line in the order:
- `login anonymous`
- `force_install_dir ./css`
- `app_update 232330 validate`

Now for unpacking it do :
- Hold Ctrl+Shift then right click on the 'css' folder and select "Open command window here" or "Open PowerShell here".
- Inside of it type or paste `.\bin\vpk.exe .\cstrike\cstrike_pak_dir.vpk`. (wait for it to do his stuff)
- Now everything is extracted and should be in a folder called 'cstrike_pak_dir' in 'css/cstrike'.
- from 'css/cstrike' copy the 'materials', 'models' and 'sound' folder and paste it to your Momentum folder.
