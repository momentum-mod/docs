---
title: How to Use Collectibles
permalink: /guide/collectibles/
category: guide
tags:
  - mapping
  - collectibles
toc: true
toc_sticky: true
---

This guide covers how to use collectibles in Momentum Mod. Collectibles are a tool that lets mappers create non-linear, staged maps.

## Prerequisites
To follow this guide you should:
- Be on Momentum 0.8.7+
- Have a working Hammer install with the Momentum FGD
- Some experience with entity I/O and filters

## What are Collectibles?
Collectibles are any entity that the player must interact with to continue in the map. They can be thought of like pickups, but any entity can be a collectible, so long as the player can interact with it to "collect" it. The entity [`filter_momentum_collectibles`](/entity/filter_momentum_collectibles) is used to control entities based on how many collectibles the player has gathered.

## Creating a Basic Collectible
Collectibles are added to the player with the `AddCollectible` input targeted at the player. To create a collectible, choose an entity that can be interacted with. The example below uses a button. Choose an event that will trigger the collection, like `OnPressed` or `OnStartTouch`, and set the target to `!player`. For the input, enter `AddCollectible`. It might not appear in the dropdown, so you may have to type it manually. For a basic collectible, you can leave the parameter override blank. Finally, ensure that your collectible entity is named.

{:.notice--warning}
Collectibles will not work if they are not named.

![Example Button](/assets/images/collectibles_guide/button_collectible_io_1.png)

## The Collectible Filter
The `filter_momentum_collectibles` entity is used to control gameplay based on how many collectibles the player has earned. Unlike other filters which examine the activator, `filter_momentum_collectibles` simply looks at how many collectibles the player has, and passes if it exceeds a certain number. You can use this filter to enable teleporters or unlock buttons. To use it, simply place one in your map, give it a name, and set the minimum required collectible count. Then, set its name as the filter for the entity you want to be controlled by collectibles.

## Advanced Collectibles
By setting the parameter override of the `AddCollectible` input, you can change the behaviour of a given collectible. The format is `requirement:weight`. The `requirement` is the targetname of another collectible entity that must be obtained before this entity can be obtained. The `weight` refers to how much the collectible is worth. For example, if the `weight` is 3, then that collectible would be the same as getting 3 collectibles of `weight` 1. Both parameters are optional, so you can omit one or both. By default there is no required pickup, and the default weight is 1. If you only use one parameter, you should omit the `:`.
