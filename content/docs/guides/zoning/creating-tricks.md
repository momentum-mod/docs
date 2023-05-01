---
title: Creating Tricks
categories:
  - guide
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

- Know the basics of using the zoning tools (see the [guide on basic zoning](guides/basic-zoning))
- Be on Momentum 0.8.6+
- Be running Momentum in mapping mode via the `-mapping` launch parameter
- Have the developer console enabled and be able to use it

## Creating Zones

Use the zoning menu accessed via {{< cmdref mom_zone_showmenu >}} to create trick zones all around the map.
Use the tricks zone type:

![Tricks zone type](/images/creating-tricks_guide/tricks-zone.jpg)

These zones will be used later to record (create) tricks.

Upon saving the zones, a file is created inside the `momentum/zones/` folder with the map's name (`<mapname>.tricks`).

## Recording Tricks

Once the zones are created, you are ready to record tricks involving them using {{< cmdref mom_tricks_record >}}.
Tricks themselves are simply paths of zones to hit.

After you've done your trick and are in your last trick zone, you can use {{< cmdref mom_tricks_record_stop >}} to record the trick.
The name of the trick is passed into this command as a parameter.
For example, `mom_tricks_record_stop "My cool trick :)"`.

You can edit this trick via the tricks file (`<mapname>.tricks`).
Tricks by default have a start speed constraint, but you can just remove that from the keyvalues if you don't want it.

## Creating Map Teleports

You can make map teleports by using {{< cmdref mom_tricks_map_tele_create >}} and use the UI to teleport to them.
Alternatively, bind a key to {{< cmdref mom_tricks_tele_to_trick >}}, where `num` is the number of the map teleport in the UI.

## Tracking Tricks

Tricks can be tracked (selected) through the UI or the command {{< cmdref mom_tricks_tele_to_trick >}}.
To teleport to the start of tricks, use {{< cmdref mom_tricks_tele_to_trick >}}).
In both cases, `id` refers to the ID of the trick, which corresponds to the listed order of them in the UI.

## The UI

![Creating Tricks Guide](/images/creating-tricks_guide/tricks-UI.jpg)

The trick UI replaces the scoreboard for tricksurf, accessed via TAB by default.

Currently the UI is only used to teleport to map zones and track tricks.
In the future, recording tricks, creating map teleports, and sharing tricks are planned to be done through the UI.

## Sharing

For now, sharing tricks will have to be done by directly sharing your `<mapname>.tricks` files with others.
