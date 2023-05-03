---
title: trigger_momentum_resetonehop
categories:
  - entity
tags:
  - trigger
  - map
  - track
---

Trigger that resets all of the onehop triggers the player has touched.

## Keyvalues

> **Track Number** (track_number&lt;**integer**&gt;)

The track that this trigger belongs to:

- **-1**: All Tracks
- **0**: Main Map
- **1+**: Bonus Tracks

## Output

> OnResetOnehops(**void**)

Fires when all hops are being reset.
