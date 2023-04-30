---
title: Zone Types
permalink: /guide/zone-types/
category: guide
tags:
  - zones
toc: true
toc_sticky: true

cvar_start_draw_mode: mom_zone_start_draw_mode
cvar_end_draw_mode: mom_zone_end_draw_mode
cvar_stage_draw_mode: mom_zone_stage_draw_mode
cvar_checkpoint_draw_mode: mom_zone_checkpoint_draw_mode

cvar_start_draw_color: mom_zone_start_draw_color
cvar_end_draw_color: mom_zone_end_draw_color
cvar_stage_draw_color: mom_zone_stage_draw_color
cvar_checkpoint_draw_color: mom_zone_checkpoint_draw_color
---
![Zone Guide](/assets/images/guide_headers/guide_zone_colours.jpg)

This page covers what zones you will see in Momentum.
## The 4 Zones
The 4 zones you will see are ***start zones*** and ***end zones***, which usually have ***checkpoint zones*** and ***stage zones*** in between.

***Start zones*** are <span style="color:green">green</span> and will start the timer when you leave them.  

***End zones*** are <span style="color:red">red</span> and will stop the timer when you enter it.  

***Stage zones*** are <span style="color:blue">blue</span> and for staged maps, marking the start of a stage.
They will create a split on the timer and can be reset to instead of the beginning of the map.  

![Stage Timer](/assets/images/zone_type_guide/stage_timer.png)

***Checkpoint zones*** are <span style="color:yellow">yellow</span> and can be placed anywhere as they don't mark the beginning of a stage, they only split the timer in a similar manner to a stage zone.

![Checkpoint Timer](/assets/images/zone_type_guide/checkpoint_timer.png)

## Changing Zone Colors
These are the cvars you can use to change the colors of each zone type:  

 * [`{{ page.cvar_start_draw_color }}`](/var/{{ page.cvar_start_draw_color }})
 * [`{{ page.cvar_end_draw_color }}`](/var/{{ page.cvar_end_draw_color }})
 * [`{{ page.cvar_stage_draw_color }}`](/var/{{ page.cvar_stage_draw_color }})
 * [`{{ page.cvar_checkpoint_draw_color }}`](/var/{{ page.cvar_checkpoint_draw_color }})

## Changing Zone Render Mode
There are cvars for each zone rendering mode, which can be used to disable them, draw them as outlines or faces, and even draw them through walls:  

 * [`{{ page.cvar_start_draw_mode }}`](/var/{{ page.cvar_start_draw_mode }})
 * [`{{ page.cvar_end_draw_mode }}`](/var/{{ page.cvar_end_draw_mode }})
 * [`{{ page.cvar_stage_draw_mode }}`](/var/{{ page. cvar_stage_draw_mode }})
 * [`{{ page.cvar_checkpoint_draw_mode }}`](/var/{{ page.cvar_checkpoint_draw_mode }})
