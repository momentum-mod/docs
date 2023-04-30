---
title: Modulate Shader
permalink: /shader/modulate-shader/
category: shader
tags:
  - modulate
  - shader
---

{:.notice--warning}
The `$hdrscale` parameter is only present in the `DX11` version of the shader

This shader adds an `$hdrscale` parameter that functions as a multiplier for the final result, so an `$hdrscale` of `2` is equivalent to having `$mod2x`.

Examples:

`$hdrscale 1`
![hdrscale_1](/assets/images/modulate_shader_guide/hdrscale_1.jpg)

`$hdrscale 2`
![hdrscale_2](/assets/images/modulate_shader_guide/hdrscale_2.jpg)

`$hdrscale 10`
![hdrscale_10](/assets/images/modulate_shader_guide/hdrscale_10.jpg)
