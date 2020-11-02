---
title: Custom HUD Menus

permalink: /guide/custom-hud-menus/

category: guide
tags:
  - hud
  - hud menu

toc: true
toc_sticky: true
ccom_show: mom_hud_menu_show
ccom_reload: mom_hud_menu_reload
---

![Hud Menu](/assets/images/custom-hud-menus_guide/custom-hud-menus-header.png)

This guide covers how to make a custom hud menu, such as the saveloc or ruler menus.

## Hud menus overview
Hud menus are a nice way to add many commands/cvars into a single menu.
There are a few hud menus that ship with the game:
- Saveloc menu
- Ruler menu
- Map commands menu (more aimed towards mappers)

You can create however many custom menus as you'd like, but only one can be displayed at a time.
They are also limited to a maximum of 9 commands, not including an optional close command.

To open a hud menu, use [`{{ page.ccom_show }}`](/command/{{ page.ccom_show }}).
The parameter for this command will autofill with all the available hud menus.

## File reading/writing
Hud menus are stored in and read from `cfg/menus/` as `.vdf` files.
Files with the suffix `_default` are not read from unless their counterpart does not exist. 
In which case, it will copied and have the suffix removed for reading.

## Custom hud menus how-to
A simple hud menu with just one command looks like:
```
"Custom Menu"
{
  "1"
  {
    "label"   "Some command"
    "command" "mom_some_command"
  }
}
```
`"1"` refers to the number in the menu the command is at, `"label"` is the text that shows for the button on the menu, and `"command"` is the console command that's inputted into console.

Adding more commands is then as simple as:
```
"Custom Menu"
{
  "1"
  {
    "label"   "Some command"
    "command" "mom_some_command"
  }
  "2"
  {
    "label"   "Some other command"
    "command" "mom_some_other_command"
  }
  "3"
  {
    "label"   "Some command"
    "command" "mom_some_other_command"
  }
  ...
}
```
As in this example, labels and commands can be duplicated.
Hud menus allow a maximum of 9 commands, accessed through numbers 1-9.

There is the ability to execute a command on close as well, via the `"close_command"` keyvalue:
```
"Custom Menu"
{
  "close_command" "mom_some_command"
  "1"
  {
    "label"   "Some command"
    "command" "mom_some_command"
  }
  ...
}
```
