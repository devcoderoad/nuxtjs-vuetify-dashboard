<template>
  <h1 class="title-page text-center">{{ title }}</h1>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      default: 'Page Title'
    },
    subTitle: {
      type: String,
      default: 'Page Sub Title'
    },
    type: {
      type: String,
      default: null
    }
  }
}
</script>
