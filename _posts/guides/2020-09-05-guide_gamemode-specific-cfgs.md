---
title: Gamemode Specific Configurations

permalink: /guide/gamemode-specific-cfgs/

category: guide
tags:
  - hud
  - cfg
  - speedometer

toc: true
toc_sticky: true
ccom_resreload: hud_reloadcontrols
ccom_speedoload: mom_hud_speedometer_loadcfg
---

<img src="/assets/images/gamemode-specific-cfgs_guide/custom-speedo-layout.png" alt="Custom Speedometer Layout" style="display: block; margin: auto;">

This guide covers all gamemode-specific settings available to players, at least at the time of writing.

## Config Files
When the game loads into a map of a known gamemode, a specific config file located in `momentum/cfg/` is executed if it exists.
The names of these config files correspond to the gamemode prefixes found in map names.
For instance, `momentum/cfg/sj.cfg` will be executed when loading a sticky jump map, such as `sj_amazon`.

Config files themselves are a list of lines to be entered into the console and are usually used to set console variables and binds.
A collection of console variables can be found [here](/categories/#var).

## Speedometer
Custom speedometer setups per gamemode are set in `momentum/cfg/speedometer.vdf`.
Some of these settings can be set through the HUD settings page.
If you don't have this file, run the game and it will be created for you from `momentum/cfg/speedometer_default.vdf`.
[Verify your game files](https://support.steampowered.com/kb_article.php?ref=2037-QEUH-3335) if you have neither.

Included in this file is the functionality to define custom layouts per gamemode. 
To set your own custom layout, the automatic stacking layout needs to be disabled, which is done by setting `"autolayout"` to `"0"` in the specific gamemode you are editing.

The `"layout"` field contains the actual overriding of the speedometer's layout. 
This overrides the fields in `momentum/resource/ui/Speedometer.res`, meaning that you only need to specify what you want to override; if you only want to change the position and not the font, just include `"xpos"`/`"ypos"`.

The screenshot at the beginning of this guide is a custom layout achieved with:
```
"#MOM_GameType_Surf"
{
  "autolayout"		"0"
  "layout"
  {
    "HudSpeedMeter"
    {
      "xpos"		"0"
      "ypos"		"0"
      "wide"		"1920"
      "tall"		"1080"
    }
    "AbsSpeedometer"
    {
      "xpos"		"-10"
      "ypos"		"420"
      "font"		"HudNumbers"
    }
    "LastJumpVelocity"
    {
      "xpos"		"-10"
      "ypos"		"410"
      "font"		"HudNumbersSmallBold"
    }
    "RampBoardVelocity"
    {
      "xpos"		"-40"
      "ypos"		"432"
    }
    "RampLeaveVelocity"
    {
      "xpos"		"20"
      "ypos"		"432"
    }
    "StageEnterExitVelocity"
    {
      "xpos"		"-10"
      "ypos"		"448"
      "font"		"HudNumbersSmallBold"
    }
  }
  ...
}
```

As a start, feel free to copy this example, or simply copy the entire contents of `momentum/resource/ui/Speedometer.res` into the `"layout"` field. 

The layout can be reloaded within the game by using [`{{ page.ccom_speedoload }}`](/command/{{ page.ccom_speedoload }}). 
Alternatively, [`{{ page.ccom_resreload }}`](/command/{{ page.ccom_resreload }}) will reload all control resource files, including the custom, gamemode-specific speedometer layout.
