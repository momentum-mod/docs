---
title: mom_zone_delete
category: command
tags:
  - zones
  - trigger
required_params: 
  - Entity index/Start/Stop/Stage/Checkpoint
---

Deletes zone types. Accepts start/stop/stage/checkpoint or an entity index.

## Usage Examples

> `mom_zone_delete start`

Deletes the start zone.

> `mom_zone_delete stop`

Deletes the end zone.

> `mom_zone_delete stage`

Deletes all stage zones.

> `mom_zone_delete checkpoint`

Deletes all checkpoint zones.

> `mom_zone_delete 5`

Deletes the entity with index of 5 if it is a zone entity.