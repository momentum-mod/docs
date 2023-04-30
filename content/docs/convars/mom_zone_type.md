---
title: mom_zone_type
categories:
  - var
concommand_ref1: mom_zone_mark
concommand_ref2: mom_zone_create
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

# mom_zone_type

Changes the type of zone to be created when using [`{{ page.concommand_ref1 }}`](/command/{{ page.concommand_ref1 }}) / [`{{ page.concommand_ref2 }}`](/command/{{ page.concommand_ref2 }}).

- "auto" - Creates a start zone unless one already exists, in which case an end zone is created.
- "start" - Start zone.
- "end" - End zone.
- "stage" - Stage zone.
- "checkpoint" - Checkpoint zone.
