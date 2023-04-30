---
title: mom_map_download_queue
categories:
  - var
cvar_ref: mom_map_download_queue_parallel
default_value: 1
maximum_value: 1
minimum_value: 0
tags:
  - map
  - download
  - online
---

# mom_map_download_queue

If enabled, maps will be queued to download, allowing parallel downloads. The number of parallel downloads is set using [`{{ page.cvar_ref }}`](/var/{{ page.cvar_ref }}).
