const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('babel-preset-env')
const pageId = require('spike-page-id')
const Collections = require('spike-collections')

const locals = {}
const collections = new Collections({
  addDataTo: locals,
  collections: {
    posts: {
      files: 'posts/**',
      permalinks: Collections.jekyll.date,
      paginate: {
        perPage: 2,
        template: 'views/_page_template.sgr',
        output: (n) => `page${n}.html`
      }
    }
  }
})

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', '_cache/**', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: (ctx) => collections.locals(ctx, locals)
  }),
  postcss: cssStandards(),
  babel: { presets: [[jsStandards, { modules: false }]] },
  plugins: [collections]
}
