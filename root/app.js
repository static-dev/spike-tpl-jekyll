const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const Collections = require('spike-collections')
const env = process.env.SPIKE_ENV

const locals = {}
const collections = new Collections({
  addDataTo: locals,
  collections: {
    posts: {
      files: 'posts/**',
      permalinks: Collections.jekyll.date,
      transform: l => {
        const d = l._path.match(Collections.jekyll.regex)
        return Object.assign(l, { date: `${d[2]}/${d[3]}/${d[4]}` })
      },
      paginate: {
        perPage: 3,
        template: 'views/page_template.html',
        output: n => `posts/page${n}.html`
      }
    }
  }
})

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals: ctx => {
      return collections.locals(
        ctx,
        Object.assign({ pageId: pageId(ctx) }, locals)
      )
    },
    minify: env === 'production'
  }),
  postcss: cssStandards({
    minify: env === 'production'
  }),
  babel: jsStandards(),
  plugins: [collections]
}
