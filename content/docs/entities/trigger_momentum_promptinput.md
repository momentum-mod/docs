---
title: trigger_momentum_promptinput
categories:
  - entity
tags:
  - trigger
  - player
  - map
  - track
---

Trigger that prompts the player to press up to three keys inside it's volume.

## Keyvalues

> **Key that fires** (lookedkey&lt;**choices**&gt;)

- **Forward (0)**
- **Back (1)**
- **Move Left (2)**
- **Move Right (3)**
- **Jump (4)**
- **Duck (5)**
- **Attack (6)**
- **Attack 2 (7)**
- **Reload (8)**
- **Speed (9)**
- **Walk (10)**

The default value is 0.

> **Second key to use that fires, if held down at the same time as other keys** (lookedkey2&lt;**choices**&gt;)

- **None** (0)\*\*
- **Forward (1)**
- **Back (2)**
- **Move Left (3)**
- **Move Right (4)**
- **Jump (5)**
- **Duck (6)**
- **Attack (7)**
- **Attack 2 (8)**
- **Reload (9)**
- **Speed (10)**
- **Walk (11)**

The default value is 0.

> **Third key to use that fires, if held down at the same time as other keys** (lookedkey3&lt;**choices**&gt;)

- **None (0)**
- **Forward (1)**
- **Back (2)**
- **Move Left (3)**
- **Move Right (4)**
- **Jump (5)**
- **Duck (6)**
- **Attack (7)**
- **Attack 2 (8)**
- **Reload (9)**
- **Speed (10)**
- **Walk (11)**

The default value is 0.

> **Negate** (negate&lt;**choices**&gt;)

- **No (0)**
- **Yes (1)**

If true, the keys fire when held rather than not held. Default is 0.

> **Prompt Message** (message%lt;**string**&gt;)

Message that displays to players for prompts.

> **Player Speed** (playerspeed%lt;**float**&gt;)

On prompt, the players speed will be changed by this factor. Default is 0.1.

> **Player Zoom Rate** (zoomrate%lt;**float**&gt;)

The time (in seconds) to move between player FOV and the zoomfov. Default is 0.2.

> **Player Zoom FOV** (zoomfov%lt;**integer**&gt;)

The FOV to zoom into on prompt. Use 0 to not zoom. Default is 0.

## Output

> OnKeyPressed(**void**)

Fires when the desired key is pressed.

> OnKeyHeld(**void**)

Fires when the desired key is held.

> OnKeyReleased(**void**)

Fires when the desired key is released.
