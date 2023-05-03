---
title: Overriding Custom Assets
categories:
  - guide
ccom_wepreloadcur: weapon_reload_script_current
tags:
  - hud
  - weapon
---

When the game boots, it scans the `momentum/custom/` folder for VPK files and subfolders.
For steam users, this will be

> `Steam/steamapps/common/Momentum Mod/momentum/custom/`

under the steam install path.

Each VPK and subfolder is added as a "search custom", meaning that the files inside them will override the default game's files.
Using this is recommended over modifying the game's files, as the `custom` folder will persist when installing an update or using Steam's "verify integrity of game files" feature.

## File Structure Examples

Here are some examples of correct file structure:

- `momentum/custom/some_mod.vpk`
- `momentum/custom/another_mod.vpk`
- `momentum/custom/my_custom_stuff/`
- `momentum/custom/my_custom_stuff/models/custom_model.mdl`
- `momentum/custom/my_custom_stuff/materials/custom_material.vmt`
- `momentum/custom/my_custom_stuff/materials/vgui/custom_ui_thing.res`

In these examples, `some_mod.vpk`, `another_mod.vpk`, and `my_custom_stuff` will be added as search customs.

Some examples of incorrect file structures are:

- `momentum/custom/models/custom_model.mdl`
- `momentum/custom/materials/custom_material.vmt`

In these examples, `models` and `materials` are search customs, meaning that `custom_model.mdl` and `custom_material.vmt` exist at the root of the game's virtual filesystem instead of in their appropriate folders.

## Example - Overriding Weapon Script

![Weapon Model Comparison](/images/override-custom-assets_guide/weapon_compare.jpg)

Inside `momentum/custom/overrides/scripts/` there are some weapon script overrides available.
For these overrides to take effect they need to be renamed to match the file they are overriding in `momentum/scripts/`.

For example, renaming `weapon_momentum_stickylauncher_tf2.txt` to `weapon_momentum_stickylauncher.txt` within `momentum/overrides/scripts/` overrides the sticky launcher script in `momentum/scripts/`. This replaces the momentum default sticky launcher to be the one from TF2.

Weapon scripts can be reloaded from within the game by using the console commands {{< cmdref weapon_reload_scripts >}} and/or {{< cmdref weapon_reload_script_current >}}.

## Performance

Mounting a subfolder is less efficient than a VPK, since the engine has to make a call to the operating system to search the folder each time it needs to open a file.
For optimal load times use VPKs, since they can be searched by the engine much more efficiently.
