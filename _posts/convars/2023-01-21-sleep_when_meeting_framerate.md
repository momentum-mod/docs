---
title: sleep_when_meeting_framerate
category: var

minimum_value: 0
maximum_value: 1
default_value: 1
---

Disabling this option causes the main game thread to not call sleep() when meeting the value set by fps_max, instead opting to keep the thread active while waiting for the next frame to start. This results in higher cpu usage by the game, but a more consistent fps when at cap and improved game feel.