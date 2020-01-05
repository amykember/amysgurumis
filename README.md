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

## Ruby issue on 2020/01/04

When running `bundle exec jekyll build`, got this:

```
-bash: /Users/amy/.gem/ruby/2.3.0/bin/bundle: /System/Library/Frameworks/Ruby.framework/Versions/2.3/usr/bin/ruby: bad interpreter: No such file or directory
```

Caused by updating to Catalina and going from Ruby 2.3.0 to 2.6.0, I think.

Fixed it by:

```
gem uninstall bundler jekyll
mv ~/.gem/ruby/2.3.0 ~/.Trash
sudo gem install bundler
```

And also changed `.bash_profile` to be independent of version:

```
# Update PATH for Ruby gems
for path in $HOME/.gem/ruby/*/bin; do
	PATH=$path:$PATH
done
```

References:

- https://github.com/fastlane/fastlane/issues/15460#issuecomment-539947237
- https://stackoverflow.com/questions/31596273/install-gem-in-local-folder
