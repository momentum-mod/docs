---
title: mom_gamemode_fallback
categories:
  - var
default_value: 0
maximum_value: 13
minimum_value: 0
tags:
  - gamemode
---

Sets the gamemode used as a fallback when an appropriate gamemode cannot be determined automatically. 
{{< mom_gamemode_override >}} takes precedence over this.

{{< hint info >}}
If you wish to use this cvar with official maps, you should instead use the "Start Map In Specific Gamemode" option in the Map Selector's context menu.
{{< /hint >}}

## Gamemodes
- **0** = OFF/NONE
- **1** = Surf
- **2** = Bhop (CSS)
- **3** = Bhop (Hl1)
- **4** = Climb (Momentum)
- **5** = Climb KZT
- **6** = Climb 1.6
- **7** = Rocket Jump
- **8** = Sticky Jump
- **9** = Ahop
- **10** = Conc
- **11** = Defrag (CPM)
- **12** = Defrag (VQ3)
- **13** = Defrag (Vintage)
