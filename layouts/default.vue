<template>
  <v-app id="default" :dark="isDark">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :dark="isDark"
      fixed
      app
      floating
      styles="height: calc(100% - 2rem); top: 0px; max-height: calc(100% - 0px)"
    >
      <!-- src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80" -->
      <!-- class="rounded ml-3 mt-4" -->
      <!-- class="no-border elevation-2 rounded ml-3 mt-4" -->
      <nuxt-link to="/" class="no-underline success--text">
        <v-flex
          align-self-center
          class="text-center justify-center align-center"
          style="height: 33px"
        >
          <h4 class="my-6" v-text="title"
        /></v-flex>
      </nuxt-link>
      <!-- <v-container fluid class="accent darken-2">
        <v-row>
          <v-col cols="3">
            <v-avatar
              color="primary"
              size="35"
              v-html="title.substring(0, 1)"
            ></v-avatar>
          </v-col>
          <v-col cols="9">
            <h5>John Doe</h5>
            <h6>Web Administrator</h6>
          </v-col>
        </v-row>
      </v-container> -->
      <v-list :dark="isDark">
        <slot v-for="(item, i) in items">
          <v-list-group
            v-if="item.items && item.items.length && item.to === null"
            :key="`${item.title}-key-${i + 1}`"
            v-model="item.active"
            :prepend-icon="item.icon"
            :color="isDark ? 'warning' : 'accent-1'"
            :value="false"
            :ripple="false"
          >
            <template v-if="item.items" v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="child in item.items"
              :key="child.title"
              :to="child.to"
            >
              <v-list-item-action>
                <v-icon center dense>
                  {{ child.icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.title"
            :to="item.to"
            exact
            :ripple="false"
          >
            <v-list-item-action>
              <v-icon center>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </slot>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      :color="isDark ? 'default' : 'white'"
      :dark="isDark"
      elevate-on-scroll
      app
      class="px-4"
    >
      <v-app-bar-nav-icon small @click.stop="drawer = !drawer" />
      <v-btn small icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn small icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn small icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer />
      <v-col
        cols="3"
        sm="3"
        :lg="searchLength ? '2' : '1'"
        align-self="stretch"
      >
        <v-text-field
          v-model="search"
          dense
          flat
          solo
          name="search"
          :placeholder="searchLength ? 'Search' : ''"
          prepend-inner-icon="mdi-magnify"
          maxlength="20"
          @focus="searchFocus"
          @focusout="searchFocus"
        >
        </v-text-field>
      </v-col>
      <v-btn small icon @click.stop="setTheme">
        <!-- <v-btn icon @click.stop="handledarkmode"> -->
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer"> -->
      <!-- <v-btn icon @click.stop="setProfileMenu">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
      <v-menu transition="slide-y-transition" bottom top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn small icon v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list class="pl-2 pr-4">
          <!-- <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item> -->
          <v-list-item :to="`/`">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Logout </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="`/`">
            <v-list-item-icon>
              <v-icon>mdi-account-circle-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> Profile </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="`/`">
            <v-list-item-icon>
              <v-icon>mdi-cog-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> {{ title }} Setting </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app :dark="isDark" class="mx-auto">
      <span
        ><img src="/nuxt.png" height="12" /> {{ title }} &copy;
        {{ new Date().getFullYear() }}
        {{ company }}. Dark Mode: <code>{{ isDark }}</code></span
      >
      <v-btn
        v-show="fab"
        v-scroll="onScroll"
        fab
        light
        fixed
        bottom
        right
        small
        color="error"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-footer>
    <v-overlay v-if="$nuxt.isOffline" :value="overlay" z-index="1000">
      <v-banner color="warning" single-line @click:icon="alert">
        <v-icon slot="icon" color="light" size="36">
          mdi-wifi-strength-alert-outline
        </v-icon>
        <span class="white--text"
          >Unable to verify your Internet connection</span
        >
        <template v-slot:actions>
          <v-btn
            class="white--text"
            color="warning"
            text
            flat
            fab
            @click="overlay = !overlay"
          >
            <v-icon> mdi-window-close </v-icon>
          </v-btn>
        </template>
      </v-banner></v-overlay
    >
  </v-app>
</template>

<script>
// import { mapGetters, mapState } from 'vuex'
import { mapState } from 'vuex'
import global from '~/constants/global'

export default {
  name: 'LayoutDefault',
  data() {
    return {
      title: 'Nuxtify',
      company: global.company,
      clipped: false,
      drawer: false,
      fixed: false,
      overlay: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-chart-bar',
          title: 'Charts',
          to: '/charts'
        },
        {
          icon: 'mdi-table-large',
          title: 'Tables',
          to: '/tables'
        },
        {
          icon: 'mdi-message-bulleted',
          title: 'Forms',
          to: '/forms'
        },
        {
          icon: 'mdi-cards',
          title: 'Cards',
          to: '/cards'
        },
        {
          icon: 'mdi-account-card',
          title: 'Authentication',
          to: null,
          items: [
            {
              icon: 'mdi-login-variant',
              title: 'Sign In',
              to: '/sign-in'
            },
            {
              icon: 'mdi-account-plus',
              title: 'Sign Up',
              to: '/sign-up'
            },
            {
              icon: 'mdi-account-key',
              title: 'Forgot Password',
              to: '/forgot-password'
            }
          ]
        },
        {
          icon: 'mdi-flag',
          title: 'Filters',
          to: '/filters'
        },
        {
          icon: 'mdi-material-ui',
          title: 'Icons',
          to: '/icons'
        },
        {
          icon: 'mdi-pencil-box',
          title: 'Typography',
          // to: '/typography',
          to: null,
          items: [
            {
              icon: 'mdi-pencil-lock',
              title: 'Paragraph',
              to: '/paragraph'
            },
            {
              icon: 'mdi-pencil',
              title: 'Headings',
              to: '/headings'
            },
            {
              icon: 'mdi-grease-pencil',
              title: 'Typographies',
              to: '/typography'
            }
          ]
        },
        {
          icon: 'mdi-book-multiple',
          title: 'Landing',
          to: '/landing'
        }
      ],
      miniVariant: false,
      right: true,
      fab: true,
      darkmode: false,
      searchLength: false,
      search: ''
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$vuetify.isDark ? 'dark--theme' : 'light--theme'
      }
    }
  },
  computed: {
    ...mapState({ isDark: (state) => state.core.theme.isDark })
  },
  created() {
    const {
      $isServer,
      $store: { commit }
    } = this
    // Execute initial stores
    if (!$isServer) {
      commit('core/INITIALIZE_STORE')
    }
  },
  methods: {
    setTheme() {
      const {
        $vuetify,
        $store: { dispatch }
      } = this
      $vuetify.theme.dark = !$vuetify.theme.isDark
      const nuxtify = JSON.parse(localStorage.getItem('nuxtify') || 'null')
      dispatch('core/setDark', {
        ...nuxtify,
        isDark: $vuetify.theme.dark
      })
    },
    searchFocus() {
      this.searchLength = !this.searchLength
      this.search = ''
    },
    // setProfileMenu() {
    // return console.log('setProfileMenu')
    // },
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      const { $vuetify } = this
      $vuetify.goTo(0)
    }
  }
}
</script>

<!-- Styles -->
<!-- <style lang="scss">
@import '~/assets/scss/theme';
</style> -->
