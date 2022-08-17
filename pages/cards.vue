<template>
  <v-row>
    <v-col class="text-center">
      <h1 class="title-page">Cards</h1>
      <v-row v-if="buildingCards && buildingCards.length" class="text-left">
        <v-col v-for="card in buildingCards" :key="card.id" md="6">
          <v-card height="100%">
            <v-img
              class="white--text align-end"
              height="300px"
              :src="card.imageUrl"
            >
              <v-card-title tag="h2" class="gradient-b-bottom">{{
                card.name
              }}</v-card-title>
            </v-img>
            <v-row no-gutters>
              <v-col>
                <v-card-subtitle
                  >{{ card.category }} @theme: {{ card.color }}</v-card-subtitle
                >
              </v-col>
              <v-col>
                <v-card-subtitle align="right"
                  >Views: {{ card.views }}</v-card-subtitle
                >
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
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
        <v-col md="12" light>
          <v-card light>
            <v-card-title tag="h2">Card Full</v-card-title>
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

<script>
import { mapState } from 'vuex'

export default {
  name: 'CardsPage',
  async fetch() {
    const {
      $store: { dispatch }
    } = this
    await dispatch('mock/actionGetBuildings')
  },
  head() {
    return {
      title: 'Cards - Nuxtify Admin Dashboard Template by dykraf.com',
      description: 'A Collection of Cards in Nuxtify Admin Template Dashboard'
    }
  },
  computed: {
    ...mapState({ buildingCards: (state) => state.mock.buildings })
  }
}
</script>
