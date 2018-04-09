module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'RepsCount',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'RepsCounter' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#1e74ff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },

  css: [
    'bulma',
    '@/assets/styles.scss'
  ],

  modules: [
    '@nuxtjs/pwa',
  ],

  plugins: [
    { src: '@/plugins/filters.js' },
    { src: '@/plugins/components', ssr: false }
  ],

  manifest: {
    "name": 'RepsCount',
    "background_color": "#1e74ff",
    "display": "standalone",
    "theme_color": "#1e74ff",
    "start_url": "/"
  }
}
