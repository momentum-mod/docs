---
title: mom_zone_type
categories:
  - var
default_value: auto
requires_mapping: true
tags:
  - zones
  - trigger
  - stage
  - checkpoint
  - stop
  - start
---

Changes the type of zone to be created when using {{< varref mom_zone_mark >}} / {{< varref mom_zone_create >}}.

- "auto" - Creates a start zone unless one already exists, in which case an end zone is created.
- "start" - Start zone.
- "end" - End zone.
- "stage" - Stage zone.
- "checkpoint" - Checkpoint zone.
