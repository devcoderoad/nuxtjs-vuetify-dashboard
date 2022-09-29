<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1 class="title-page text-center">Cards</h1>
        <v-row v-if="foodCards && foodCards.length" class="text-left">
          <v-col v-for="card in foodCards" :key="card.id" md="3" light>
            <v-card light>
              <v-card-title tag="h2">{{ card.name }}</v-card-title>
              <v-card-subtitle>
                <v-icon small>mdi-tag-outline</v-icon>
                {{ card.category }}
              </v-card-subtitle>
              <v-card-text>
                <v-img
                  class="white--text align-end"
                  height="300px"
                  :src="card.imageUrl"
                >
                  <v-card-title tag="h2" class="gradient-b-bottom">{{
                    card.name
                  }}</v-card-title>
                </v-img>
              </v-card-text>
              <v-card-subtitle class="pt-0" align="right"
                >Price: ${{ card.price }} - Views:
                {{ card.views }}</v-card-subtitle
              >
            </v-card>
          </v-col>
        </v-row>
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
                    >{{ card.category }} @theme:
                    {{ card.color }}</v-card-subtitle
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
  </v-container>
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
    await dispatch('mock/actionGetFoods')
  },
  head() {
    return {
      title: 'Cards - Nuxtify Admin Dashboard Template by dykraf.com',
      description: 'A Collection of Cards in Nuxtify Admin Template Dashboard'
    }
  },
  computed: {
    ...mapState({ buildingCards: (state) => state.mock.buildings }),
    ...mapState({ foodCards: (state) => state.mock.foods })
  }
}
</script>
