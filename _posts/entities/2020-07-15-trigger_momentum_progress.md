---
title: trigger_momentum_progress 
category: entity
tags:
 - trigger
 - track
 - map
---

----
Used for storing a discrete progress number in the player.

## Keyvalues

>**Progress Number** (progress_number&lt;**integer**&gt;)

 - **-1**: An optional number to assign to this progress trigger, used by filter_momentum_progress.
 
>**Track Number** (track_number&lt;**integer**&gt;)

The track that this trigger belongs to: 

 - **-1**: All Tracks
 - **0**: Main Map
 - **1+**: Bonus Tracks


## Output

> OnResetOnehops(**void**) 

Fired when the player touches this trigger.

