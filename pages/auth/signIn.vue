<template>
  <div><FormSignIn :email="email" :password="password" /></div>
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
