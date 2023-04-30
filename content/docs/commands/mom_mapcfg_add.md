---
title: mom_mapcfg_add
categories:
  - command
required_params:
  - Console command or variable
tags:
  - mapcfg
  - map
---

# mom_mapcfg_add

Adds a command or convar to be executed on start of the map currently being played.

## Usage Example

> `mom_mapcfg_add mom_mapcfg_print`

If this is done while in a map, `mom_mapcfg_print` will execute whenever that map is loaded.

{:.notice--info}
Recursion is blocked. That is, `mom_mapcfg_add mom_mapcfg_add` will do nothing.
