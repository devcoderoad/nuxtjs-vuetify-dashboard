<template>
  <div>
    <FormSignUp :email="email" :password="password" />
    <span
      ><img src="/nuxt.png" height="12" /> Nuxtify &copy;
      {{ new Date().getFullYear() }} {{ company }}. Dark Mode:
      <code>{{ isDark }}</code></span
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'blank',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      isDark: (state) => state.core.theme.isDark
    })
  }
}
</script>
