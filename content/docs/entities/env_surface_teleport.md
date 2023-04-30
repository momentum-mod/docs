---
title: env_surface_teleport
categories:
  - entity
tags:
  - env
  - teleport
---

# env_surface_teleport

An entity that teleports the player when they stand on a specified material surface.

## Keyvalues

> **Remote Destination** (target&lt;**target_destination**&gt;)

The entity specifying the point to which the player should be teleported.

> **Game Material to Watch** (gamematerial&lt;**choices**&gt;)

When the player stands on this material, they will be teleported.

- **0**: None
- **67**: Concrete
- **77**: Metal
- **68**: Dirt
- **86**: Vent
- **71**: Grate
- **84**: Tile
- **83**: Slosh
- **87**: Wood
- **80**: Computer
- **89**: Glass
- **70**: Flesh
- **73**: Clip
- **79**: Foliage
- **78**: Sand

Default is "None"; 0.

## Outputs

> OnSurfaceChangedToTarget(**void**)

Fired when the player moves onto the specified game material.

> OnSurfaceChangedFromTarget(**void**)

Fired when the player moves off the specified game material.

## Inputs

> Enable(**void**)

Start watching the player's surface.

> Disable(**void**)

Stop watching the player's surface.
