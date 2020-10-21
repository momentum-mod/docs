---
title: mom_hud_menu_show
category: command
tags:
  - hud
  - hud menu
  - saveloc
  - ruler
required_params: 
  - Menu name (file name)
ccom_ref: mom_hud_menu_reload
guide_ref: custom-hud-menus
---

Opens a hud menu. Accepts the hud menu itself.

Calling this again with the same hud menu name will close the menu. Calling it with a different hud menu name will open that one after closing the currently opened one, if there is any.

Has parameter completion that corresponds to the filenames in `cfg/menus`, skipping those that end with `_default`.
To parse the filenames again, see [`{{ page.ccom_ref }}`](/command/{{ page.ccom_ref }}).

## Usage Examples

>`mom_hud_menu_show savelocmenu`

Parses the `cfg/menu/savelocmenu.vdf` file and shows the hud menu if it isn't already open. If it is open already, hides it.

>`mom_hud_menu_show rulermenu`

Parses the `cfg/menu/rulermenu.vdf` file and shows the hud menu if it isn't already open. If it is open already, hides it.

---
**Note:** To create your own hud menu see [this guide](/guide/{{ page.guide_ref }}).
