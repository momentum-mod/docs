---
title: Creating Docs Pages
categories:
  - guide
tags:
  - meta
---

# How to Create a Documentation Page

All pages on this site are hosted in the [Momentum Mod docs GitHub repository](https://github.com/momentum-mod/docs). The site uses Jekyll with the Minimal Mistakes theme, and is entirely open source.

## References

- [Jekyll Documentation](https://jekyllrb.com/docs/)
  - [Posts](https://jekyllrb.com/docs/posts/)
  - [Front matter](https://jekyllrb.com/docs/front-matter/)
  - [Variables](https://jekyllrb.com/docs/variables/)
  - [Custom attributes in Jekyll](https://digitaldrummerj.me/styling-jekyll-markdown/)
- [Markdown Documentation](https://www.markdownguide.org/)
- [Minimal Mistakes Documentation](https://mmistakes.github.io/minimal-mistakes/docs/layouts/)

## Setting up Locally

Since this website is static HTML, the requirements to run it are fairly simple compared to traditional websites.

Follow the steps to install [Ruby and Jekyll](https://jekyllrb.com/docs/installation/) for your platform.

Open a terminal with Ruby and change to the directory where you cloned this repository.

{{< hint info >}}
If it is your first time running the website, run `bundle install` first to install dependencies!
{{< /hint >}}

Run `bundle exec jekyll serve` to host the website. Jekyll hosts the website at [localhost:4000](http://localhost:4000) and automatically reloads to any file changes done to posts, data, or excess files. The only exception is changes made to `_config.yml`, that will require restarting the Jekyll process.

You can use `CTRL+C` to stop the process in the terminal when you are done with it.

## Creating a new Page

### Creating the File

{{< hint info >}}
If you are creating a new file for the first time, it is recommended to look at the [Jekyll documentation page on posts](https://jekyllrb.com/docs/posts/) to get an idea of what this site runs on.
{{< /hint >}}

A new page should be created inside of the `_posts` directory. Since this site uses Jekyll, a documentation page is going to have to follow their "blog post" file format:  
`YYYY-MM-DD-<filename>.<ext>`

- `YYYY-MM-DD` is the date the file was created.
- `<filename>` is either the name of the command/variable, or if it is a guide, is split up into two parts: `guide_<name>`, where `<name>` is the shorthand of the guide's name.
  - Command/Convar example: `2019-08-25-mom_restart.md`
  - Guide example: `2019-08-25-guide_create-docs-page.md`
- `<ext>` is the file's extension, for most cases, will be `.md`, signifying a markdown file. It can be `.html` if need be, but for readability, keep it `.md` as most markdown files can have HTML embedded in them anyways.

{% assign pagename = page.path | split: "/" %}

For example, this file name is:  
<code>{{ pagename[1] }}</code>

#### Front Matter

All pages begin with something called the "Front Matter". It's a Jekyll concept that adds variables and describes what the page is, and is used in processing when converting to an actual webpage. The main variables inside of the front matter that you will need to use are:

```
---
title: # The name of the command or convar, or the Guide/Article name. E.g. "mom_restart" or "How to Create a Docs Page"


category: [command/guide/var/entity] # The category of the post. One of "command", "guide", "entity" or "var"

tags:
  - # A list of tags, with each starting on a new line and using a "-" character.

toc: [true/false] # Whether the page should have a Table of Contents. Defaults to false.
toc_sticky: [true/false] # If you are using the Table of Contents, consider setting this to true if the page is long.
---
```

#### Notices

You can highlight something that's important by prepending a notice tag like so:

```
{{< hint danger >}}
I'm red!
{{< /hint >}}
{{< hint info >}}
This one is blue
{{< /hint >}}
{{< hint warning >}}
Yellow notice
```
{{< /hint >}}

{{< hint danger >}}
I'm red!
{{< /hint >}}
{{< hint info >}}
This one is blue
{{< /hint >}}
{{< hint warning >}}
Yellow notice
{{< /hint >}}

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

{{< hint danger >}}
**Requires `-mapping`**  
In order to use this command, you have to boot the game with
{{< /hint >}}
`-mapping` as a launch parameter!

## Further Edits

If you want to make style changes or introduce new layouts, you will have to clone the repository to do so. The site is based on the [Minimal Mistakes theme](https://github.com/mmistakes/minimal-mistakes), so a lot of the files you may need could be found there.
