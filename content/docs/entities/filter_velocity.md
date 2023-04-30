---
title: filter_velocity
categories:
  - entity
tags:
  - filter
---

# filter_velocity

Filter that checks the player's velocity.

## Keyvalues

> **Mode** (Mode&lt;**choices**&gt;)

Sets the mode to use for velocity comparisons.

- **0**: Total velocity
- **1**: Per-axis

Default is "Total velocity"; 0.

> **Above/Below** (Above&lt;**choices**&gt;)

Sets whether to check if the player goes above or below the given velocity.

- **0**: Below
- **1**: Above

Default is "Above"; 1.

> **Enable Vertical** (EnableVertical&lt;**choices**&gt;)

Check vertical velocity. Only used when "Mode" is "Total velocity".

- **0**: No
- **1**: Yes

Default is "No"; 0.

> **Enable Horizontal** (EnableHorizontal&lt;**choices**&gt;)

Check horizontal velocity. Only used when "Mode" is "Total velocity".

- **0**: No
- **1**: Yes

Default is "No"; 0.

> **Vertical velocity** (VerticalVelocity&lt;**float**&gt;)

The amount of units per second for vertical (Z axis) speed.
Default is 500.

> **Horizontal velocity** (HorizontalVelocity&lt;**float**&gt;)

The amount of units per second for horizontal (XY axis) speed.
Default is 1000.

> **Use Absolute Value** (IgnoreSign&lt;**choices**&gt;)

Whether to check the absolute value of the velocity components.
Only used when "Mode" is "Per-axis".

- **0**: No
- **1**: Yes

Default is "No"; 0.

> **Per-axis Velocity** (VelocityVector&lt;**vector**&gt;)

The velocity vector for when "Mode" is "Per-axis".
Default is `0 0 0`.

> **Per-axis Enable** (VelocityAxes&lt;**vector**&gt;)

Defines which axes to use when checking velocity.
Zero means the corresponding axis is ignored.
Only used when "Mode" is "Per-axis".
Default is all axes off; `0 0 0`.
