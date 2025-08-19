---
title: trigger_setspeed
categories:
  - entity
tags:
  - trigger
---

A [trigger](https://developer.valvesoftware.com/wiki/Triggers) for setting the speed of the player in a particular axis or direction.
If you want to change the player's velocity, use a [push trigger](/entity/trigger_momentum_push/) instead.
If you want to send the player in a specific direction, use a [catapult](/entity/trigger_catapult/) instead.

## Keyvalues

> **Horizontal speed mode** (HorizontalSpeedMode&lt;**integer**&gt;)

How the trigger affects the player's horizontal (x/y axis) speed:

- **0**: Ignore Mode: Does not affect horizontal speed. **(Default)**
- **1**: Set Exact Mode: Sets the horizontal speed exactly to HorizontalSpeedAmount.
- **2**: Increase Only Mode: Increases the horizontal speed by the HorizontalSpeedAmount.
- **3**: Decrease Only Mode: Decreases the horizontal speed by the HorizontalSpeedAmount.

> **Vertical speed mode** (VerticalSpeedMode&lt;**integer**&gt;)

How the trigger affects the player's vertical (z axis) speed:

- **0**: Ignore Mode: Does not affect vertial speed. **(Default)**
- **1**: Set Exact Mode: Sets the vertial speed exactly to VerticalSpeedAmount.
- **2**: Increase Only Mode: Increases the vertical speed by the VerticalSpeedAmount.
- **3**: Decrease Only Mode: Decreases the vertical speed by the VerticalSpeedAmount.

> **Horizontal speed amount** (HorizontalSpeedAmount&lt;**float**&gt;)

The horizontal speed used by HorizontalSpeedMode to change the speed. **Defaults to 500u/s.**

> **Vertical speed amount** (VerticalSpeedAmount&lt;**float**&gt;)

The vertical speed used by VerticalSpeedMode to change the speed. **Defaults to 100u/s.**

> **Direction** (Direction&lt;**angle**&gt;)

The direction of the speed applied. Only the yaw is used as the vertical speed is determined by the vertical speed amount. **Defaults to 0 0 0.**

> **Update every intervals** (OnThink&lt;**integer**&gt;)

If the trigger should update every interval:

- **0**: Do not update every interval. **(Default)**
- **1**: Update every interval.

> **Interval** (Interval&lt;**float**&gt;)

The length of an interval in seconds. **Defaults to 1.0s.**

> **Every tick** (EveryTick&lt;**integer**&gt;)

If the trigger should update every tick:

- **0**: Do not update every tick. **(Default)**
- **1**: Update every tick.
