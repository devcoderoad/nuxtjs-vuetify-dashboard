<script>
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

<template>
  <div>
    <FormForgotPassword :email="email" :password="password" />
  </div>
</template>
