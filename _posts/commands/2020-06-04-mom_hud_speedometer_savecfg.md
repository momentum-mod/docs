---
title: mom_hud_speedometer_savecfg
category: command
tags:
  - hud
  - speedometer
optional_params:
  - Gamemode index
ccon_ref: mom_hud_speedometer_loadcfg
---

Saves the current speedometer setup for the current gamemode to `momentum/cfg/speedometer.vdf`.
For steam users, this will be 

> `Steam/steamapps/common/Momentum Mod/momentum/cfg/speedometer.vdf` 

under the steam install path.

Accepts an optional parameter that specifies which gamemode setup to write to.

## Usage Examples

> `mom_hud_speedometer_savecfg` or `mom_hud_speedometer_savecfg 0`

If in a map, this saves the current speedometer setup for the current gamemode to file.

> `mom_hud_speedometer_savecfg 1`

This saves the current speedometer setup to the surf gamemode section of the VDF file.

> `mom_hud_speedometer_savecfg 4`

This saves the current speedometer setup to the sticky jump gamemode section of the VDF file.

## Notes

Indices for the different gamemodes match the order they appear in the in-game speedometer setting's gamemode dropbox.

See [`{{ page.ccon_ref }}`](/command/{{ page.ccon_ref }}) for loading from this file.
