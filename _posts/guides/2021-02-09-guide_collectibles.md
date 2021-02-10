---
title: How to create and use map collectibles
permalink: /guide/collectibles/
category: guide
tags:
  - mapping
  - collectibles
---

This guide covers how to use collectibles in Momentum Mod. Collectibles are a tool that lets mappers create non-linear, staged maps.

## Prerequisites
To follow this guide you should:
- Be on Momentum 0.8.7+
- Have a working Hammer install with the Momentum FGD

## What are Collectibles?
Collectibles are any entity that the player must interact with to continue in the map. They can be thought of like pickups, but any entity can be a collectible, so long as the player can interact with it to "collect" it. The entity `filter_momentum_collectibles` is used to control entities based on how many collectibles the player has gathered.

## Creating a Basic Collectibles
Collectibles are added to the player with the `AddCollectible` input targeted at the player. To create a collectible, choose an entity that can be interacted with. The example below uses a button. Choose an event that will trigger the collection, like OnPressed or OnStartTouch, and set the target to `!player`. For the input, enter AddCollectible. It might not appear in the dropdown, so you may have to type it manually. For a basic collectible, you can leave the parameter override blank. Finally, ensure that your collectible entity is named.

{:.notice--warning}
Collectibles will not work if they are not named.

![Example Button](/assets/images/collectibles_guide/button_collectible_io_1.png)
