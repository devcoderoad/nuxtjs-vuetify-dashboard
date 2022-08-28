<template>
  <v-app
    id="blank"
    :dark="theme === 'dark' ? true : false"
    style="
      background-image: url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=1152&q=80');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: scroll;
    "
  >
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LayoutBlank',
  data() {
    return {
      title: 'Nuxtify'
    }
  },
  computed: {
    ...mapState({
      theme: (state) => state.core.theme.isDark
    })
  }
}
</script>

<!-- Styles -->
<!-- <style lang="scss" scoped>
@import '~/assets/scss/theme';
</style> -->
