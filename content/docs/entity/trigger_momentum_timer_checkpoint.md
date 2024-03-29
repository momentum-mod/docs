---
title: trigger_momentum_timer_checkpoint
categories:
  - entity
tags:
  - timer
  - trigger
  - checkpoint
tool_texture: trigger_checkpoint
---

![Checkpoint tool texture](/images/trigger_momentum_timer_checkpoint/checkpoint.jpg)

A [trigger](https://developer.valvesoftware.com/wiki/Triggers) entity in Momentum Mod that splits the timer.  
It is used on Linear maps and can not be reset to, unlike Stages.

{{< hint danger >}}
Checkpoint Zones cannot be used at the same time as Stage Zones.
{{< /hint >}}

> Looking for more general info on Zones?  
> Check the [Zone Types page](/guide/zone-types/).

## Keyvalues

> **Track Number** (track_number&lt;**integer**&gt;)

The track that this zone belongs to:

- **-1**: All Tracks
- **0**: Main Map
- **1+**: Bonus Tracks

> **Zone Number** (zone_number&lt;**integer**&gt;)

The zone number of the trigger:

- Zone number 0 is reserved for invalid and stop triggers.
- Zone number 1 is reserved for start triggers.
- Zone numbers 2 and up are for stage / checkpoint triggers.
