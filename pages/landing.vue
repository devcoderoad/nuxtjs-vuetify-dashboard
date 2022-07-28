<template>
  <v-row>
    <v-col class="text-center">
      <h1 class="title-page">Landing Page</h1>
      <v-row class="text-left">
        <v-col md="6" light>
          <v-card light>
            <v-card-title tag="h2">Card Half</v-card-title>
            <v-card-subtitle>Data examples</v-card-subtitle>
            <v-card-text>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
                eveniet est? Mollitia labore deserunt iusto eius explicabo
                laborum autem vel consequatur libero animi alias suscipit
                provident qui excepturi quaerat possimus atque, dignissimos aut
                obcaecati necessitatibus iure delectus molestiae! Dolorum,
                doloremque? Sequi, porro. Excepturi consequuntur iure corporis
                repudiandae! Mollitia non maxime architecto explicabo nulla
                laborum dolores?
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="6" light>
          <v-card light>
            <v-card-title tag="h2">Card Half</v-card-title>
            <v-card-subtitle>Data examples</v-card-subtitle>
            <v-card-text>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
                eveniet est? Mollitia labore deserunt iusto eius explicabo
                laborum autem vel consequatur libero animi alias suscipit
                provident qui excepturi quaerat possimus atque, dignissimos aut
                obcaecati necessitatibus iure delectus molestiae! Dolorum,
                doloremque? Sequi, porro. Excepturi consequuntur iure corporis
                repudiandae! Mollitia non maxime architecto explicabo nulla
                laborum dolores?
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LandingPage',
  setup() {}
})
</script>
