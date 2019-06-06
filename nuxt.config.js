import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/styles.scss' }
    ],
  

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome'
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    baseURL: '127.0.0.1:3030/api/v1/'
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
 build: {
  extend(config, ctx) {
    const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
    vueLoader.options.transformAssetUrls = {
      video: ['src', 'poster'],
      source: 'src',
      img: 'src',
      image: 'xlink:href',
      'b-img': 'src',
      'b-img-lazy': ['src', 'blank-src'],
      'b-card': 'img-src',
      'b-card-img': 'img-src',
      'b-card-img-lazy': ['src', 'blank-src'],
      'b-carousel-slide': 'img-src',
      'b-embed': 'src'
    }
  }
}
}
