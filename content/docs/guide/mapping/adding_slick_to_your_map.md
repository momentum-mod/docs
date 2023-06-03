---
title: Adding Slick to Your Map
categories:
  - guide
tags:
  - defrag
  - slick
---

Slick is a defrag mechanic that gives frictionless ground movement. Slick is distinct from the slide mechanic that [`func_slide`](/entity/func_slide/) provides. There are three ways to add slick to a map: the [`func_slick`](/entity/func_slick/) brush entity, the `%compileSlick` material paramater, and the `SetSlick` player input.

# `func_slick`

The [`func_slick`](/entity/func_slick/) entity is a brush entity that will give the slick effect to the player when they stand on it. This entity has no special properties.

{:.notice--info}
This entity is always forced to use BSP collision, overriding any mapper-set value.

# `%compileSlick` Material Property

Any material with the `%compileSlick` parameter set to 1 will act as a slick surface when compiled onto world geometry or `func_detail`.

{:.notice--info}
A slick material is only guaranteed to work on world geometry or `func_detail`, it is not known to work on other brush entities, displacements, or props.

Here is an example VMT for a slick material:

```
"LightmappedGeneric"
{
    $basetexture test_materials\slick_ice
    %compileSlick 1
}
```

# `SetSlick` Player Input

The `SetSlick` input on the player entity takes a number of seconds to give the player slick. If the number is 0, slick is removed, and if the number is negative, the player has indefinite slick. To make a slick version of a normal map, you can add a `logic_auto` entity that will give the player indefinite slick on spawn.

