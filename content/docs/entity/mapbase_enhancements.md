---
title: mapbase_enhancements
categories:
  - entity
tags:
  - mapbase
  - filter
  - point entity
---

This page covers the various additions and enhancements from [Mapbase](https://www.moddb.com/mods/mapbase).

## Filters

Added the following [Mapbase filters](https://github.com/mapbase-source/source-sdk-2013/wiki/Filters):

- `filter_activator_context`
- `filter_activator_involume`
- `filter_activator_keyfield`
- `filter_activator_model`
- `filter_activator_surfacedata`

## Logic Entities

Added the following logic entities from Mapbase:

- `point_camera_ortho`
- `math_vector`
- `math_mod`
- `math_lightpattern`
- `math_generate`
- `math_counter_advanced`
- `math_clamp`
- `math_bits`
- `logic_sequence`
- `logic_keyfield`
- `logic_format`
- `logic_entity_position`
- `logic_datadesc_accessor`
- `logic_convar`
- `logic_context_accessor`
- `logic_console`
- `game_globalvars`

Descriptions of these can be found on [Mapbase's entity list](https://github.com/mapbase-source/source-sdk-2013/wiki/Entity-List).

## Skyboxes

[New features for `sky_camera`, including multiple `sky_camera`'s](https://github.com/mapbase-source/source-sdk-2013/wiki/Skyboxes).
Also [`skybox_swapper`](https://developer.valvesoftware.com/wiki/Skybox_swapper) for swapping the 2D skybox texture without having to reload the map.

## Other

- [Wildcards and regex for targeting entities](https://github.com/mapbase-source/source-sdk-2013/wiki/Wildcards-and-Matchers)
- [Many more inputs & outputs to BaseEntity](https://github.com/mapbase-source/source-sdk-2013/wiki/Base-Entity)
- [IO system improvements](https://github.com/mapbase-source/source-sdk-2013/wiki/I-O-System-Changes)
- [Changes to VBSP](https://github.com/mapbase-source/source-sdk-2013/wiki/Map-Compilers)
- [Instructor system](https://developer.valvesoftware.com/wiki/Env_instructor_hint)
- [Projected texture improvements](https://github.com/mapbase-source/source-sdk-2013/wiki/Projected-textures)
- `info_particle_system` now has a duration value and can be started on the player directly
