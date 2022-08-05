<template>
  <v-app :dark="getIsDarkMode">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :dark="getIsDarkMode"
      fixed
      app
      class="no-border"
    >
      <nuxt-link to="/" class="no-underline">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
          height="65px"
          class="flex text-center justify-center align-center"
          ><h4
            class="white--text"
            style="mix-blend-mode: soft-light"
            v-text="title"
          ></h4
        ></v-img>
      </nuxt-link>
      <v-list :dark="getIsDarkMode">
        <slot v-for="(item, i) in items">
          <v-list-group
            v-if="item.items && item.items.length"
            :key="`${item.title}-key-${i + 1}`"
            v-model="item.active"
            :prepend-icon="item.icon"
            :color="getIsDarkMode ? 'warning' : 'accent-1'"
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
          <v-list-item v-else :key="item.title" :to="item.to" exact>
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
    <v-app-bar :clipped-left="clipped" fixed app :dark="getIsDarkMode">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <!-- <v-toolbar-title v-text="title" /> -->
      <v-spacer />
      <v-btn icon @click.stop="setTheme">
        <!-- <v-btn icon @click.stop="handledarkmode"> -->
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
      <!-- <v-btn icon @click.stop="rightDrawer = !rightDrawer"> -->
      <!-- <v-btn icon @click.stop="setProfileMenu">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
      <v-menu transition="slide-x-transition" bottom right>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app :dark="getIsDarkMode">
      <span
        >&copy; {{ new Date().getFullYear() }} {{ company }}. Dark Mode:
        <code>{{ getIsDarkMode }}</code></span
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
  </v-app>
</template>

<script lang="ts">
import { mapGetters, mapState } from 'vuex'
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
          // to: '/typography',
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
      fab: false,
      darkmode: false
    }
  },
  computed: {
    ...mapGetters({ getIsDarkMode: 'core/getIsDarkMode' }),
    ...mapState({ isDark: (state: any) => state.core })
  },
  created() {
    const {
      $isServer,
      $store: { commit }
    }: any = this
    if (!$isServer) {
      commit('core/INITIALIZE_STORE')
    }
  },
  methods: {
    setTheme() {
      const {
        $vuetify,
        $store: { dispatch }
      }: any = this
      $vuetify.theme.isDark = !$vuetify.theme.isDark
      const nuxtify = JSON.parse(localStorage.getItem('nuxtify') || 'null')
      dispatch('core/setDark', {
        ...nuxtify,
        isDark: $vuetify.theme.isDark
      })
    },
    setProfileMenu() {
      // return console.log('setProfileMenu')
    },
    onScroll(e: any) {
      // let fab: any = this
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      const { $vuetify }: any = this
      $vuetify.goTo(0)
    }
  }
}
</script>

<!-- Styles -->
<!-- <style lang="scss">
@import '~/assets/scss/theme';
</style> -->
