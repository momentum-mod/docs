---
title: Gamemode Specific Configurations

permalink: /guide/gamemode-specific-cfgs/

category: guide
tags:
  - hud
  - cfg

toc: true
toc_sticky: true
---

This guide covers all gamemode-specific settings available to players, at least at the time of writing.

## Config Files
When the game loads into a map of a known gamemode, a specific config file located in `momentum/cfg/` is executed if it exists.
The names of these config files correspond to the gamemode prefixes found in map names.
For instance, `momentum/cfg/sj.cfg` will be executed when loading a sticky jump map, such as `sj_amazon`.

Config files themselves are a list of lines to be entered into the console and are usually used to set console variables and binds. A collection of console variables can be found [here](/categories/#var).
