<template>
  <v-footer :dark="isDark" class="mx-auto text-center mt-6">
    <div class="text-center">
      <img src="/nuxt.png" height="12" /> {{ title }} &copy;
      {{ new Date().getFullYear() }}
      All rights reserved - {{ company }}.
      <!-- Dark Mode: <code>{{ isDark }}</code> -->
    </div>
  </v-footer>
</template>
<script>
import { mapState } from 'vuex'
import global from '~/constants/global'

export default {
  name: 'FooterComponent',
  data() {
    return { title: 'Nuxtify', company: global.company }
  },
  computed: {
    ...mapState({ isDark: (state) => state.core.theme.isDark })
  }
}
</script>
