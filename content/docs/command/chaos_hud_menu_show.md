---
title: chaos_hud_menu_show
categories:
  - command
required_params:
  - Menu name (file name)
tags:
  - hud
  - hud menu
  - saveloc
  - ruler
---

Opens a hud menu. Accepts the hud menu itself.

Calling this again with the same hud menu name will close the menu. Calling it with a different hud menu name will open that one after closing the currently opened one, if there is any.

Has parameter completion that corresponds to the filenames in `cfg/menus`, skipping those that end with `_default`.
To parse the filenames again, see {{< cmdref chaos_hud_menu_reload >}}.

## Usage Examples

> `chaos_hud_menu_show savelocmenu`

Parses the `cfg/menu/savelocmenu.kv3` file and shows the hud menu if it isn't already open. If it is open already, hides it.

> `chaos_hud_menu_show rulermenu`

Parses the `cfg/menu/rulermenu.kv3` file and shows the hud menu if it isn't already open. If it is open already, hides it.

To create your own hud menus, see {{< guideref customhudmenus >}}.
