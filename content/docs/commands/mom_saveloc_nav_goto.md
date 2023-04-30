---
title: mom_saveloc_nav_goto
category: command
tags:
  - saveloc
  - goto
required_params: 
  - saveloc number
requires_mapping: false
ccom_ref: mom_saveloc_create
---

Goes to the given saveloc number in the list, teleporting the player to it.

## Usage Examples

[`{{ page.ccom_ref }}`](/command/{{ page.ccom_ref }})

Creates a save, starting at the number 1

`mom_saveloc_nav_goto 1`

Teleports the player to the first save created.