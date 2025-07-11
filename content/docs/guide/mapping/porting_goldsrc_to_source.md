---
title: Porting Goldsrc maps to Source
categories:
  - guide
tags:
  - bhop
  - climb
  - conc
  - mapping
  - porting
---

## Before you start

Porting maps from Goldsrc to Source is not easy. Depending on the complexity of the map, be prepared to invest anywhere from 3 to 50+ hours into a single port. Prior experience with Valve's Hammer Editor is helpful, however porting maps is entirely doable without ever having used Hammer before.

## Necessary software
### Hammer++
Download: https://ficool2.github.io/HammerPlusPlus-Website/ <br>
While technically any version of Source Hammer can be used, Hammer++ is recommended as it offers tools to speed up the porting process (e.g. brush merging, names of entities in the entity report).
### J.A.C.K.
Download: http://jack.hlfx.ru/en/features.html <br>
J.A.C.K. is an alternative to GoldSrc Hammer with new features and abilities. You likely will not need these, but J.A.C.K. is still preferred over default GoldSrc Hammer as J.A.C.K. is able to open .map files that default GoldSrc Hammer cannot.
### VTFedit
Download: https://github.com/NeilJed/VTFLib <br>
VTFedit is a texture editing program that is generally useful for Source mapping. This is primary tool for converting GoldSrc textures into a format compatible with Source.

{{< hint info >}}Make sure you are using version 1.3.3 or older of VTFedit! While no longer maintained by its original author, newer forks of VTFedit have removed to ability the convert .wad files.{{< /hint >}}
## Optional software
### SLADE
Download: https://slade.mancubus.net/index.php?page=downloads <br>
SLADE is a software primarily used for DOOM modding, but it is useful for porting as it lets you remove individual textures from a .wad file. This is important as occasionally when attempting to convert a .wad file the conversion will stall on a certain texture. If this happens SLADE allows you to remove the problematic texture.
### GoldSrc2Source - Map Fixer
Download: https://www.moddb.com/games/half-life-source/downloads/goldsrc2source-map-fixer
A mapping tool that you can use to automatically fix certain issues that arise in the porting process. It is capable of adjusting textures, updating Spawnflags, and replacing old GoldSrc mapping logic with Source's new I/O connections logic. Read the download page for more information.
### Half-Life Texture Tools
Download: https://github.com/yuraj11/HL-Texture-Tools/releases <br>
This software allows you to preview the textures contained in a .wad file. If you do not use HUSK MD this software is capable of extracting .wad files packed into a .bsp file.
### BSPTexRM
Download: https://github.com/Litude/BSPTexRM/releases/tag/v1.0 <br>
This tool removes the bitmap entries from the textures lump of a map. The texture entries themselves are preserved. It is very unlikely you will need this tool. In rare circumstances however running a .bsp through this tool can be the difference in whether or not it will decompile.

# Starting the port
## Download the .bsp and (in some cases) the .wad

If you do not already have a map in mind, here are some websites with thousands of GoldSrc skill maps to look through:
- [TFC Refugees Forum](https://www.tfcrefugees.com/downloads/categories/skill.3/)
- [Source Runs](https://hlkz.sourceruns.org/maps)
- [TFC Maps Archive](https://tfcmaps.net/)

Maps downloaded from the above sites come as a .zip file with several different files inside. The .bsp file is the map itself. Usually custom textures will be packed into the .bsp, but sometimes they will be included in the .zip file separately as a .wad. These are the two files you need to start porting, but save any other files inside the .zip archive. <br>
The other files in the .zip are custom sounds, skybox, models, etc. and will be used later in the porting process. Additionally there is often a .txt file by the map's author providing a description of the map.

## Obtaining the .map file

You will need the .map or .rmf file for the map you wish to port to Source. It is much easier if the map's author can give you the original .map or .rmf file. Assuming you cannot acquire the original file proceed to the next step.

### What decompiler to use?

There are five decompilers available for GoldSrc maps. They are listed from best to worst as follows:

- [Half Life Unified SDK Map Decompiler (HUSK MD)](https://github.com/SamVanheer/halflife-unified-sdk)
- [Modified BSP Converter (MBSPC)](https://gamebanana.com/tools/6565)
- [Windows BSP Converter (WinBSPC)](https://gamebanana.com/tools/5030)
- [BSP Viewer (BSPV)](https://nemstools.github.io/subpages/Comments/BSP_Viewer.html#p83)
- [BSP2MAP](https://gamebanana.com/tools/4782)

Goldsrc does not store original brush geometry in its .bsp files like Source does, and as a result decompiles will be messy. The geometry will be generated with an excessive amount of brushes in a way that no human would ever make.

The two methods of decompilation can be described as "Tree-Based" and "Face-To-Brush". Tree-Based decompiles or the "cube" generate map files that appear as if the map geometry is carved out of the center of a cube. While not easy to work with when trying to modify a decompiled map, this method is the better of the two. This is primarily due to how this method prevents leaks.

Face-To-Brush decompilation converts every single brush face into its own separate 1 unit thick brush. This method is the worse of the two due to the following reasons:
- Texture z-fighting on every convex corner
- Dozens of leaks
- Generated map files typically exceed the Hammer brush limit<br>

In almost every case a Tree-Based decompile is better to work with.

More information on this is available on the release page of HUSK MD.

### Half Life Unified SDK Map Decompiler (HUSK MD)

Download: https://github.com/SamVanheer/HalfLife.UnifiedSdk.MapDecompiler

{{< hint info >}}This is by far the best decompiler to use.
It cannot be reiterated enough that any attempts at porting GoldSrc content should start with this decompiler. The majority of other information available on GoldSrc map porting is outdated. Old guides will typically point to WinBSPC or BSP2MAP, but these tools are functionally obsolete. {{< /hint >}}

This decompiler has the following advantages over the other options:

- Offers both Tree-Based and Face-To-Brush decompiles
- In active development
- Modern GUI
- Rarely if ever crashes when attempting to decompile
- Customizable decompile options
- Can automatically extract embedded textures

### Modified BSP Converter (MBSPC)

Download: https://gamebanana.com/tools/6565  
While lacking some of the features of HUSK MD, MBSPC is still serviceable. Decompiles with this tool give similar results to those of HUSK MD.
The pros and cons of this decompiler are as follows:

- Exclusively Tree-Based decompiles
- Last updated in 2012
- No GUI, command line only
- Rarely if ever crashes when attempting to decompile
- Customizable decompile options
- Does not automatically extract embedded textures

### Windows BSP Convert (WinBSPC)

Download: https://gamebanana.com/tools/download/5030  
The original Tree-Based decompiler for GoldSrc. Functionally obsolete with the existence of MBSPC and HUSK MD.
The pros and cons of this decompiler are as follows:

- Exclusively Tree-Based decompiles
- Has not been updated since the early 2000s
- Has a GUI
- Prone to crashing and failing to decompile all types of maps
- Customizable decompile options
- Does not automatically extract embedded textures

### BSP Viewer (BSPV)

Download: https://nemstools.github.io/pages/BSP_Viewer-Download.html  
The precursor to Crafty, both these programs are stand alone tools that are capable of loading and viewing BSPs without having any game open. BSPV is capable of Face-To-Brush decompiles, but this feature was removed in Crafty.  
The pros and cons of this decompiler are as follows:

- Exclusively Face-To-Brush decompiles
- Has not been updated since the early 2000s
- Has a GUI
- Rarely if ever crashes when attempting to decompile
- Decompiles are almost always thousands of brushes over Hammer's limit
- Prone to generating [spaghetti](static/images/goldsrc_to_source_guide/hammer_spaghetti.png)
- Limited decompile customization options
- Does not automatically extract embedded textures

### BSP2MAP

Download: https://www.moddb.com/games/half-life/downloads/bsp2map1  
The original GoldSrc decompiler. This tool really should never be used at this point as BSPV and HUSK MD provide better results for Face-To-Brush decompilation.  
The pros and cons of this decompiler are as follows:

- Exclusively Face-To-Brush decompiles
- Has not been updated since the early 2000s
- Command line only, no GUI
- Does not typically crash when decompiling
- Prone to generating [spaghetti](static/images/goldsrc_to_source_guide/hammer_spaghetti.png)
- Limited decompile customization options
- Can extract embedded textures

### Decompiling with HUSK MD
{{< hint info >}}This guide will only cover decompiling with HUSK MD. If you are intentionally using any of the other decompilers you must have a good reason and thus know what you are doing. {{< /hint >}}
After downloading the program, open MapDecompilerGUI.exe in the HalfLife.UnifiedSdk.MapDecompiler folder. You can configure the options to your liking if you know what you are doing, otherwise the settings in the image below are recommended. <br>
IMAGE HERE IMAGE HERE IMAGE HERE <br>
With the settings configured go to the File menu in the top left and select Convert. Pick the map you want to decompile and the conversion will begin. When the program finishes, a .map file will be generated along with a .wad file containing any packed custom textures. 

## Converting the textures

Now you will need to collect all the .wad files your map uses textures from. You should have all the custom textures your map uses either from the .wad file generated by HUSK MD or from the downloaded map's .zip file. <br>
Additionally your map likely uses default Valve textures from Half-Life or Team Fortress Classic. The proper way to acquire these textures is to locate halflife.wad, tfc.wad, and tfc2.wad. These .wad files can be found in Steam/SteamApps/Common/Half-Life/valve and Steam/SteamApps/Common/Half-Life/tfc respectively. These 3 .wad files are not comprehensive; you may need textures from one of the other Valve .wad files. <br>
With all of your .wad files collected, they will need to be converted into .vtf and .vmt files to be usable in source. The easiest way to convert these textures is with VTFEdit.

With VTFEdit installed, navigate to Tools -> Convert WAD File. Select a .wad file to be converted and a relevant folder for the output. Make sure "Create VMT Files" is checked as creating them manually is quite tedious. The .vmt files generated will not preserve any of the properties of the original textures in the .wad file. In other words a glass texture will not be transparent without designating it as such manually in its .vmt file.

![vtfedit_convert_wad](static/images/goldsrc_to_source_guide/vtfedit_convert_wad.png)

Now is also a good time to convert your skybox textures. Custom skyboxes will be in the .zip file of the downloaded map. Default skyboxes are in either Steam/SteamApps/Common/Half-Life/valve/gfx/env and Steam/SteamApps/Common/Half-Life/tfc/gfx/env for Half-life and Team Fortress Classic respectively. Find the 6 .tga files that correspond to a skybox and put them all in a folder somewhere. Now in that same menu in VTFedit click "Convert Folder" and fill out the relevant information in the prompt. The resulting .vmt files will need to be edited accordingly to work as a skybox in Source.

Occasionally VTFEdit will stall on certain textures in a WAD preventing the conversion from finishing. If this happens the WAD must be edited to remove the offending texture. This can be done with SLADE.

Open the troublesome .wad file in SLADE. Read the output log of VTFEdit where the last texture named is the problematic one. Select and delete this texture in SLADE and then save the .wad file. Repeat this process if VTFEdit stalls during the conversion again.<br>
Additionally, the conversion of large wad .files in particular are prone to stalling. To remedy this, after the first stall in the conversion process note the last texture converted. Open the .wad file in SLADE. Now delete from the .wad file every texture that has already been converted. Save the .wad file and then continue the conversion. Repeat this process until you have all of the textures converted.

If you do not want to download VTFEdit, this can be done through a program called Xwad. Xwad is a command line application, you can get it by downloading the Source SDK on Steam, (NOT 2007 or 2013) and navigating the bin folder where the developer tools are stored. You will need to create a .bat file and add the parameters -BaseDir (location of the game's folder) -WadFile (location of the .wad file) and -vtex (automatically calls vtex to convert the created .tga files into .vtf files). The .bat file should look something like this:

`xwad -BaseDir [PATH TO GAME FOLDER] -WadFile [PATH TO .WAD] -vtex`

Once all your textures are converted place them in ther materials folder for the game you are working with. Make sure your .vmt files reference the correct file paths too.

## Converting .map to .vmf

Make sure you have J.A.C.K. installed. When first setting up J.A.C.K., you will be prompted to fill out install locations of GoldSrc game(s). You do not need to fill this out. The program can still convert the files without this part of setup.

When setup, open J.A.C.K. and click Tools > Options, or press F2 to bring up the settings. In the Game Profiles tab, make sure that the map type is set to Half-Life / TFC before trying to open the .map file, otherwise the map may fail to load.

![SETTINGS PANEL](/images/goldsrc_to_source_guide/SETTINGS_PANEL.png)

Now click File > Open, and open the .map file you are converting. Once it has loaded, there will likely be invalid solids that stretch to infinity. Delete these now, you'll need to remake them later. Click File > Save As... and save as a "Half-Life VMF".

Before you open this VMF in Hammer++ however, there's one more thing we should do. Download a tool called [GoldSrc2Source](https://www.moddb.com/games/half-life-source/downloads/goldsrc2source-map-fixer). Click Find VMF and navigate the VMF file you just saved in J.A.C.K. Select it and click repair, it's best to have all parameters marked in GoldSrc2Source in the vast majority of cases.

![GOLDSRC2SOURCE PARAMETERS](static/images/goldsrc_to_source_guide/GLDSRC_2_SRC_PARAMETERS.png)

Finally, load Hammer and open the VMF! There will likely be a few missing textures through the map, but these will be tool textures. Find them and replace them to their [Source equivalent](https://developer.valvesoftware.com/wiki/Tool_texture).

## Converting entities

Now you can start converting the entities to their Source equivalents. The trigger_multiple entities that are used for controlling the timer should be converted to the momentum mod zone system;

- [trigger_momentum_timer_start](/entity/trigger_momentum_timer_start/)
- [trigger_momentum_timer_checkpoint](/entity/trigger_momentum_timer_checkpoint/)
- [trigger_momentum_timer_stop](/entity/trigger_momentum_timer_stop/)

Push trigger values probably need to be adjusted, or they should be replaced with a [trigger_catapult](/entity/trigger_catapult/) and an info_target, or by a [trigger_setspeed](/entity/trigger_setspeed/) depending on how the trigger is supposed to function.

## Final polish

Now it's time to put the final polish on the map. Fix up any broken geometry (although there might not be any if the map is simple enough), fix the lighting issues if there are any, and align any textures that may have become misaligned. You also might have to func_detail some of the brushes if there are a lot of small details, in order to cut down compile times.

You can now compile the map!
