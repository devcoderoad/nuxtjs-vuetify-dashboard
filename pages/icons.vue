<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <PageHeader title="Icons" />
        <v-container>
          <v-row justify="space-between">
            <div
              v-for="icon in icons.filter((item) => item.author === 'Google')"
              :key="icon.name"
            >
              <v-btn color="primary" class="mb-3 mr-3"
                ><v-icon left> {{ `mdi-${icon.name}` }} </v-icon>
                {{ `mdi-${icon.name}` }}</v-btn
              >
            </div>
          </v-row>
        </v-container>
        <blockquote class="blockquote text-center">
          <div><img src="/v.png" alt="Vuetify.js" class="mb-5 mx-auto" /></div>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageHeader from '@/components/Header/PageHeader.vue'

export default {
  name: 'IconsPage',
  components: {
    PageHeader
  },
  data() {
    return { icons: [] }
  },
  async fetch() {
    this.icons = await fetch(
      'https://raw.githubusercontent.com/fgnass/mdi-json/master/icons.json'
    ).then((res) => res.json())
  },
  // head({ icons }) {
  head() {
    // icons.forEach((item) => {
    //   console.log(item)
    // })
    // const googleIcons = icons.filter((item) => item.author === 'Google')
    // console.log(googleIcons)
  }
  // fetchOnServer: false
  // created() {
  //   const icons =
  //     'https://raw.githubusercontent.com/fgnass/mdi-json/master/icons.json'
  // }
  // created() {
  //   // const icons =
  //   //   'https://raw.githubusercontent.com/fgnass/mdi-json/master/icons.json'

  //       this.icons = await fetch(
  //     'https://raw.githubusercontent.com/fgnass/mdi-json/master/icons.json'
  //   ).then((res) => res.json())
  // }
}
</script>
