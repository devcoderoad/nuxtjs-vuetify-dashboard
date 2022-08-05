<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="12">
      <h1 class="title-page">Hi, Welcome to Nuxtify</h1>
      <v-row>
        <v-col cols="12" md="3">
          <v-card>
            <v-container fluid>
              <h3>Users Summary</h3>
              <v-row>
                <v-col>
                  <h4 class="grey--text text-h1 font-weight-bold">5230</h4>
                </v-col>
                <v-col align-self="center" align="center">
                  <v-icon size="60" color="green"
                    >mdi-account-box-outline</v-icon
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" md="3"
          ><v-card>
            <v-container fluid>
              <h3>Sales Summary</h3>
              <v-row>
                <v-col>
                  <h4 class="grey--text text-h1 font-weight-bold">6424</h4>
                </v-col>
                <v-col align-self="center" align="center">
                  <v-icon size="60" color="warning">mdi-cart-plus</v-icon>
                </v-col>
              </v-row>
            </v-container>
          </v-card></v-col
        >
        <v-col cols="12" md="3"
          ><v-card>
            <v-container fluid>
              <h3>Stock Summary</h3>
              <v-row>
                <v-col>
                  <h4 class="grey--text text-h1 font-weight-bold">39202</h4>
                </v-col>
                <v-col align-self="center" align="center">
                  <v-icon size="60" color="red">mdi-chart-areaspline</v-icon>
                </v-col>
              </v-row>
            </v-container>
          </v-card></v-col
        >
        <v-col cols="12" md="3"
          ><v-card>
            <v-container fluid>
              <h3>Views Summary</h3>
              <v-row>
                <v-col>
                  <h4 class="grey--text text-h1 font-weight-bold">4124</h4>
                </v-col>
                <v-col align-self="center" align="center">
                  <v-icon size="60" color="orange"
                    >mdi-gesture-double-tap</v-icon
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" md="8">
          <v-card>
            <v-container fluid>
              <h3 class="title-page">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                nihil corporis rem iste! Doloribus magni doloremque inventore
                natus consectetur corporis debitis nemo numquam explicabo esse
                iusto maxime, perferendis tenetur accusantium. inventore natus
                consectetur corporis debitis nemo numquam explicabo esse iusto
                maxime, perferendis tenetur accusantium. Lipsu inventore natus
                consectetur corporis debitis nemo numquam explicabo esse iusto
                maxime, perferendis tenetur accusantium.
              </div>
              <v-calendar class="my-6"></v-calendar>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-container fluid>
              <h3 class="title-page">Lorem ipsum dolor sit amet consectetur</h3>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                nihil corporis rem iste! Doloribus magni doloremque inventore
                natus consectetur corporis debitis.
              </div>
              <v-container fluid>
                <v-row dense no-gutters>
                  <v-col cols="2" align-self="center" align="center">
                    <v-avatar color="primary">
                      <span class="white--text font-weight-bold">AS</span>
                    </v-avatar>
                  </v-col>
                  <v-col cols="10">
                    <blockquote class="blockquote grey--text body-1">
                      Fugit nihil corporis rem iste! Doloribus magni doloremque
                      inventore natus consectetur corporis debitis
                    </blockquote>
                  </v-col>
                </v-row>
                <v-row dense no-gutters>
                  <v-col cols="9">
                    <blockquote class="blockquote grey--text body-1">
                      Fugit nihil corporis rem iste! Doloribus magni doloremque
                      inventore natus nemo numquam explicabo
                    </blockquote>
                  </v-col>
                  <v-col cols="3" align-self="center" align="center">
                    <v-avatar color="green">
                      <span class="white--text font-weight-bold">CV</span>
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row dense no-gutters>
                  <v-col cols="2" align-self="center" align="center">
                    <v-avatar color="info">
                      <span class="white--text font-weight-bold">NM</span>
                    </v-avatar>
                  </v-col>
                  <v-col cols="10">
                    <blockquote class="blockquote grey--text body-1">
                      Fugit nihil corporis rem iste! Doloribus natus consectetur
                      corporis debitis nemo numquam explicabo
                    </blockquote>
                  </v-col>
                </v-row>
              </v-container>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
