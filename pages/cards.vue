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
              <v-card-text class="pt-0">
                <v-row no-gutters align-content="center" align="center">
                  <v-col sm="3"
                    ><v-btn
                      class="text-right"
                      color="grey"
                      outlined
                      small
                      rounded
                      >Buy</v-btn
                    ></v-col
                  >
                  <v-col sm="9" align="right">
                    Price: ${{ card.price }} - Views: {{ card.views }}</v-col
                  >
                </v-row>
              </v-card-text>
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
                    ><v-icon small>mdi-tag-outline</v-icon> {{ card.category }}
                    {{ ' ' }}<v-icon small>mdi-cards-outline</v-icon> Theme:
                    {{ card.color }}</v-card-subtitle
                  >
                </v-col>
                <v-col>
                  <v-card-subtitle align="right">
                    Views: {{ card.views }}</v-card-subtitle
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-row v-if="cards && cards.length > 0">
            <!-- Cards New -->
            <v-col
              v-for="card in cards"
              :key="card.title"
              cols="12"
              sm="6"
              md="4"
            >
              <v-card
                light
                :style="{
                  backgroundImage: `url(${card.image})`,
                  backgroundRepeat: 'no-repeat',
                  minHeight: '480px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundBlendMode: 'hard-light',
                  backgroundColor: 'rgb(255 252 241 / 85%)',
                  paddingTop: '1rem',
                  paddingBottom: '2rem',
                  height: '100%'
                }"
              >
                <div
                  :style="{
                    borderRadius: '0px',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    margin: '2rem 2rem',
                    padding: '1rem',
                    border: '2px solid #f2f2f2'
                    // boxShadow:
                    // '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);'
                  }"
                  class="gradient-b-bottom"
                >
                  <v-card-title
                    tag="h2"
                    class="text-h2 font-weight-thin"
                    :style="{ lineHeight: '1', wordBreak: 'break-word' }"
                    >{{ card.title }}</v-card-title
                  >
                  <v-card-subtitle tag="h3" class="text-subtitle-1"
                    >{{ card.subtitle }}
                  </v-card-subtitle>
                  <v-card-text v-html="card.content" />
                  <v-card-text>
                    <v-chip small outlined>
                      <v-icon small dark class="mr-1"
                        >mdi-account-outline</v-icon
                      >
                      {{ card.postedBy }}</v-chip
                    >
                  </v-card-text>
                </div>
              </v-card>
            </v-col>
          </v-row>
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
  data() {
    return {
      cards: [
        {
          title: 'How Is Your Day Today?',
          subtitle: 'Excell the daily activities',
          postedBy: 'Render Cloud',
          image:
            'https://images.unsplash.com/photo-1604762525953-2c80447cc4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          content: `<p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail.
              </p>
              <p>
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration. Collaboratively administrate empowered markets via
                plug-and-play networks.
              </p>
              <p>
                Dynamically procrastinate B2C users after installed base
                benefits. Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </p>`
        },
        {
          title: 'Waiting for something to discover',
          subtitle: 'Creativity with no boundaries',
          postedBy: 'Render Cloud',
          image:
            'https://images.unsplash.com/photo-1605351720698-6cfec9eb9b5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          content: `<p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail.
              </p>
              <p>
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration. Collaboratively administrate empowered markets via
                plug-and-play networks.
              </p>
              <p>
                Dynamically procrastinate B2C users after installed base
                benefits. Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </p>`
        },
        {
          title: 'Bend it like westbrook',
          subtitle: 'Agile and move forward',
          postedBy: 'Render Cloud',
          image:
            'https://images.unsplash.com/photo-1604762525950-13c07ecdab8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          content: `<p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail.
              </p>
              <p>
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration. Collaboratively administrate empowered markets via
                plug-and-play networks.
              </p>
              <p>
                Dynamically procrastinate B2C users after installed base
                benefits. Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </p>`
        },
        {
          title: 'Mindfull thoughts of brekafast',
          subtitle: 'A morning routine for the thinker',
          postedBy: 'Render Cloud',
          image:
            'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          content: `<p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail.
              </p>
              <p>
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration. Collaboratively administrate empowered markets via
                plug-and-play networks.
              </p>
              <p>
                Dynamically procrastinate B2C users after installed base
                benefits. Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </p>`
        },
        {
          title: 'Create sometime for a daily activities',
          subtitle: 'Enjoy the productive times',
          postedBy: 'Render Cloud',
          image:
            'https://images.unsplash.com/photo-1558100966-17c28d5bee4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          content: `<p>
                Podcasting operational change management inside of workflows to
                establish a framework. Taking seamless key performance
                indicators offline to maximise the long tail.
              </p>
              <p>
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration. Collaboratively administrate empowered markets via
                plug-and-play networks.
              </p>
              <p>
                Dynamically procrastinate B2C users after installed base
                benefits. Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </p>`
        },
        {
          title: 'Leverage agile frameworks to provide',
          subtitle: 'Iterative approaches to corporate strategy',
          postedBy: 'Render Cloud',
          image:
            'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
          content: `<p>
                  Foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>
              <p>
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration. Collaboratively administrate empowered markets via
                plug-and-play networks.
              </p>
              <p>
                Dynamically procrastinate B2C users after installed base
                benefits. Dramatically visualize customer directed convergence
                without revolutionary ROI.
              </p>`
        }
      ]
    }
  },
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
