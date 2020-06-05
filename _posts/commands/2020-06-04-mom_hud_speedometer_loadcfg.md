---
title: mom_hud_speedometer_loadcfg
category: command
tags:
  - hud
  - speedometer
optional_params:
  - Gamemode index
ccon_ref: mom_hud_speedometer_savecfg
---

Loads the speedometer setup for the current gamemode from `momentum/cfg/speedometer.vdf`.
For steam users, this will be 

> `Steam/steamapps/common/Momentum Mod/momentum/cfg/speedometer.vdf` 

under the steam install path.

Accepts an optional parameter that specifies which gamemode setup to load.

## Usage Examples

> `mom_hud_speedometer_loadcfg` or `mom_hud_speedometer_loadcfg 0`

If in a map, this loads the speedometer setup for the current gamemode.

> `mom_hud_speedometer_loadcfg 2`

This loads the speedometer setup for the bhop gamemode.

> `mom_hud_speedometer_loadcfg 7`

This loads the speedometer setup for the ahop gamemode.

## Notes

Indices for the different gamemodes match the order they appear in the in-game speedometer setting's gamemode dropbox.

See [`{{ page.ccon_ref }}`]({{ page.ccon_ref }}) for saving to this file.
