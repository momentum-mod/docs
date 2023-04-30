---
categories:
  - guide
ccom_reload: chaos_hud_menu_reload
ccom_show: chaos_hud_menu_show
permalink: /guide/custom-hud-menus/
tags:
  - hud
  - hud menu
---

# Custom HUD Menus

![Hud Menu](/images/custom-hud-menus_guide/custom-hud-menus-header.png)

This guide covers how to make a custom hud menu, such as the saveloc or ruler menus.

## Hud menus overview

Hud menus are a nice way to add many commands/cvars into a single menu.
There are a few hud menus that ship with the game:

- Saveloc menu
- Ruler menu
- Map commands menu (more aimed towards mappers)

You can create however many custom menus as you'd like, but only one can be displayed at a time.

To open a hud menu, use [`{{ page.ccom_show }}`](/command/{{ page.ccom_show }}).
The parameter for this command will autofill with all the available hud menus.

## File reading/writing

Hud menus utilize Valve developed data format known as KeyValues3 (KV3). They are stored in and read from `cfg/menus/` as `.kv3` files
Files with the suffix `_default` are not read from unless their counterpart does not exist.
In which case, it will be copied and have the suffix removed for reading.

## Custom hud menus how-to

A simple hud menu with just one command looks like:

```
<!-- kv3 encoding:text:version{e21c7f3c-8a33-41c5-9977-a76d3a32aa0d} format:generic:version{7412167c-06e9-4698-aff2-e63eb59037e7} -->
{
  main_commands =
  [
    {
      "label"   "Some command"
      "command" "mom_some_command"
    }
  ]
}
```

`"label"` is the text that shows for the button on the menu, and `"command"` is the console command that's inputted into console.

Adding more commands is then as simple as:

```
<!-- kv3 encoding:text:version{e21c7f3c-8a33-41c5-9977-a76d3a32aa0d} format:generic:version{7412167c-06e9-4698-aff2-e63eb59037e7} -->
{
  main_commands =
  [
    {
      "label"   "Some command"
      "command" "mom_some_command"
    },
    {
      "label"   "Some other command"
      "command" "mom_some_other_command"
    },
    {
      "label"   "Some other command"
      "command" "mom_some_other_command"
    },
    ...
  ]
}
```

As in this example, labels and commands can be duplicated.

There is the ability to execute a command on close as well, via the `"close_command"` keyvalue:

```
<!-- kv3 encoding:text:version{e21c7f3c-8a33-41c5-9977-a76d3a32aa0d} format:generic:version{7412167c-06e9-4698-aff2-e63eb59037e7} -->
{
  "close_command" "mom_some_command"
  main_commands =
  [
    {
      "label"   "Some command"
      "command" "mom_some_command"
    },
    ...
  ]
}
```
