---
title: mom_zone_type
category: var
tags:
  - zones
  - trigger
  - stage
  - checkpoint
  - stop
  - start
concommand_ref1: mom_zone_mark
concommand_ref2: mom_zone_create
---

Changes the type of zone to be created when using [`{{ page.concommand_ref1 }}`](/command/{{ page.concommand_ref1 }}) / [`{{ page.concommand_ref2 }}`](/command/{{ page.concommand_ref2 }}).

- "auto" - Creates a start zone unless one already exists, in which case an end zone is created.
- "start" - Start zone.
- "end" - End zone.
- "stage" - Stage zone.
- "checkpoint" - Checkpoint zone.