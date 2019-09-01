---
title: Zone Types
permalink: /guide/zone-types/
category: guide
tags:
  - zones
toc: true
---
<img src="/assets/images/guide_headers/guide_zone_colours.jpg" alt="Zone Guide" style="display: block; margin: auto;">

This page covers what Zones you will see in Momentum.
## The 4 Zones
The 4 Zones you will see are ***Start Zones*** and ***End Zones***, which can occasionally have ***Checkpoint Zones*** and ***Stage Zones*** in between.

***Start Zones*** are <span style="color:green">Green</span> and will start the Timer when you leave them.  

***End Zones*** are <span style="color:red">Red</span> and will stop the Timer when you enter it.  

***Stage Zones*** are <span style="color:blue">Blue</span> and for Staged maps, marking the start of a Stage.
They will create a split on the Timer and can be reset to instead of the beginning of the map.  

<img src="/assets/images/zone_type_guide/stage_timer.png" alt="Stage Timer" style="display: block; margin: auto;">

***Checkpoint Zones*** are <span style="color:yellow">Yellow</span> but can be placed anywhere as they don't mark the beginning of a Stage, they only split the timer in a similar manner to a Stage Zone.

<img src="/assets/images/zone_type_guide/checkpoint_timer.png" alt="Checkpoint Timer" style="display: block; margin: auto;">

## Changing Zone Colours
These are the cvars you can use to change the colours of each Zone type, the colours are in Hexadecimal:  
```
mom_zone_start_outline_color 00FF00FF
mom_zone_stage_outline_color 0000FFFF
mom_zone_end_outline_color FF0000FF
mom_zone_checkpoint_outline_color FFFF00FF
```

## Disabling Zone Outlines
If you wish to disable the Zone appearing altogether, there is a cvar for each type as well:  
```
mom_zone_start_outline_enable 1
mom_zone_stage_outline_enable 1
mom_zone_end_outline_enable 1
mom_zone_checkpoint_outline_enable 1
```