---
title: trigger_reversespeed
categories:
  - entity
tags:
  - trigger
---

A [trigger](https://developer.valvesoftware.com/wiki/Triggers) for reversing the speed of the player in a particular axis.

## Keyvalues

> **Reverse horizontal speed** (ReverseHorizontal&lt;**integer**&gt;)

Whether or not the trigger reverses the player's horizontal (x/y axis) speed:

- **0**: Do not reverse horizontal speed.
- **1**: Reverse horizontal speed. **(Default)**

> **Reverse vertical speed** (ReverseVertical&lt;**integer**&gt;)

Whether or not the trigger reverses the player's vertical (z axis) speed:

- **0**: Do not reverse vertical speed.
- **1**: Reverse vertical speed. **(Default)**

> **Update every intervals** (OnThink&lt;**integer**&gt;)

If the trigger should update every interval:

- **0**: Do not update every interval. **(Default)**
- **1**: Update every interval.

> **Interval** (Interval&lt;**float**&gt;)

The length of an interval in seconds. **Defaults to 1.0s.**
