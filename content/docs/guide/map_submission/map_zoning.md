---
title: Map Zoning
categories:
  - guide
tags:
  - mapping
  - guidelines
weight: 3
---

# Introduction

Zoning is the process of defining the start, end, checkpoint, and stage areas of tracks on a map. This is required for
all maps that are submitted to Momentum Mod. Zoning can be done in-game or in Hammer, both methods are described in this
guide.

# Zoning Requirements

- If a zone region's location has a map teleport destination entity, we _highly_ prefer that it is used (rather than a
  custom arbitrary region destination coordinate) so the spot corresponds to a map teleport destination.

- Make sure each region teleport destination is inside the region.

- Avoid overlapping or touching regions for the same zone which could just be one region.

- Make sure points are placed precisely and aligned well with geometry.

- Fill stage/bonus teleport hub areas with a cancel zone for safety.

- Checkpoints should be placed where they can be hit consistently for better split comparisons. This means placing them
  in the middle of hallways rather than after a turn where the player can hit the checkpoint sooner or later depending
  on how much they cut the corner.

![Checkpoint Placement Suggestions](/images/map_porting/zoning_checkpoint_placement.png)

# In-Game Zoning

In order to use the in-game zoning tools, `sv_cheats` must be enabled. When cheats are enabled, a button on the tab menu
will be displayed that lets you edit the zones. The `mom_zone_edit 1` command can also be used to display the zone
editor menu:

![Tab Menu](/images/map_porting/editor_tab.png)

Create a start zone by clicking the "+ Start Zone" text in the zone editor. Use left click to set the start corning, end
corner, and height of the zone:

![Start Zone](/images/map_porting/create_zone.gif)

Set a teleport destination by clicking the dropdown in the zone properties editor. You can also specify a custom
location by using the "Specify New" option and then setting the "Position" and "Yaw" properties:

![Property Editor](/images/map_porting/editor_properties.png)

You can add stages/courses by clicking the "+ Segment" text. Segments also have their own properties:

![Segment Editor](/images/map_porting/editor_segment.png)

You can set map-wide properties by clicking on any of the tracks in the list:

![Map Properties](/images/map_porting/editor_track.png)

When you are done zoning your map, you can save your changes by clicking the blue "Save Zones" button. Zones will be
saved into your `maps/zones/local` folder.

For more advanced zoning options, please see our [Advanced In-Game Zoning Guide](). **TODO: Add link**

# Hammer Zoning

If you would rather zone maps in Hammer, follow this guide instead.

## Map Decompilation

**If you are zoning your own vmf, you can skip this step.**

In order to start zoning an existing map in Hammer, you must start by decompiling the BSP file with a tool like
[bspsrc](https://github.com/ata4/bspsrc/releases), or our custom version of
[bspsrc (Strata)](https://github.com/StrataSource/bspsrc/releases) for newer BSP files. Simply add the BSP file to the
list and click "Decompile".

![Decompile BSP](/images/map_porting/bspsrc.png)

## Hammer Zone Entities

Open the vmf file for the map that you want to zone and go to the start area. Place a `zone_timer_start` trigger in the
area where you want the start zone to be and set the "Restart Destination" field to the destination where you want the
player to start.

![Start Zone](/images/map_porting/start_zone.png)

If you are zoning a staged map, use `zone_timer_stage` triggers for the stage start zones (starting at stage 2). For
linear maps, use `zone_timer_checkpoint` to add checkpoints throughout the map. Use `zone_timer_end` for the map end
zone.

### Bonus Tracks

Bonuses can be created by using a `zone_timer_start` trigger and setting the "Track Number" property to the bonus
number. Bonuses cannot have stages, but they can have checkpoints. The `zone_timer_checkpoint` and `zone_timer_end`
triggers also need to have their "Track Number" set to the bonus number.

## Generating Zones with ZoneMaker

After all of your zones are set up, you can generate the zones by running `zonemaker.exe` on the vmf. Strata Hammer will
have this tool included in the compile options:

![ZoneMaker](/images/map_porting/zonemaker.png)

If there is a problem with how your zones are set up, ZoneMaker will fail and display an error in the compile log:

![ZoneMaker Error](/images/map_porting/zonemaker_error.png)

# Advanced Zoning Concepts

### Safe Height

You can prevent players from climbing in start zones by modifying the "Safe Height" property. When the player is
standing on a surface above the safe height, their timer will not prime and they will not be able to start a run. This
is currently only used on surf maps.

![Safe Height](/images/map_porting/safe_height.png)

### Limit Ground Speed

You can allow the player to keep speed while bhopping in stage start zones by disabling the "Limit ground speed"
property. This is useful on maps with intentional stage telehops such as surf_lt_omnific. Keep in mind that players who
bhop through these start zones will not record their individual stage runs because they do not meet the max ground speed
prime condition.

### Allow Bhop Zones

In surf maps, players are only allowed to bhop if they are jumping on a large enough surface. The minimum surface area
can be visualized with the console command `mom_bhop_area_debug 1`. This restriction prevents the player from bhopping
on ramp spines, but in some cases the mapper may want to allow that. Mappers can override this behavior by using
`zone_allowbhop` to allow the player to bhop on a surface that is otherwise too small. Bhop can also be enabled globally
by setting "Force Enable Bhop" to "Yes" in `zone_timer_start`.

![Allow Bhop](/images/map_porting/allowbhop.png)

### Stage End Zones

Typically stages are considered complete when the player enters the start zone of the next stage. In rocket/sticky jump
maps, this does not work well since stages (AKA courses) are often split up by hub areas. Instead of requiring the
player to touch the next stage start zone, the mapper can set the "Stage End Zones" property in `zone_timer_start` to
"Last Checkpoint" to use the last checkpoint in a course as the stage end zone.
