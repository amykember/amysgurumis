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

First, did as suggested [here](https://github.com/fastlane/fastlane/issues/15460#issuecomment-539947237):

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

But installing `jekyll` or doing `bundle install` failed with this weird error:

```
Installing eventmachine 1.2.7 with native extensions
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

    current directory: /Users/amy/.gem/ruby/2.3.0/ruby/2.6.0/gems/eventmachine-1.2.7/ext
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/bin/ruby -I
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0 -r
./siteconf20200104-13097-1ammk2z.rb extconf.rb
mkmf.rb can't find header files for ruby at
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/include/ruby.h
```

Found the same thing [here](https://github.com/castwide/vscode-solargraph/issues/78)

## Ruby issue on 2021/12/21

When running `bundle exec jekyll serve`, got errors, so ran `bundle install`, but got more errors about eventmachine not being able to build. Upgraded Homebrew only to realize we were using the system Ruby. Seems something to do with Xcode command-line tools preventing a Gem dependency with native extensions from installing.

So installed Ruby from Homebrew, deleted Gemfile.lock, simplified Gemfile, and ran `bundle install` (using the Homebrew Ruby's `bundle`).

## Blurring the photos 2020/06/05

```
brew install imagemagick
cd assets
convert ak_chubbybaby1.jpg \( -clone 0 -fill white -colorize 100 -fill black -draw "polygon 755,138 755,735 1158,735 1158,114 955,114 955,138" -alpha off -blur 0x2 -write mpr:mask +delete \) -mask mpr:mask -blur 0x2 +mask ak_chubbybaby1_blur.jpg
```

### Coordinates

- chubbybaby1: "755,138 755,735 1158,735 1158,114 955,114 955,138"
- horse1: "755,138 755,730 920,730 975,465 1160,465 1165,112 950,112 950,138"
- jumbodoll: "755,253 755,725 1160,725 1160,230 950,230 950,253"
- lion: "755,253 755,725 1160,725 1160,230 950,230 950,253"
- littlebunny: "755,138 755,735 1158,735 1158,114 955,114 955,138"
- littledoll1: "755,249 755,730 955,730 1014,465 1160,465 1160,225 957,225 957,249"
- mouse: "755,253 755,725 957,725 957,433 1160,433 1160,226 958,226 958,253"
- prairiebunny: "755,253 755,725 948,725 948,380 1160,380 1160,226 958,226 958,253"
- teddy: "755,138 755,562 991,562 991,547 1160,547 1160,111 956,111 956,138"
- turtle: "755,255 755,470 798,470 842,459 960,469 1013,472 1056,459 1160,469 1160,230 958,230 958,255"
