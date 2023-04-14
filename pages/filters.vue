<template>
  <v-container fluid>
    <v-row>
      <v-col class="text-center">
        <PageHeader title="Filters" />
        <v-row class="text-left">
          <v-col md="12" light>
            <v-card light>
              <v-card-title tag="h2">Filter Full</v-card-title>
              <v-card-subtitle>Data examples</v-card-subtitle>
              <v-card-text>
                <div>
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                    light
                  ></v-data-table>
                  <v-col>
                    Sequi, porro. Excepturi consequuntur iure corporis
                    repudiandae! Mollitia non maxime architecto explicabo nulla
                    laborum dolores?
                  </v-col>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="6" light>
            <v-card light>
              <v-card-title tag="h2">Filter Half</v-card-title>
              <v-card-subtitle>Data examples</v-card-subtitle>
              <v-card-text>
                <div>
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                    light
                  ></v-data-table
                  ><v-col
                    >Excepturi consequuntur iure corporis repudiandae! Mollitia
                    non maxime architecto explicabo nulla laborum
                    dolores?</v-col
                  >
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="6" light>
            <v-card light>
              <v-card-title tag="h2">Filter Half</v-card-title>
              <v-card-subtitle>Data examples</v-card-subtitle>
              <v-card-text>
                <div>
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                    light
                  ></v-data-table>
                  <v-col
                    >Sequi, porro. Excepturi consequuntur iure corporis
                    repudiandae! Mollitia non maxime architecto explicabo nulla
                    laborum dolores?
                  </v-col>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="12" light>
            <v-card light>
              <v-card-title tag="h2">Filter Full</v-card-title>
              <v-card-subtitle>Data examples</v-card-subtitle>
              <v-card-text>
                <div>
                  <v-data-table
                    :headers="headers"
                    :items="desserts"
                    :items-per-page="5"
                    class="elevation-1"
                    light
                  ></v-data-table>
                  <div class="my-4">
                    <v-row
                      ><v-col
                        >Sequi, porro. Excepturi consequuntur iure corporis
                        repudiandae! Mollitia non maxime architecto explicabo
                        nulla laborum dolores?</v-col
                      ><v-col
                        >Sequi, porro. Excepturi consequuntur iure corporis
                        repudiandae! Mollitia non maxime architecto explicabo
                        nulla laborum dolores?</v-col
                      ></v-row
                    >
                  </div>
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
  </v-container>
</template>

<script>
import PageHeader from '@/components/Header/PageHeader.vue'

export default {
  name: 'FiltersPage',
  components: {
    PageHeader
  },
  data() {
    return {
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/theme';
</style>
