---
title: Zone Types
categories:
  - guide
tags:
  - zones
---

![Zone Guide](/images/guide_headers/guide_zone_colours.jpg)

This page covers what zones you will see in Momentum.

## The 4 Zones

The 4 zones you will see are **_start zones_** and **_end zones_**, which usually have **_checkpoint zones_** and **_stage zones_** in between.

**_Start zones_** are {{< color color="lightgreen" text="green" >}} and will start the timer when you leave them.

**_End zones_** are {{< color color="red" text="red" >}} and will stop the timer when you enter it.

**_Stage zones_** are {{< color color="blue" text="blue" >}} and for staged maps, marking the start of a stage.
They will create a split on the timer and can be reset to instead of the beginning of the map.

![Stage Timer](/images/zone_type_guide/stage_timer.png)

**_Checkpoint zones_** are {{< color color="yellow" text="yellow" >}} and can be placed anywhere as they don't mark the beginning of a stage, they only split the timer in a similar manner to a stage zone.

![Checkpoint Timer](/images/zone_type_guide/checkpoint_timer.png)

## Changing Zone Colors

These are the cvars you can use to change the colors of each zone type:

- {{< varref mom_zone_checkpoint_draw_color >}}
- {{< varref mom_zone_end_draw_color >}}
- {{< varref mom_zone_stage_draw_color >}}
- {{< varref mom_zone_start_draw_color >}}

## Changing Zone Render Mode

There are cvars for each zone rendering mode, which can be used to disable them, draw them as outlines or faces, and even draw them through walls:

- {{< varref mom_zone_checkpoint_draw_mode >}}
- {{< varref mom_zone_end_draw_mode >}}
- {{< varref mom_zone_stage_draw_mode >}}
- {{< varref mom_zone_start_draw_mode >}}
