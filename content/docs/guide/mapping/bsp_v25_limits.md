---
title: BSP Version 25 Limits
categories:
  - guide
tags:
  - limit
  - limits
---

Momentum Mod supports [BSPs v25](https://wiki.stratasource.org/modding/overview/bsp-v25).  
These **BSPs** have significantly increased limits compared to previous versions.  

| Lump/Data Limit             | Old (BSP v21) | New (BSP v25) | Magnitude Increment   |
|-----------------------------|---------------|----------------|----------------------|
| Grid size (units in axis)   | 32,768        | 131,072        | 4x  |
| models                      | 1,024         | 65,536         | 64x |
| brushes                     | 8,192         | 131,072        | 16x |
| brushsides                  | 81,920        | 655,360        | 8x  |
| planes                      | 65,536        | 1,048,576      | 16x |
| vertexes                    | 65,536        | 1,048,576      | 16x |
| nodes                       | 65,536        | 1,048,576      | 16x |
| texinfos                    | 12,288        | 0 (unlimited)  | ∞   |
| texdata                     | 4,096         | 16,384         | 4x  |
| faces                       | 65,536        | 1,048,576      | 16x |
| HDR faces                   | 65,536        | 1,048,576      | 16x |
| origfaces                   | 65,536        | 1,048,576      | 16x |
| leaves                      | 65,536        | 1,048,576      | 16x |
| leaffaces                   | 65,536        | 1,048,576      | 16x |
| leafbrushes                 | 65,536        | 1,048,576      | 16x |
| areas                       | 1,024         | 65,536         | 64x |
| surfedges                   | 512,000       | 2,097,152      | ~4x |
| edges                       | 256,000       | 1,048,576      | ~4x |
| LDR worldlights             | 8,192         | 0 (unlimited)  | ∞   |
| HDR worldlights             | 8,192         | 0 (unlimited)  | ∞   |
| leafwaterdata               | 32,768        | 32,768         | 1x  |
| waterstrips                 | 32,768        | 1,048,576      | 32x |
| waterverts                  | 65,536        | 1,048,576      | 16x |
| waterindices                | 65,536        | 1,048,576      | 16x |
| cubemapsamples              | 1,024         | 16,384         | 16x |
| overlays                    | 1,024         | 16,384         | 16x |
| displacements               | 32,768        | 262,144        | 8x  |
| edicts                      | 2,048         | 8,192          | 4x  |
