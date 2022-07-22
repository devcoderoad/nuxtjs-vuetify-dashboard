<template>
  <v-app :dark="theme === 'dark' ? true : false">
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { mapState } from 'vuex'

export default {
  name: 'LayoutBlank',
  data() {
    return {
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
