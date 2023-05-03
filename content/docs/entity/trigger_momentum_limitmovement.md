---
title: trigger_momentum_limitmovement
categories:
  - entity
tags:
  - trigger
  - player
  - map
  - ahop
  - bhop
  - movement
---

![Limitmovement trigger texture](/images/trigger_momentum_limitmovement/limitmovement.jpg)

Trigger that prevents the player from doing specific keypress movements.

## Keyvalue

> **Track Number** (track_number&lt;**integer**&gt;)

The track that this trigger belongs to:

- **-1**: All Tracks
- **0**: Main Map
- **1+**: Bonus Tracks

## Flags

> **Prevent the player from moving forward (8192)**

**_(Disabled by default)_**

> **Prevent the player from moving to the left (16384)**

**_(Disabled by default)_**

> **Prevent the player from moving to the right (32768)**

**_(Disabled by default)_**

> **Prevent the player from moving backward (65536)**

**_(Disabled by default)_**

> **Prevent the player from jumping (131072)**

**_(Disabled by default)_**

> **Prevent the player from crouching (262144)**

**_(Disabled by default)_**

> **Prevent the player from bhopping (524288)**

**_(Disabled by default)_**

> **Prevent the player from walking (1048576)**

**_(Disabled by default)_**

> **Prevent the player from sprinting (2097152)**

**_(Disabled by default)_**
