---
title: mat_error_texture_advanced
categories:
  - var
default_value: 0
maximum_value: 2
minimum_value: 0
tags:
  - error
  - texture
  - material
---

# mat_error_texture_advanced

Whether to try and replace error textures with more meaningful ones for gameplay (see also {{< cvarref mat_error_texture_advanced_basetexture >}}).

{{< img src="/images/mat_error_texture_advanced/advanced_error_texture_0.jpg" style="width:50%;" >}}

`0: Off, default error texture`

{{< img src="/images/mat_error_texture_advanced/advanced_error_texture_1.jpg" style="width:50%;" >}}

`1: Base color based on VRAD reflectivity data applied to texture specified in mat_error_texture_advanced_basetexture`

{{< img src="/images/mat_error_texture_advanced/advanced_error_texture_2.jpg" style="width:50%;" >}}

`2: Same as 1 but also replace water, grates and glass with meaningful textures`
