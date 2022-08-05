import colors from 'vuetify/es5/util/colors'

/** constants */
import ROUTES from './constants/routes'

/** current environment */
const CURRENT_ENV = process.env.ENV || 'prod'
const isProduction = CURRENT_ENV === 'prod'

const BASEURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://nuxtjs-vuetify-dashboard.netlify.app'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s - nuxtjs-vuetify-dashboard${
      (!isProduction && ' - Dev') || ''
    }`,
    title: 'nuxtjs-vuetify-dashboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'preconnect',
        hid: 'preconnect',
        href: 'https://fonts.gstatic.com'
      },
      {
        rel: 'preconnect',
        hid: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        hid: 'font-stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@100;200;300;400;700;900&Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/scss/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/chart.js', mode: 'client' },
    { src: '~/plugins/axios.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: BASEURL,
    proxy: true
  },

  // https://axios.nuxtjs.org/options/#proxy
  proxy: {
    '/json': {
      target: BASEURL,
      pathRewrite: {
        '^/json': '/json' // static files in json dir
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    customProperties: true,
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Montserrat:wght@100;200;300;400;500;600;700;800;900'
      }
    },
    theme: {
      options: {
        cspNonce: 'dQw4w9WgXcQ'
        /* variations: false */
      },
      // dark: true,
      // default: 'dark',
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  router: {
    trailingSlash: false,
    extendRoutes(nuxtRoutes, resolve) {
      const routes = []
      const totalExistingRoutes = nuxtRoutes.length

      if (ROUTES) {
        for (const name in ROUTES) {
          if (
            // eslint-disable-next-line no-prototype-builtins
            ROUTES.hasOwnProperty(name) &&
            name !== 'API' &&
            name !== 'PUBLIC'
          ) {
            const route = ROUTES[name]
            const { route: path, href: component } = route
            if (path && component) {
              const chunkName = `pages${component}`
              routes.push({
                name,
                path,
                component: resolve(__dirname, `pages/${component}`),
                chunkName: chunkName.replace(/.vue/g, '')
              })
            }
          }
        }

        nuxtRoutes.unshift(...routes)
        nuxtRoutes.length = nuxtRoutes.length - totalExistingRoutes
      }
    }
  },

  // https://nuxtjs.org/docs/configuration-glossary/configuration-servermiddleware
  // serverMiddleware: [
  //   // Will register file from project server-middleware directory to handle /server-middleware/* requires
  //   { path: '/api/v1', handler: '~/api/index.js' }
  // ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cssSourceMap: false
    /* extend(config, { isClient }) {
			// Extend only webpack config for client-bundle
			if (isClient) {
				config.devtool = 'source-map';
			}
		}, */
  }
}
