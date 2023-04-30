---
categories:
  - guide
cmd_map_tele_create_ref: mom_tricks_map_tele_create
cmd_map_tele_ref: mom_tricks_map_tele
cmd_record_ref: mom_tricks_record
cmd_record_stop_ref: mom_tricks_record_stop
cmd_tele_ref: mom_tricks_tele_to_trick
cmd_track_ref: mom_tricks_track_trick
cmd_zone_menu_ref: mom_zone_showmenu
guide_ref: basic-zoning
permalink: /guide/creating-tricks/
tags:
  - zones
  - tricksurf
---

# How to Create Tricks

![Creating Tricks Guide](/images/guide_headers/guide_creating_tricks.jpg)

This guide covers how to create tricks for the tricksurf gamemode.

{{< hint danger >}}
Disclaimer:
Creating tricks and tricksurf as a whole is in the initial phase of implementation, meaning that later on in development there will be UI for most of the actions required for creating tricks.
{{< /hint >}}

## Prerequisites

To follow this guide you should:

- Know the basics of using the zoning tools (see the [guide on basic zoning](guide/{{ guide_ref }}))
- Be on Momentum 0.8.6+
- Be running Momentum in mapping mode via the `-mapping` launch parameter
- Have the developer console enabled and be able to use it

## Creating Zones

Use the zoning menu accessed via [`{{ page.cmd_zone_menu_ref }}`](/command/{{ page.cmd_zone_menu_ref }}) to create trick zones all around the map.
Use the tricks zone type:

![Tricks zone type](/images/creating-tricks_guide/tricks-zone.jpg)

These zones will be used later to record (create) tricks.

Upon saving the zones, a file is created inside the `momentum/zones/` folder with the map's name (`<mapname>.tricks`).

## Recording Tricks

Once the zones are created, you are ready to record tricks involving them using [`{{ page.cmd_record_ref }}`](/command/{{ page.cmd_record_ref }}).
Tricks themselves are simply paths of zones to hit.

After you've done your trick and are in your last trick zone, you can use [`{{ page.cmd_record_stop_ref }} <trickname>`](/command/{{ page.cmd_record_stop_ref }}) to record the trick.
The name of the trick is passed into this command as a parameter.
For example, `{{ page.cmd_record_stop_ref }} "My cool trick :)"`.

You can edit this trick via the tricks file (`<mapname>.tricks`).
Tricks by default have a start speed constraint, but you can just remove that from the keyvalues if you don't want it.

## Creating Map Teleports

You can make map teleports by using [`{{ page.cmd_map_tele_create_ref }} <name>`](/command/{{ page.cmd_map_tele_create_ref }}) and use the UI to teleport to them.
Alternatively, bind a key to [`{{ page.cmd_map_tele_ref }} <num>`](/command/{{ page.cmd_map_tele_ref }}), where `num` is the number of the map teleport in the UI.

## Tracking Tricks

Tricks can be tracked (selected) through the UI or the command [`{{ page.cmd_track_ref }} <id>`](/command/{{ page.cmd_track_ref }}).
To teleport to the start of tricks, use [`{{ page.cmd_tele_ref }} <id>`](/command/{{ page.cmd_tele_ref }}).
In both cases, `id` refers to the ID of the trick, which corresponds to the listed order of them in the UI.

## The UI

![Creating Tricks Guide](/images/creating-tricks_guide/tricks-UI.jpg)

The trick UI replaces the scoreboard for tricksurf, accessed via TAB by default.

Currently the UI is only used to teleport to map zones and track tricks.
In the future, recording tricks, creating map teleports, and sharing tricks are planned to be done through the UI.

## Sharing

For now, sharing tricks will have to be done by directly sharing your `<mapname>.tricks` files with others.
