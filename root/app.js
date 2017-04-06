const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('babel-preset-env')
const dynamicImport = require('babel-plugin-syntax-dynamic-import')
const pageId = require('spike-page-id')
const Collections = require('spike-collections')

const locals = {}
const collections = new Collections({
  addDataTo: locals,
  collections: {
    posts: {
      files: 'posts/**',
      permalinks: Collections.jekyll.date,
      transform: (l) => {
        const d = l._path.match(Collections.jekyll.regex)
        return Object.assign(l, { date: `${d[2]}/${d[3]}/${d[4]}` })
      },
      paginate: {
        perPage: 3,
        template: 'views/_page_template.sgr',
        output: (n) => `posts/page${n}.html`
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
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: (ctx) => { return collections.locals(ctx, Object.assign({ pageId: pageId(ctx) }, locals)) }
  }),
  postcss: cssStandards(),
  babel: { presets: [[jsStandards, { modules: false }]], plugins: [dynamicImport] },
  plugins: [collections]
}
