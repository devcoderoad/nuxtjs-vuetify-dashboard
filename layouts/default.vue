<template>
  <v-app :dark="theme === 'dark' ? true : false">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list dark>
        <slot v-for="(item, i) in items">
          <v-list-group
            v-if="item.items && item.items.length"
            :key="`${item.title}-key-${i + 1}`"
            v-model="item.active"
            :prepend-icon="item.icon"
            color="amber accent-1"
            :value="false"
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
              dark
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
            color="amber accent-1"
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
    <v-app-bar :clipped-left="clipped" fixed app>
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
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} {{ theme }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { mapState } from 'vuex'

export default {
  name: 'LayoutDefault',
  data() {
    // console.log(this.$store.state.core.theme)
    // console.log(this.theme === 'dark')
    return {
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
          items: [
            {
              icon: 'mdi-pencil-lock',
              title: 'Generated File',
              to: '/reporting'
            },
            {
              icon: 'mdi-pencil',
              title: 'Report Viewer',
              to: '/viewer'
            }
          ]
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  computed: {
    ...mapState({
      theme: (state: any) => state.core.theme
    })
  }
}
</script>

<!-- Styles -->
<style lang="scss" scoped>
@import '~/assets/scss/theme';
</style>
