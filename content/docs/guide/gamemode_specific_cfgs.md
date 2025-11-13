---
title: Gamemode Specific CFGs
categories:
  - guide
tags:
  - keybinds
  - config
  - gamemode
---

# Config Files
Config files are a list of commands to execute (one per line).  
A collection of console variables can be found [here](/categories/var).

# Automatic Configs
When a map loads, certain **config files** from `momentum/cfg` folder are executed automatically, in specific order.   

These 2 configs run on **every map load**.

| Config             | When it executes                                    |
|--------------------|-----------------------------------------------------|
| `game.cfg`         | **Pre-load** – runs before map entities are created |
| `game_postent.cfg` | **Post-load** – runs after map entities are created |


After them, a **gamemode specific** config is executed.
  
| Gamemode      | Config Name        |
|---------------|--------------------|
| Ahop          | `ahop.cfg`         |
| Bhop          | `bhop.cfg`         |
| Bhop (HL1)    | `bhophl.cfg`       | 
| Conc          | `conc.cfg`         | 
| Defrag (CPM)  | `df_cpm.cfg`       | 
| Defrag (VQ3)  | `df_vq3.cfg`       | 
| Defrag (VTG)  | `df_vtg.cfg`       | 
| Climb (MomKZ) | `kz.cfg`           | 
| Climb (1.6)   | `kz16.cfg`         |
| Climb (KZT)   | `kzt.cfg`          | 
| Rocket Jump   | `rj.cfg`           | 
| Sticky Jump   | `sj.cfg`           | 
| Surf          | `surf.cfg`         | 


## Example - Surf-Only Turnbinds
Left and Right mouse buttons should be bound to:  
- **In Surf**: `+left` and `+right`
- **In Other Gamemodes**: `+attack` and `+attack2`

In `momentum/cfg` create:
1. `surf.cfg` with following content:
```
bind mouse1 +left
bind mouse2 +right
```
2. `game.cfg` with following content:
```
bind mouse1 +attack
bind mouse2 +attack2
```

# Custom Configs
Custom **.cfg** files can be executed in-game with `exec <config_name>` command.  
They also must be placed in `momentum/cfg` folder.