<template>
  <div>
    <FormSignUp :email="email" :password="password" />
    <span
      >&copy; {{ new Date().getFullYear() }} {{ company }}. Dark Mode:
      <code>{{ getIsDarkMode }}</code></span
    >
  </div>
</template>

<script lang="ts">
export default {
  layout: 'blank',
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
