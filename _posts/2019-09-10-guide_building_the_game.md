---
title: Building The Game
permalink: /guide/building-the-game/
category: guide
tags:
  - build
  - github
toc: true
toc_sticky: true
---
<img src="/assets/images/guide_headers/guide_building_the_game.jpg" alt="Build Guide" style="display: block; margin: auto;">

This Guide covers the general method of building the latest code from GitHub for Momentum for Windows and Linux.
## Prerequisites
To make use of this guide, you should:  
- Be using the Administrator account of the machine you're using
- Have a pot of coffee (optional)

<div class="note info">
    <p>
		<center><b><em>Important Note:</em></b></center><br>
		You'll need Momentum activated on your Steam account in order to be able to test online features such as lobbies and leaderboards!
    </p>
</div>

## Cloning

Download [***GitHub Desktop***](https://desktop.github.com/), it will require a bit of setup, and may require an account.

Go to the [***Main Page***](https://github.com/momentum-mod/game) and click ***Clone or Download > Open in Desktop***:  

<img src="/assets/images/build_guide/build0.png" alt="" style="display: block; margin: auto;">

You should clone the `develop` branch.  

If not, switch to it from the top if you're using GitHub Desktop.  

It may also be called `origin/develop`:  

<img src="/assets/images/build_guide/build1.png" alt="" style="display: block; margin: auto;">

<div class="note info">
    <p>
		Your installation of GitHub Desktop may look different, but should otherwise function the same.
    </p>
</div>

## Windows
Download Momentum Mod on Steam, or grab the `MomentumDev` folder from [***Google Drive***](https://drive.google.com/file/d/115xT5IIN-CimKCZQho3xj7uIcYFMSZXm/view).

Download [***Visual Studio 2019***](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&rel=16).

<div class="note info">
    <p>
When installing Visual Studio, make sure this version is checked:

<img src="/assets/images/build_guide/build6.png" alt="" style="display: block; margin: auto;">
    </p>
</div>

Follow [this step on the Valve Dev Wiki](https://developer.valvesoftware.com/wiki/Source_SDK_2013#Unable_to_find_RegKey_for_.vcproj_files_in_solutions_.28Windows.29) to add a missing registry key to your computer.

Get a Git client like [***GitHub Desktop***](https://desktop.github.com/) if you haven't already and then clone the develop branch of the repository.

If you've downloaded Momentum Mod from Steam, create an extra folder somewhere called `MomentumDev`, and copy everything from your `steamapps/common/Momentum Mod` folder to it. Delete the `momentum` folder from `MomentumDev`, as this will be symlinked later.

Otherwise if you downloaded the `MomentumDev` folder from Google Drive, extract it somewhere.

Edit `mp/src/creategameprojects.ps1` inside the develop branch to point the `$path` variable to the path where your `MomentumDev` folder is.  

<img src="/assets/images/build_guide/build2.png" alt="" style="display: block; margin: auto;">

Run `creategameprojects.bat` **as administrator**.

<img src="/assets/images/build_guide/build3.png" alt="" style="display: block; margin: auto;">

This script will create a symlink of your `mp/game/momentum` folder into the `MomentumDev` folder automatically, which allows you to test changes immediately and run the debugger from Visual Studio.

<div class="note info">
    <p>
		If you can't run it as administrator, start <code>cmd.exe</code> as Administrator, then `cd` to the develop repository and run it from <code>cmd.exe</code>.
    </p>
</div>


Now open `momentum.sln` with VS2019, go start that pot of coffee, and once it's finished click `Build Solution`.

<img src="/assets/images/build_guide/build4.png" alt="" style="display: block; margin: auto;">

...then go finish the pot of coffee and pour yourself some.

Click *Debug* to launch the game.  

<img src="/assets/images/build_guide/build5.png" alt="" style="display: block; margin: auto;">

<div class="note info">
    <p>
		You can launch with no debugger attached by pressing <code>CTRL+F5</code> instead...
    </p>
</div>
<div class="note warning">
    <p>
		...but if a crash occurs no useful information can be gathered!
    </p>
</div>

## Linux
Install the following dependencies:
```
sudo apt-get install build-essential gcc-multilib g++-multilib
```

Git clone the [Steam Runtime repository](https://github.com/ValveSoftware/steam-runtime).

Go into its directory and run: 
```
./setup_chroot.sh --i386
```

Download Momentum Mod on Steam **(see the important note at the top of this page).**

Clone the repository wherever you'd like.

Create an extra folder somewhere called `MomentumDev`, and copy all of the files from your Steam's `steamapps/common/Momentum Mod` directory into this folder.  

So for example, to get at the game's binaries, it should look like `MomentumDev/momentum/bin`. 

Now, delete the `momentum` folder inside `MomentumDev`.

Symlink the `mp/game/momentum/` folder from your Git clone over to this `MomentumDev` folder, so that the binaries you end up compiling automatically copy over.  

To compile the game, run the following commands in the `mp/src/` directory of your clone:
```
./creategameprojects  
sudo schroot --chroot steamrt_scout_i386 -- make -f games.mak
```

Make sure Steam is open, and you should be able to run `./hl2.sh -game momentum` in the `MomentumDev` folder to launch the game.

<div class="note warning">
    <p>
		<center><b><em>Unfortunate Note:</em></b></center><br>
		Developing on Linux is going to be a chore, and is best reserved for Windows.<br><br>  
		If we ever convert the project to CMake, this unfortunate note will go away, but blame VPC for not generating any good Linux development files for the time being.
    </p>
</div>
 
