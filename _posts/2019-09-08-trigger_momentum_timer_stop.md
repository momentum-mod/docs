---
title: trigger_momentum_timer_stop
category: entity
tags:
 - timer
 - trigger
 - stop
---

----
<img src="/assets/images/trigger_momentum_timer_stop/end_zone.jpg" alt="end zone" style="display: block; margin: auto;">
  
A <a href="https://developer.valvesoftware.com/wiki/Triggers" target="_blank">trigger</a> entity in Momentum Mod that ends the map or bonus upon entering it.
 
> Looking for more general info on Zones?   
> Check the [Zone Types page](/guide/zone-types/).

## Keyvalues

>**Track Number** (track_number&lt;**integer**&gt;)

The track that this zone belongs to: 

 - **-1**: All Tracks
 - **0**: Main Map
 - **1+**: Bonus Tracks

 >**Zone Number** (zone_number&lt;**integer**&gt;)

 The zone number of the trigger: 

 - Zone number 0 is reserved for invalid and stop triggers.
 - Zone number 1 is reserved for start triggers.
 - Zone numbers 2 and up are for stage / checkpoint triggers.  
