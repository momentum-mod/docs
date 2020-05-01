---
title: mom_mapcfg_add
category: command
tags:
  - mapcfg
  - map
---

Adds a command or convar to be executed on start of the map currently being played.

## Usage Example

> `mom_mapcfg_add mom_mapcfg_print`

If this is done while in a map, `mom_mapcfg_print` will execute whenever that map is loaded. 

### Note:
Recursion is blocked. That is, `mom_mapcfg_add mom_mapcfg_add` will do nothing.