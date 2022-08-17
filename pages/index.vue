<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <h1 class="title-page">Hi, Welcome to Nuxtify</h1>
        <v-row>
          <v-col cols="6" sm="3">
            <v-card height="100%">
              <v-container fluid>
                <h3>Users Summary</h3>
                <v-row height="100%">
                  <v-col>
                    <h4 class="grey--text text-h4 text-lg-h2 font-weight-bold">
                      5230
                    </h4>
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
          <v-col cols="6" sm="3"
            ><v-card height="100%">
              <v-container fluid>
                <h3>Sales Summary</h3>
                <v-row height="100%">
                  <v-col>
                    <h4 class="grey--text text-h4 text-lg-h2 font-weight-bold">
                      6424
                    </h4>
                  </v-col>
                  <v-col align-self="center" align="center">
                    <v-icon size="60" color="warning">mdi-cart-plus</v-icon>
                  </v-col>
                </v-row>
              </v-container>
            </v-card></v-col
          >
          <v-col cols="6" sm="3"
            ><v-card height="100%">
              <v-container fluid>
                <h3>Stock Summary</h3>
                <v-row height="100%">
                  <v-col>
                    <h4 class="grey--text text-h4 text-lg-h2 font-weight-bold">
                      39202
                    </h4>
                  </v-col>
                  <v-col align-self="center" align="center">
                    <v-icon size="60" color="red">mdi-chart-areaspline</v-icon>
                  </v-col>
                </v-row>
              </v-container>
            </v-card></v-col
          >
          <v-col cols="6" sm="3"
            ><v-card height="100%">
              <v-container fluid>
                <h3>Views Summary</h3>
                <v-row height="100%">
                  <v-col>
                    <h4 class="grey--text text-h4 text-lg-h2 font-weight-bold">
                      4124
                    </h4>
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
            <v-card height="100%">
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
            <v-card height="100%">
              <v-container fluid>
                <h3 class="title-page">
                  Lorem ipsum dolor sit amet consectetur
                </h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  nihil corporis rem iste! Doloribus magni doloremque inventore
                  natus consectetur corporis debitis.
                </div>
                <v-container fluid>
                  <v-row no-gutters>
                    <v-col cols="2" align-self="center" align="center">
                      <v-avatar color="primary">
                        <span class="white--text font-weight-bold">AS</span>
                      </v-avatar>
                    </v-col>
                    <v-col cols="10">
                      <blockquote class="blockquote grey--text body-1">
                        Fugit nihil corporis rem iste! Doloribus magni
                        doloremque inventore natus consectetur corporis debitis
                      </blockquote>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="9">
                      <blockquote class="blockquote grey--text body-1">
                        Fugit nihil corporis rem iste! Doloribus magni
                        doloremque inventore natus nemo numquam explicabo
                      </blockquote>
                    </v-col>
                    <v-col cols="3" align-self="center" align="center">
                      <v-avatar color="green">
                        <span class="white--text font-weight-bold">CV</span>
                      </v-avatar>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="2" align-self="center" align="center">
                      <v-avatar color="info">
                        <span class="white--text font-weight-bold">NM</span>
                      </v-avatar>
                    </v-col>
                    <v-col cols="10">
                      <blockquote class="blockquote grey--text body-1">
                        Fugit nihil corporis rem iste! Doloribus natus
                        consectetur corporis debitis nemo numquam explicabo
                      </blockquote>
                    </v-col>
                  </v-row>
                </v-container>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" lg="4">
                <v-card height="100%">
                  <v-card-title>Sales by brand</v-card-title>
                  <v-card-text>
                    <client-only placeholder="Loading...">
                      <DoughnutChart
                        :chart-data="doughChartData"
                        :chart-options="doughChartOptions"
                        :height="430"
                      />
                    </client-only>
                    <v-row>
                      <v-col cols="9">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. At animi magni modi fuga. Laborum quos dignissimos
                        velit nostrum voluptate facere error labore?</v-col
                      >
                      <v-col cols="3">
                        <v-btn type="submit" color="primary" small tile
                          >See all</v-btn
                        ></v-col
                      ></v-row
                    >
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" lg="8">
                <v-card height="100%" light>
                  <v-card-title>Person sales by month</v-card-title>
                  <v-card-text>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Repellendus, nisi inventore, aperiam sapiente quod
                      dolores, assumenda voluptatum possimus nam fuga ducimus
                      temporibus.
                    </p>
                    <client-only placeholder="Loading...">
                      <LineChart
                        :chart-options="lineChartOptions"
                        :chart-data="lineChartData"
                        :chart-id="`chartId`"
                        :width="300"
                        :height="384"
                        :styles="{
                          margin: '1rem auto',
                          backgroundColor: 'rgba(255,255,255, .85)',
                          padding: '.75rem'
                        }"
                      />
                    </client-only>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatum suscipit totam reiciendis molestiae dolorem
                      facere eaque, esse adipisci, vero, doloribus deleniti
                      omnis.
                    </p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      doughChartData: {
        labels: ['NuVue', 'VueJit', 'IftShi', 'KoinVi', 'MegsWear', 'Millgh'],
        datasets: [
          {
            label: 'Visualization',
            data: [72, 131, 12, 3, 4, 55],
            backgroundColor: [
              'rgba(20, 255, 0, 0.85)',
              'rgba(200, 5, 0, 0.85)',
              'rgba(10, 220, 0, 0.85)',
              'rgba(2, 100, 0, 0.85)',
              'rgba(20, 55, 0, 0.85)',
              'rgba(120, 155, 0, 0.85)'
            ],
            borderColor: 'rgba(100, 155, 0, 1)',
            borderWidth: 0
          }
        ]
      },
      doughChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        offset: 8,
        radius: 160,
        spacing: 4,
        hoverOffset: 32,
        hoverBorderWidth: 1,
        weight: 0
      },
      lineChartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'John Doe',
            backgroundColor: '#ff0099',
            data: [40, 39, 10, 40, 39, 80, 40]
          },
          {
            label: 'Jane Doe',
            backgroundColor: '#ff9900',
            data: [20, 9, 19, 90, 29, 100, 80]
          },
          {
            label: 'Jack Doe',
            backgroundColor: '#999999',
            data: [10, 24, 12, 50, 69, 10, 20]
          }
        ]
      },
      lineChartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  head() {
    return {
      title: 'Homepage - Nuxtify Admin Dashboard Template by dykraf.com',
      description:
        'A Collection of Templates in Nuxtify Admin Template Dashboard by dykraf.com'
    }
  }
}
</script>
