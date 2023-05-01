---
categories:
  - shader
tags:
  - modulate
  - shader
---

# Modulate Shader

{{< hint warning >}}
The `$hdrscale` parameter is only present in the `DX11` version of the shader

{{< /hint >}}
This shader adds an `$hdrscale` parameter that functions as a multiplier for the final result, so an `$hdrscale` of `2` is equivalent to having `$mod2x`.

Examples:

`$hdrscale 1`
![hdrscale_1](/images/modulate_shader_guide/hdrscale_1.jpg)

`$hdrscale 2`
![hdrscale_2](/images/modulate_shader_guide/hdrscale_2.jpg)

`$hdrscale 10`
![hdrscale_10](/images/modulate_shader_guide/hdrscale_10.jpg)
