<template>
  <v-footer
    app
    absolute
    :dark="isDark"
    class="mx-auto text-center mt-6"
    :style="{
      bottom: '-20px'
    }"
  >
    <div class="d-flex align-center text--secondary">
      <v-img :alt="title" src="/logo.png" width="58" contain class="mr-1" />
      &copy;
      {{ new Date().getFullYear() }}
      All rights reserved - {{ company }}.
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
