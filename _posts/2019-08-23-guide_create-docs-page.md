---
title: How to Create a Documentation Page
permalink: /guide/create-docs-page/
category: guide
tags:
  - meta
toc: true
---

All pages on this site are hosted in the [Momentum Mod docs GitHub repository](https://github.com/momentum-mod/docs). The site uses Jekyll with the Minimal Mistakes theme, and is entirely open source.

## References
 * [Jekyll Documentation](https://jekyllrb.com/docs/)
    * [Posts](https://jekyllrb.com/docs/posts/)
    * [Front matter](https://jekyllrb.com/docs/front-matter/)
    * [Variables](https://jekyllrb.com/docs/variables/)
 * [Markdown Documentation](https://www.markdownguide.org/)
 * [Minimal Mistakes Documentation](https://mmistakes.github.io/minimal-mistakes/docs/layouts/)

## Creating a new Page

### Creating the File

<div class="note info">
    <p>
        If you are creating a new file for the first time, it is recommended to look at the <a href="https://jekyllrb.com/docs/posts/">Jekyll documentation page on posts</a> to get an idea of what this site runs on.
    </p>
</div>

A new page should be created inside of the `_posts` directory. Since this site uses Jekyll, a documentation page is going to have to follow their "blog post" file format:  
`YYYY-MM-DD-<filename>.<ext>`

 * `YYYY-MM-DD` is the date the file was created.
 * `<filename>` is either the name of the command/variable, or if it is a guide, is split up into two parts: `guide_<name>`, where `<name>` is the shorthand of the guide's name.
    * Command/Convar example: `2019-08-25-mom_restart.md`
    * Guide example: `2019-08-25-guide_create-docs-page.md`
 * `<ext>` is the file's extension, for most cases, will be `.md`, signifying a markdown file. It can be `.html` if need be, but for readability, keep it `.md` as most markdown files can have HTML embedded in them anyways.

{% assign pagename = page.path | split: "/" %}

For example, this file name is:   
<code>{{ pagename[1] }}</code>

#### Front Matter
All pages begin with something called the "Front Matter". It's a Jekyll concept that adds variables and describes what the page is, and is used in processing when converting to an actual webpage. The main variables inside of the front matter that you will need to use are:

```
---
title: # The name of the command or convar, or the Guide/Article name. E.g. "mom_restart" or "How to Create a Docs Page"

permalink: # If creating a guide, you will need to override this to point to the shorthand of it. E.g. "/guide/create-docs-page/". If not creating a guide, there is typically no need to overwrite this.

category: [command/guide/var] # The category of the post. One of "command", "guide", or "var"

tags:
  - # A list of tags, with each starting on a new line and using a "-" character.

toc: [true/false] # Whether the page should have a Table of Contents. Defaults to false.
---
```

### Adding to navigation.yml (Optional)

If you want your page to show up on the sidebar, you will need to edit another file.

Inside of the `_data/` folder is the `navigation.yml` file. Inside of this is where the sidebar order and linking goes.

Insert new entries lexigraphically into the list. Make sure the URLs match the others found in the file, otherwise the page will not highlight itself!

## Requiring `-mapping`
If a command or convar requires `-mapping` to work, you may specify it as such in the front matter:
```
---
[...]
requires_mapping: true
[...]
---
```

This will insert the following block at the top of the document:
<div class="note warning">
    <h5>Requires <code>-mapping</code></h5>
    <p>
        In order to use this command, you have to boot the game with
        <code>-mapping</code> as a launch parameter!
    </p>
</div>

## Further Edits

If you want to make style changes or introduce new layouts, you will have to clone the repository to do so. The site is based on the [Minimal Mistakes theme](https://github.com/mmistakes/minimal-mistakes), so a lot of the files you may need could be found there.