# Amy's Gurumis

This is my Zola blog. Hoo-rah.

## What it uses

The repository is on GitHub: https://github.com/amykember/amysgurumis.

We use the Zola static site generator: https://www.getzola.org.

The website is hosted for free on Netlify: https://app.netlify.com/sites/amysgurumis.

We pay NameSilo for the domain name: https://www.namesilo.com/account_domains.php.

## How to do stuff

### Preview the website

In VS Code, press Cmd+Shift+B.

Or, go to _Explorer_ (Cmd+Shift+E), find _Task Runner_ at the bottom, and click "Preview Website".

Or, open a terminal (Ctrl+Backtick), run `zola serve`, and visit http://127.0.0.1:1111.

### Publish changes

1. If you have a draft that's ready to be published, remove the `draft = true` line.

2. Make sure dates are accurate. You might want to rename a blog post file to use the current date.

3. Go to _Explorer_ (Cmd+Shift+E), find _Task Runner_ at the bottom, and click "Publish!!".

### Create a new blog post

Go to _Explorer_ (Cmd+Shift+E), find _Task Runner_ at the bottom, and click "New Blog Post".

To change the slug, rename the file (keeping the date in front) and then go to _Explorer_ (Cmd+Shift+E), find _Task Runner_ at the bottom, and click "Fix Stuff".

### Create a new page

Go to _Explorer_ (Cmd+Shift+E), find _Task Runner_ at the bottom, and click "New Page".

To change the slug, rename the file and then go to _Explorer_ (Cmd+Shift+E), find _Task Runner_ at the bottom, and click "Fix Stuff". To reorder pages, rename them so that the numbers are in the desired order, and run "Fix Stuff".

### Remove a post or page

You can delete the file, or just add `draft = true` under `title = "..."` so that it won't be published.

## History

- Sep 2010: WordPress blog at https://amysgurumis.wordpress.com
- Jun 2019: Converted to Jekyll, moved to https://amysgurumis.com
- Dec 2021: Converted to Zola, added the Pattern Maker

## License

The Minima theme files were copied from https://github.com/onur/zola-minima/commit/c69b995dcdaa236eae7ab207e5fef47a7628ea78, which is © 2018 Onur Aslan <onur@onur.im> and MIT-licensed.
