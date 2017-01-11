# Spike - Jekyll Template

[![tests](http://img.shields.io/travis/static-dev/spike-tpl-base/master.svg?style=flat)](https://travis-ci.org/spike-tpl-base/spike-tpl-base) [![dependencies](http://david-dm.org/static-dev/spike-tpl-base.svg?path=root)](https://david-dm.org/static-dev/spike-tpl-base?path=root)

A template that gives you jekyll-like static blog functionality for the latest [spike](https://github.com/static-dev/spike) version. Includes dynamic content with frontmatter, dates parsed from the file paths, and pagination. Can be configured to work with multiple collections.

## Installation

### With Spike

This is the default template for use within [spike](https://github.com/static-dev/spike) when running `spike new` without a template option.

- `npm i spike -g`
- `spike tpl add jekyll git@github.com:static-dev/spike-tpl-jekyll.git`
- `spike new <projectname> -t jekyll`
- `npm run watch`

> NOTE: Because this template uses [Spike Collections](https://github.com/static-dev/spike-collections#installation), you cannot use the globally installed spike CLI with this template. Instead, you must use the locally installed spike via npm.

### Standalone

[Spike](https://github.com/static-dev/spike) uses [sprout](https://github.com/carrot/sprout) internally to generate it's project templates. This means you can even use this template without [spike](https://github.com/static-dev/spike) by using [sprout](https://github.com/carrot/sprout) directly.

- `npm i sprout-cli -g`
- `sprout add spike-tpl-jekyll git@github.com:static-dev/spike-tpl-jekyll.git`
- `sprout new spike-tpl-jekyll <myproject>`

## Options

- **name** (name of template)
- **description** (a short description of the template)
- **github_username** (name of github user)
