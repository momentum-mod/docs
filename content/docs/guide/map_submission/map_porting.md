---
title: Map Porting
categories:
  - guide
tags:
  - mapping
  - tools
weight: 2
---

# Introduction
This guide gives an overview of all the steps required to officially port a map to Momentum Mod.  
The goal of porting is two-fold:
- Ensuring the map functions correctly
- Conforming to a high standard of competitive integrity

{{<hint info>}}

Maps should not be significantly modified.  
It's very important to respect the spirit and intent of the map's design.

{{</hint>}}

You are free to port any publicly available map with some exceptions:
- Mappers can reserve/block porting of their maps using [this form](https://docs.google.com/forms/d/e/1FAIpQLSeheNDY5A960u6GtXCHtt3s_2vZJL3o5tMJ_ZNbYOpb6cx5nQ/viewform).
- Before porting make sure the map isn't on [this spreadsheet](https://docs.google.com/spreadsheets/d/1KHeWfhGUNpN267CXtPvVdf2h7eQbjPUhWVkE5NimYhg/edit?gid=2051215588#gid=2051215588).
- You are not free to port maps created only for specific servers without explicit permission.
- When in doubt, contact the mapper ( please don't spam them )

{{<expander title="Why aren't ports opt-in?">}}

Due to a sheer amount of maps and how old some of them are, it's not feasible to reach out to every single mapper for their permission.  
This makes it especially important not to modify existing ports too drastically - respect the original mapper's intentions!  
  
If mappers are active (usually on Steam/Discord) we encourage you to reach out to them.  
  
If a map gets ported that the original mapper is unhappy with, we'll try find a resolution that doesn't require resetting leaderboards, but ultimately if they want it removed that's up to them. (If this is the case for your map, please reach out on our [Discord](https://discord.gg/momentummod))

{{</expander>}}

# Setup
If you have any questions feel free to ask for help in **#map-porting** channel on our [Discord](https://discord.gg/momentummod)!

{{<hint info>}}

Porting for gldsrc gamemodes (Conc, HL1Bhop, 1.6KZ) as well as Defrag is way more complicated and requires a different approach.  
Please follow the [gldsrc porting guide](/guide/mapping/porting_goldsrc_to_source/) and the [Quake 3 porting guide](/guide/mapping/porting_quake3_to_source/). 

{{</hint>}}

### Tools
[Lumper](#lumper) - General porting toolkit. Only use for steps in the guide unless you know what you're doing.  
Entity Tools - In-game tools automating a lot of porting steps. Usage will be covered later in the guide. These are always preferred over Lumper.

### Preparing the game for porting
1. [Download](https://github.com/momentum-mod/lumper) Lumper
2. Download the map you want to port (maps in **.bz2** format can be extracted using [7zip](https://www.7-zip.org/)): 
    - [fastdl.me](https://main.fastdl.me/69.html) - Contains a huge collection of Surf, Bhop, and KZ maps
    - [gamebana.com](https://gamebanana.com/) - General modding forum. Often contains information required for submission such as credits, description, and release date
    - [ksf.surf](https://ksf.surf/) (preferred for Surf) - Main hub for competitive surf
    - [jump.tf](https://jump.tf/forum/) (preferred for RJ/SJ) - Main RJ/SJ forum
    - [femboy.kz](https://files.femboy.kz/fastdl/csgo/maps/) - CS:GO KZ maps  
3. Rename the map
    - Some map names include version info like _a13, _b2, _njv etc. Rename the **.bsp** file to remove it
    - RJ/SJ maps use **jump_** prefix. This should be changed to **rj_** or **sj_** depending on for which gamemode the map was originally made 
4. Put the map (**.bsp**) in **/momentum/maps** folder
    - You can access it by **right clicking** Momentum Mod in your steam library and selecting **Manage → Browse local files**
5. Open the map using [Lumper](https://github.com/momentum-mod/lumper)
6. Open the map in Momentum Mod by opening the console (**~** by default, key below ESC) and typing `map <map name>`
7. Open the console again and enable cheats (`sv_cheats 1`) as well as Lumper synchronization (`mom_lumper_sync 1`)
8. Click the **Connect to Game Sync** button in Lumper

![Lumper Example](/images/map_porting/connect_to_game_sync.png)

# Porting 
## Step 1: Remove Valve Assets
Maps may include packed materials, models, and other asset ( similar to a **.zip** file).  
Momentum Mod [cannot legally redistribute](/guide/map_submission/map_submission/#source-assets) Valve's assets.  
Valve's assets may still be used on maps however it is necessary to remove them from the **.bsp**.   

1. Go to the **Jobs** tab in Lumper
2. Add "Remove Game Assets" job
3. Run the job

{{<expander title="Won't removing assets make the map look worse?">}}

Momentum Mod automatically mounts assets from CS:S, CS:GO, and Portal 2 so players with those games installed will still be able to see them even after removal.  
Use the **Texture Browser** in Lumper to see which game each texture comes from.  
For other assets check the **Required Games** tab.  

{{</expander>}}

{{<hint warning>}}
A small amount of assets from Source games other than CS:S, CS:GO, and Portal 2 can remain packed.  
That can be done **only** if they are **relatively generic** and **not fundamental** to that game's aesthetic.  
When keeping  Valve assets packed, it is **required** that you list them in the **porting changelog** during [Map Submission](/guide/map_submission/map_submission/)
{{</hint>}}

![Remove Game Assets](/images/map_porting/lumper_remove_assets.png)


## Step 2: Modify Remaining Assets and Fix Cubemaps
### Textures
1. Go to the **Texture Browser** and **Right Click → Remove** any explicit material or obvious copyrighted assets you may find  
2. Consider resizing/reencoding any assets that take a lot of space (marked by yellow/red)  
    - If the texture is at or above 2048x2048 it consider resizing it down a level  
    - If the texture uses an uncompressed format consider reencoding it  

{{<expander title="What are the compressed formats and which ones do I use?">}}

Compressed formats are **DXT1**, **DXT5**, and **BC7**.  
When reencoding if a texture has **no alpha** and is **relatively flat** with **little detail** use **DXT1**.  
For **more detailed** textures (e.g. containing text), use **BC7**.  
Do **NOT** resize or reencode any **animated textures** or textures with **multiple faces**.  
Please verify in game that modified textures are not broken and still looks good. 

{{</expander>}}

{{<hint warning>}}

This should be evaluated on a case-by-case basis.  
It's perfectly fine to leave big assets **unchanged**, this step is not strictly enforced.  
If you are not sure whether you should resize/reencode them, it's better to leave then **unmodified**.

{{</hint>}}

![4096_asset](/images/map_porting/4096_asset.png)
![4096_asset](/images/map_porting/4096_asset_details.png)
    
### Sounds
Music in Momentum Mod need to be categorized properly for volume sliders to work.  
1. Go to the **Pakfile Explorer** in Lumper
2. Scroll to the bottom to see if **/sound** folder exists
3. If it does, listen to every sound to identify music files
    - You can use **Open in External Program** button or **Right Click → Export** the entire folder to listen to the sounds
    - Right click on **/sound → Create Directory -> music**, then drag and drop sounds into it. Click **yes** on the pop-up

![Moving Sounds](/images/map_porting/lumper_moving_sounds.png)


### Cubemaps
If you renamed the map during the [setup](#setup), reflections might be broken.  
You can skip this step if you didn't rename the map.  
1. Go to the **Pakfile Explorer** in Lumper
2. Check if the map has **/materials/maps/<old_map_name>** folder
3. If it does **Right Click → Rename** that folder to the new map name. Click **yes** on the pop-up

![Rename Cubemaps](/images/map_porting/rename_cubemaps.png)

## Step 3: Fix Entities
1. Go to the **Entity Review** tab in **Lumper**
2. Remove all **invalid** entities
    - Clicking the edit button on the right will bring you to **Entity Editor**. You can delete entities there by clicking the **trash icon**
3. Fix other entities by following the [Entities Guide](/guide/map_submission/fixing_entities/#setup) and comments in **Lumper**

## Step 4: Compress the Map
Compression will **significantly** reduce the filesize.

1. Check **Save Compressed**
2. Check **Update filename-specific Content**
3. Click **Save**

You should double check that your port has no remaining issues with the **Map Summary** tool.  
You can find it in **Tools -> Map Summary** or by using the **CTRL + H** shortcut.  

![Map Summary](/images/map_porting/lumper_map_summary.png)

## Step 5: Take Screenshots
1. Fly around the map in noclip (**g** by default, `noclip` in console) to find good spots to screenshots
    - You can use maximum of 5 screenshots, 1 for the thumbnail, 4 for the gallery
2. Use `mom_official_screenshot` in console to take screenshots. This command will automatically apply all relevant settings.  
    - Screenshots will be saved to **/momentum/screenshots**
    - You can bind the screenshot command to a key for ease of use in keybind settings or with console by typing `bind <key> mom_official_screenshot`

{{<hint info>}}

`mom_official_screenshot` among other things will set your **brightness** to **1** ( default ).  
Maps should not require changing the brightness to be playable.  
If you're porting your own map, please make sure it's properly lit.

{{</hint>}}
    
{{<hint info>}}

Some mappers provide their own screenshots on [gamebanana](https://gamebanana.com/) (Surf, Bhop, KZ) or [jump.tf](https://jump.tf/forum/) (RJ/SJ).  
While you may not use those screenshots directly, feel free to recreate them using the steps above.

{{</hint>}}

![Save Compressed](/images/map_porting/lumper_compress.png)

## Step 6: Zone the Map
Follow the [Zoning Guide](/guide/map_submission/map_zoning/).  
It will teach you how to add the **Start** and **Endzone**, **Bonuses**, **Stages**, and **Checkpoints**!

## Step 7: Submit the Map
You have successfully ported the map!  
All that's left to do is **Submit the Files** and all relevant information.  
Follow the [Map Submission Guide](/guide/map_submission/map_submission/)!














