# Amy's Gurumis

This is my Jekyll blog. Hoo-rah.

## How it's built

We use the static site generator [Jekyll](https://jekyllrb.com/). This README is in the Jekyll repository.

For hosting, we have a free account on Netlify. Sign in with GitHub.

For the domain name, we pay per year on Namesilo.

## How to run the blog locally

```
bundle exec jekyll serve
```

## How to publish a new post

First, build:

```
bundle exec jekyll build
```

Then commit and push. Either using the GitHub Desktop app, or on the command line:

```
git commit -am "Your message here about what you did"
git push
```

## How we migrated from Wordpress

Install user-local gems and update PATH:

```
gem install --user-install jekyll bundler jekyll-import hpricot open_uri_redirections
echo 'export PATH="$HOME/.gem/ruby/2.3.0/bin:$PATH"' >> ~/.bash_profile
```

Create the blog:

```
cd ~/Dropbox
jekyll new amysgurumis
cd amysgurumis
bundle install --path ~/.gem/ruby/2.3.0
```

Export the XML file from https://amysgurumis.wordpress.com/wp-admin/export.php.

Import the XML to Jekyll:

```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordpressDotCom.run({
      "source" => "wordpress.xml",
      "no_fetch_images" => false,
      "assets_folder" => "assets"
    })'
```
