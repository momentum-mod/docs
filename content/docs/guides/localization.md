---
categories:
  - guide
permalink: /guide/localization/
tags:
  - localization
  - languages
  - poeditor
  - translate
  - translation
---

# Localizing Momentum Mod

As Momentum Mod aims to be a global platform for everyone around the world to enjoy, it only makes sense that we offer support for the various languages players may know. Unfortunately however, nobody on the Momentum Mod team knows every language, so we need your help!

## Translating on POEditor

To help with bringing Momentum Mod to your language, first **[join our POEditor project](https://poeditor.com/join/project/LZnIxNDkJ4)** and join any languages with which you are comfortable helping out in.

{:.notice--info}
It's recommended that you go [into POEditor Account settings](https://poeditor.com/account/) and rename your profile to your Discord username, and let us know who you are in [the Momentum Mod Discord's **"POEditor Account Link"** forum](https://discord.com/channels/235111289435717633/1029301620799963217). **This is the only way to get a key from your translation work!!**

Keep an eye out for "Fuzzy" terms first and foremost, these are terms that have been updated on the English side and potentially need retranslation!

![](/assets/images/localization/loc-fuzzy-terms.jpg)

You may use comments on the individual terms to discuss clarification, or better yet, the individual language forums inside of [our Localization channel on Discord](https://discord.com/channels/235111289435717633/1019822630204870747).

As you help translate, proofreaders will verify translations, marking them as "proofread" when they are satisfied with the work done. Terms that are proofread become locked and prevent any edits until they are unmarked as proofread.

### Becoming a Language Lead (Proofreader)

Are you really passionate about the language you help out with? Want some extra responsibility to ensure a language is properly represented? If so, [reach out to us via this form](https://forms.gle/2RMtmQHdCLubtbSe7) and let us know!

We're looking for specific individuals that can act as the "lead" for specific languages. These individuals will become proofreaders, and given the power to mark terms as "proofread" once the translation is deemed good enough to their quality standards.

![](/assets/images/localization/loc-proofread-toggle.jpg)

Similarly, we're expecting proofreaders to be testing the strings for their language (see below) to ensure the game is looking good. The Momentum Mod team will work closely with proofreaders to ensure every bit of User Interface can accommodate languages.

## Testing Strings in the Game

Every push to Steam that the team does will update the terms to the latest available translations from the website. However, as we have a weekly-ish release cadance, this could mean that work is done before then and would need testing to see how it may appear in-game.

Inside of your `Momentum Mod Playtest/momentum/resource/` folder will be a ton of text files labeled `momentum_<language>.txt`. These are the localization files that Momentum Mod uses to apply the translations to the User Interface in the game.

![](/assets/images/localization/loc-local-files.jpg)

You can open the `momentum_<language>.txt` of choice and make edits inside of this file. If you want to see what a token looks like with a different value, search for the text as it appears in the game, edit the value, save the file, and reload Momentum Mod.

{:.notice--warning}
It is important to save this file in the **`UTF-8`** file format! You may need to use something other than Notepad to do so, as Notepad may default to saving it as "ASCII" which will mess up the encoding!

If something's broken, then, first of all, excellent find! You can report issues with translations inside our Discord server, under that language's specific Localization forum post. The proofreaders and Momentum Mod team will investigate it further and fix it in due time.

## Momentum Developers Section

{:.notice--danger}
**This section of the documentation is for Momentum Mod team developers only!**

### Adding Terms

Adding terms is quick and easy through the POEditor page.

At [the Project dashboard](https://poeditor.com/projects/view?id=156379), click the "Terms" tab and at the bottom of the page, the "Add Term" button.

![](/assets/images/localization/loc-add-terms.jpg)

Add the new term referenced in the code, and any context if you'd like to help explain how the term is being used.

![](/assets/images/localization/loc-new-term.jpg)

After the term is added, head to the English section, and give it the proper English value for it.

### Bulk Adding Terms

For adding many terms at a time, common when making entirely new pages or components, it's easiest to add all the new terms to a JSON file and import them all at once.

Create a JSON file in the below format, where terms are the token names (**without** a `#` at the start!) and definitions are the English strings.

```json
[
  {
    "term": "",
    "definition": ""
  },
  {
    "term": "",
    "definition": ""
  }
]
```

Then, go to the Import page on the POEditor dashboard, upload that JSON file, and set "Also import translations to a language" to English, as below.

![](/assets/images/localization/loc-bulk-add-terms.jpg)

### Changing Term Values

If there's a term that should have its text updated, find it in the English section and update its value.

This will automatically mark the term as Fuzzy, which will alert the other languages that there has been an update to the value, and that it needs re-translation.

### Testing Strings from POEditor

There's a helpful Python script to pull in the latest translation work, found inside `Momentum Mod Playtest/momentum/tools/`, called `get_poeditor_strings.py`.

This script requires [the latest version of Python 3](https://www.python.org/downloads/), and [a readonly POEditor API token](https://poeditor.com/account/api) to be used correctly.

To run this script, open a terminal and set the following variables:

On Windows (PowerShell):

```powershell
$Env:POEDITOR_PROJECT_ID = "156379"
$Env:POEDITOR_API_KEY = "(your read-only API key)"
```

On Linux:

```sh
export POEDITOR_PROJECT_ID=156379
export POEDITOR_API_KEY=<your read-only API key>
```

{:.notice--info}
You may want to add these to your system variables so that you don't have to set them every time. On Windows this is via `Edit System Environment variables`, on Linux, via your `.bashrc` file.

And then you can call the script:

```sh
python ./get_poeditor_strings.py
```

You may pass in a specific language code (see the `get_poeditor_strings.py` file for all of them) to get that specific language. For example:

```sh
python ./get_poeditor_strings.py "en"
```

would fetch and generate the `momentum_english.txt` localization file.

If you get an error about the API key, reach out to Goc about getting Admin access to POEditor.
