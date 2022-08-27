<template>
  <v-row>
    <v-col>
      <h1 class="title-page text-center">Headings Page</h1>
      <v-container fluid>
        <v-row justify="center" class="py-6">
          <v-expansion-panels popout>
            <v-expansion-panel
              v-for="(message, i) in messages"
              :key="i"
              hide-actions
            >
              <v-expansion-panel-header>
                <v-row align="center" class="spacer" no-gutters>
                  <v-col cols="4" sm="2" md="1">
                    <v-avatar size="36px">
                      <img
                        v-if="message.avatar"
                        alt="Avatar"
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                      />
                      <v-icon
                        v-else
                        :color="message.color"
                        v-text="message.icon"
                      ></v-icon>
                    </v-avatar>
                  </v-col>

                  <v-col class="hidden-xs-only" sm="5" md="3">
                    <strong v-html="message.name"></strong>
                    <span v-if="message.total" class="grey--text">
                      &nbsp;({{ message.total }})
                    </span>
                  </v-col>

                  <v-col class="text-no-wrap" cols="5" sm="3">
                    <v-chip
                      v-if="message.new"
                      :color="`${message.color} lighten-4`"
                      class="ml-0 mr-2 black--text"
                      label
                      small
                    >
                      {{ message.new }} new
                    </v-chip>
                    <strong v-html="message.title"></strong>
                  </v-col>

                  <v-col
                    v-if="message.excerpt"
                    class="grey--text text-truncate hidden-sm-and-down"
                  >
                    &mdash;
                    {{ message.excerpt }}
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text v-text="lorem"></v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row class="py-6">
          <v-col>
            <v-rating
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-half-full"
              hover
              length="5"
              size="32"
              :value="3"
            ></v-rating>
            <v-rating
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-half-full"
              hover
              length="5"
              size="32"
              :value="4"
              color="success"
            ></v-rating>
            <v-rating
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-half-full"
              hover
              length="5"
              size="32"
              :value="3"
              color="info"
            ></v-rating>
            <v-rating
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-half-full"
              hover
              length="5"
              size="32"
              :value="1"
              color="secondary"
            ></v-rating>
            <v-rating
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-half-full"
              hover
              length="5"
              size="32"
              :value="3"
              color="warning"
            ></v-rating>
            <v-rating
              empty-icon="mdi-star-outline"
              full-icon="mdi-star"
              half-icon="mdi-star-half-full"
              hover
              length="5"
              size="32"
              :value="5"
              color="error"
            ></v-rating>
          </v-col>
          <v-col>
            <v-alert type="success" align="left">Alert Success</v-alert>
            <v-alert
              type="info"
              align="left"
              close-text="Close Alert"
              dismissible
              >Alert Info</v-alert
            >
            <v-alert type="warning" align="left">Alert Warning</v-alert>
            <v-alert
              type="error"
              align="left"
              close-text="Close Alert"
              dismissible
              >Alert Error</v-alert
            >
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid>
        <v-row>
          <v-col cols="12" lg="3">
            <v-card class="mx-auto" max-width="450" :dark="light">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                :aspect-ratio="16 / 9"
              >
              </v-img>
              <v-card-title>
                <h3 class="text-h6 font-weight-thin mb-2">Welcome Home</h3>
                <p class="subtitle-1 font-weight-thin grey--text">
                  Monday, 12:30 PM, Mostly Sunny
                </p>
              </v-card-title>
              <v-row class="px-4 grey--text" align="center">
                <v-avatar size="24" class="mr-4 ml-2">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
                    contain
                  ></v-img>
                </v-avatar>
                <span>81° / 62°</span>
              </v-row>
              <v-divider class="mt-6 mx-4"></v-divider>
              <v-card-text>
                <v-chip small :dark="light" class="mr-2" @click="lights">
                  <v-icon left small> mdi-brightness-5 </v-icon>
                  Lights
                </v-chip>
                <v-chip small :dark="light" class="mr-2" @click="alarm">
                  <v-icon left small> mdi-alarm-check </v-icon>
                  Alarm
                </v-chip>
                <v-chip small :dark="light" @click="blinds">
                  <v-icon left small> mdi-blinds </v-icon>
                  Blinds
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="3">
            <v-card class="mx-auto" max-width="450" :dark="light">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                :aspect-ratio="16 / 9"
              >
              </v-img>
              <v-card-title>
                <h3 class="text-h6 font-weight-thin mb-2">Welcome Home</h3>
                <p class="subtitle-1 font-weight-thin grey--text">
                  Monday, 12:30 PM, Mostly Sunny
                </p>
              </v-card-title>
              <v-row class="px-4 grey--text" align="center">
                <v-avatar size="24" class="mr-4 ml-2">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
                    contain
                  ></v-img>
                </v-avatar>
                <span>81° / 62°</span>
              </v-row>
              <v-divider class="mt-6 mx-4"></v-divider>
              <v-card-text>
                <v-chip small :dark="light" class="mr-2" @click="lights">
                  <v-icon left small> mdi-brightness-5 </v-icon>
                  Lights
                </v-chip>
                <v-chip small :dark="light" class="mr-2" @click="alarm">
                  <v-icon left small> mdi-alarm-check </v-icon>
                  Alarm
                </v-chip>
                <v-chip small :dark="light" @click="blinds">
                  <v-icon left small> mdi-blinds </v-icon>
                  Blinds
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="3">
            <v-card class="mx-auto" max-width="450" :dark="light">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                :aspect-ratio="16 / 9"
              >
              </v-img>
              <v-card-title>
                <h3 class="text-h6 font-weight-thin mb-2">Welcome Home</h3>
                <p class="subtitle-1 font-weight-thin grey--text">
                  Monday, 12:30 PM, Mostly Sunny
                </p>
              </v-card-title>
              <v-row class="px-4 grey--text" align="center">
                <v-avatar size="24" class="mr-4 ml-2">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
                    contain
                  ></v-img>
                </v-avatar>
                <span>81° / 62°</span>
              </v-row>
              <v-divider class="mt-6 mx-4"></v-divider>
              <v-card-text>
                <v-chip small :dark="light" class="mr-2" @click="lights">
                  <v-icon left small> mdi-brightness-5 </v-icon>
                  Lights
                </v-chip>
                <v-chip small :dark="light" class="mr-2" @click="alarm">
                  <v-icon left small> mdi-alarm-check </v-icon>
                  Alarm
                </v-chip>
                <v-chip small :dark="light" @click="blinds">
                  <v-icon left small> mdi-blinds </v-icon>
                  Blinds
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" lg="3">
            <v-card class="mx-auto" max-width="450" :dark="light">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                :aspect-ratio="16 / 9"
              >
              </v-img>
              <v-card-title>
                <h3 class="text-h6 font-weight-thin mb-2">Welcome Home</h3>
                <p class="subtitle-1 font-weight-thin grey--text">
                  Monday, 12:30 PM, Mostly Sunny
                </p>
              </v-card-title>
              <v-row class="px-4 grey--text" align="center">
                <v-avatar size="24" class="mr-4 ml-2">
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
                    contain
                  ></v-img>
                </v-avatar>
                <span>81° / 62°</span>
              </v-row>
              <v-divider class="mt-6 mx-4"></v-divider>
              <v-card-text>
                <v-chip small :dark="light" class="mr-2" @click="lights">
                  <v-icon left small> mdi-brightness-5 </v-icon>
                  Lights
                </v-chip>
                <v-chip small :dark="light" class="mr-2" @click="alarm">
                  <v-icon left small> mdi-alarm-check </v-icon>
                  Alarm
                </v-chip>
                <v-chip small :dark="light" @click="blinds">
                  <v-icon left small> mdi-blinds </v-icon>
                  Blinds
                </v-chip>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid class="text-center">
        <img src="/v.png" alt="Vuetify.js" class="mb-5" />
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HeadingPage',
  data: () => ({
    messages: [
      {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Vuetify!',
        excerpt: 'Thank you for joining our community...'
      },
      {
        color: 'red',
        icon: 'mdi-account-multiple',
        name: 'Social',
        new: 1,
        total: 3,
        title: 'Twitter'
      },
      {
        color: 'teal',
        icon: 'mdi-tag',
        name: 'Promos',
        new: 2,
        total: 4,
        title: 'Shop your way',
        exceprt: 'New deals available, Join Today'
      }
    ],
    lorem:
      'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
    light: false
  }),
  methods: {
    lights() {
      this.light = !this.light
    },
    alarm() {
      return ''
    },
    blinds() {
      return ''
    }
  }
}
</script>
