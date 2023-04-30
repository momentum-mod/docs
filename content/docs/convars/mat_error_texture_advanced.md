---
title: mat_error_texture_advanced
categories:
  - var
cvar_ref: mat_error_texture_advanced_basetexture
default_value: 0
maximum_value: 2
minimum_value: 0
tags:
  - error
  - texture
  - material
---

# mat_error_texture_advanced

Whether to try and replace error textures with more meaningful ones for gameplay (see also [`{{ page.cvar_ref }}`](/var/{{ page.cvar_ref }})).

![mat_error_texture_advanced 0](/images/mat_error_texture_advanced/advanced_error_texture_0.jpg){:style="width:40%;border-radius:5px;"}  
`0: Off, default error texture`

![mat_error_texture_advanced 1](/images/mat_error_texture_advanced/advanced_error_texture_1.jpg){:style="width:40%;border-radius:5px;"}  
`1: Base color based on VRAD reflectivity data applied to texture specified in mat_error_texture_advanced_basetexture`

![mat_error_texture_advanced 2](/images/mat_error_texture_advanced/advanced_error_texture_2.jpg){:style="width:40%;border-radius:5px;"}  
`2: Same as 1 but also replace water, grates and glass with meaningful textures`
