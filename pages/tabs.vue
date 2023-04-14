<template>
  <v-row>
    <v-col class="text-center">
      <PageHeader title="Tabs" />
      <v-col class="text-left">
        <h2 class="title-page-sub">Tabs Default</h2>
        <v-card>
          <v-tabs v-model="tab" align-tabs="title">
            <v-tab v-for="item in items" :key="item" :value="item">
              {{ item }}
            </v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item v-for="item in items" :key="item" :value="item">
              <v-card flat>
                <v-card-text><div v-text="text" /></v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
        <v-divider class="my-6" />
        <v-card>
          <v-tabs
            v-model="tab"
            color="deep-purple-accent-4"
            align-tabs="center"
          >
            <v-tab :value="1">Landscape</v-tab>
            <v-tab :value="2">City</v-tab>
            <v-tab :value="3">Abstract</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item v-for="n in 3" :key="n" :value="n">
              <v-container fluid>
                <v-row>
                  <v-col v-for="i in 6" :key="i" cols="12" md="4">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${
                        i * n * 5 + 10
                      }`"
                      :lazy-src="`https://picsum.photos/10/6?image=${
                        i * n * 5 + 10
                      }`"
                      aspect-ratio="1"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>
          </v-window>
        </v-card>
        <v-divider class="my-6" />
        <div class="d-flex flex-row">
          <v-tabs v-model="tab" direction="vertical" color="primary">
            <v-tab value="option-1">
              <v-icon start> mdi-account </v-icon>
              Option 1
            </v-tab>
            <v-tab value="option-2">
              <v-icon start> mdi-lock </v-icon>
              Option 2
            </v-tab>
            <v-tab value="option-3">
              <v-icon start> mdi-access-point </v-icon>
              Option 3
            </v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="option-1">
              <v-card flat>
                <v-card-text>
                  <p>
                    Sed aliquam ultrices mauris. Donec posuere vulputate arcu.
                    Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                  </p>

                  <p>
                    Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel,
                    lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis
                    non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse
                    non nisl sit amet velit hendrerit rutrum.
                  </p>

                  <p class="mb-0">
                    Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu.
                    Pellentesque libero tortor, tincidunt et, tincidunt eget,
                    semper nec, quam. Phasellus blandit leo ut odio.
                  </p>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="option-2">
              <v-card flat>
                <v-card-text>
                  <p>
                    Morbi nec metus. Suspendisse faucibus, nunc et pellentesque
                    egestas, lacus ante convallis tellus, vitae iaculis lacus
                    elit id tortor. Sed mollis, eros et ultrices tempus, mauris
                    ipsum aliquam libero, non adipiscing dolor urna a orci.
                    Curabitur ligula sapien, tincidunt non, euismod vitae,
                    posuere imperdiet, leo. Nunc sed turpis.
                  </p>

                  <p>
                    Suspendisse feugiat. Suspendisse faucibus, nunc et
                    pellentesque egestas, lacus ante convallis tellus, vitae
                    iaculis lacus elit id tortor. Proin viverra, ligula sit amet
                    ultrices semper, ligula arcu tristique sapien, a accumsan
                    nisi mauris ac eros. In hac habitasse platea dictumst. Fusce
                    ac felis sit amet ligula pharetra condimentum.
                  </p>

                  <p>
                    Sed consequat, leo eget bibendum sodales, augue velit cursus
                    nunc, quis gravida magna mi a libero. Nam commodo suscipit
                    quam. In consectetuer turpis ut velit. Sed cursus turpis
                    vitae tortor. Aliquam eu nunc.
                  </p>

                  <p>
                    Etiam ut purus mattis mauris sodales aliquam. Ut varius
                    tincidunt libero. Aenean viverra rhoncus pede. Duis leo.
                    Fusce fermentum odio nec arcu.
                  </p>

                  <p class="mb-0">
                    Donec venenatis vulputate lorem. Aenean viverra rhoncus
                    pede. In dui magna, posuere eget, vestibulum et, tempor
                    auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim
                    turpis, dictum sed, iaculis a, condimentum nec, nisi.
                  </p>
                </v-card-text>
              </v-card>
            </v-window-item>
            <v-window-item value="option-3">
              <v-card flat>
                <v-card-text>
                  <p>
                    Fusce a quam. Phasellus nec sem in justo pellentesque
                    facilisis. Nam eget dui. Proin viverra, ligula sit amet
                    ultrices semper, ligula arcu tristique sapien, a accumsan
                    nisi mauris ac eros. In dui magna, posuere eget, vestibulum
                    et, tempor auctor, justo.
                  </p>

                  <p class="mb-0">
                    Cras sagittis. Phasellus nec sem in justo pellentesque
                    facilisis. Proin sapien ipsum, porta a, auctor quis, euismod
                    ut, mi. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nam at tortor in tellus interdum
                    sagittis.
                  </p>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </div>
      </v-col>
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
import PageHeader from '@/components/Header/PageHeader.vue'

export default {
  name: 'TabsPage',
  components: {
    PageHeader
  },
  data() {
    return {
      // tab: null,
      items: ['web', 'shopping', 'videos', 'images', 'news'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      search: '',
      headers: [
        {
          text: 'Dessert (100g serving)',
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
