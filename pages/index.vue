<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <h1 class="title-page">Hi, Welcome to Nuxtify</h1>
        <CardSummary />
        <v-row>
          <v-col cols="12" lg="4">
            <v-card height="100%">
              <v-card-title>Sales by brand</v-card-title>
              <v-card-text>
                <p>
                  Our daily corporate brand sales summaries in wholesale. This
                  summary is active from 00.00 to 24.00 monthly.
                </p>
                <client-only placeholder="Loading...">
                  <DoughnutChart
                    :chart-data="doughChartData"
                    :chart-options="doughChartOptions"
                    :height="430"
                  />
                </client-only>
                <v-row>
                  <v-col cols="9">
                    <p>
                      The sales summary is done by our company on salesperson
                      activities based on the brand they sell daily on a monthly
                      basis.
                    </p></v-col
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
                  The sales summary is done by our company on salesperson
                  activities based on the brand they sell daily on a monthly
                  basis. These are the top three sales by a person on average
                  above 5 sales monthly.
                </p>
                <!-- <v-col cols="3">
                      <v-select
                        :items="[
                          'Division 1',
                          'Division 2',
                          'Division 3',
                          'Division 4'
                        ]"
                        label="Division"
                        dense
                        outlined
                      ></v-select>
                    </v-col> -->
                <client-only placeholder="Loading...">
                  <LineChart
                    :chart-options="lineChartOptions"
                    :chart-data="lineChartData"
                    :chart-id="`chartId`"
                    :width="300"
                    :height="400"
                    :styles="{
                      margin: '1rem auto',
                      backgroundColor: 'rgba(255,255,255, .85)',
                      padding: '.75rem'
                    }"
                  />
                </client-only>
                <p>
                  The performance of the sales summary will start from the start
                  of the year to the end year and will impact the person's
                  yearly performance review, and bonus rewards.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="8">
            <v-card height="100%" class="card">
              <v-container fluid>
                <h3 class="title-page">
                  Company official yearly calendar release
                </h3>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                  nihil corporis rem iste! Doloribus magni doloremque inventore
                  natus consectetur corporis debitis nemo numquam explicabo esse
                  iusto maxime.
                </div>
                <v-calendar class="my-6"></v-calendar>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" md="4">
            <v-card height="100%" class="card">
              <v-container>
                <h3 class="title-page">Company News Announcement</h3>
                <div>
                  Here are the latest announcement notifications across our
                  company! So you do not have to fear missing out on the latest
                  news
                </div>
                <v-container fluid>
                  <!-- <v-virtual-scroll width="256" height="321" item-height="120"> -->
                  <v-row no-gutters>
                    <v-col cols="2" align-self="center" align="center">
                      <v-avatar color="primary">
                        <span class="white--text font-weight-bold">AS</span>
                      </v-avatar>
                    </v-col>
                    <v-col cols="10">
                      <blockquote class="blockquote grey--text body-1 px-3">
                        <div class="mb-1">
                          Fugit nihil corporis rem iste! Doloribus magni
                          doloremque
                        </div>
                        <cite class="font-weight-thin"
                          >- Any Sanders. Sr Marketing Director</cite
                        >
                      </blockquote>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="9">
                      <blockquote
                        class="blockquote grey--text body-1 px-3 text-right"
                      >
                        <div class="mb-1">
                          Fugit nihil corporis rem iste! Doloremque inventore
                          natus nemo
                        </div>
                        <cite class="font-weight-thin"
                          >- Carol Violas. Sales Representative</cite
                        >
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
                      <blockquote class="blockquote grey--text body-1 px-3">
                        <div class="mb-1">
                          Fugit nihil corporis rem iste! Doloribus natus
                          consectetur
                        </div>
                        <cite class="font-weight-thin"
                          >- Naomi Malone. Country Director</cite
                        >
                      </blockquote>
                    </v-col>
                  </v-row>
                  <!-- <v-row no-gutters>
                      <v-col cols="9">
                        <blockquote
                          class="blockquote grey--text body-1 px-3 text-right"
                        >
                          <div class="mb-1">
                            Fugit nihil corporis rem iste! Doloremque inventore
                            natus nemo
                          </div>
                          <cite class="font-weight-thin"
                            >- Carol Violas. Sales Representative</cite
                          >
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
                        <v-avatar color="primary">
                          <span class="white--text font-weight-bold">AS</span>
                        </v-avatar>
                      </v-col>
                      <v-col cols="10">
                        <blockquote class="blockquote grey--text body-1 px-3">
                          <div class="mb-1">
                            Fugit nihil corporis rem iste! Doloribus magni
                            doloremque
                          </div>
                          <cite class="font-weight-thin"
                            >- Any Sanders. Sr Marketing Director</cite
                          >
                        </blockquote>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="9">
                        <blockquote
                          class="blockquote grey--text body-1 px-3 text-right"
                        >
                          <div class="mb-1">
                            Fugit nihil corporis rem iste! Doloremque inventore
                            natus nemo
                          </div>
                          <cite class="font-weight-thin"
                            >- Carol Violas. Sales Representative</cite
                          >
                        </blockquote>
                      </v-col>
                      <v-col cols="3" align-self="center" align="center">
                        <v-avatar color="green">
                          <span class="white--text font-weight-bold">CV</span>
                        </v-avatar>
                      </v-col>
                    </v-row> -->
                  <!-- </v-virtual-scroll> -->
                </v-container>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import CardSummary from '@/components/Card/Summary.vue'
export default {
  name: 'IndexPage',
  components: {
    CardSummary
  },
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
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        datasets: [
          {
            label: 'John Doe',
            backgroundColor: '#ff0099',
            borderColor: '#ff0099',
            borderWidth: '0',
            borderJoinStyle: 'round',
            data: [40, 39, 10, 40, 39, 80, 40, 30, 10, 20, 30, 40]
          },
          {
            label: 'Jane Doe',
            backgroundColor: '#ff9900',
            borderColor: '#ff9900',
            borderWidth: '0',
            borderJoinStyle: 'round',
            data: [20, 9, 80, 90, 29, 58, 80, 20, 30, 40, 55, 75]
          },
          {
            label: 'Jack Doe',
            backgroundColor: '#999999',
            borderColor: '#999999',
            borderWidth: '0',
            borderJoinStyle: 'round',
            data: [10, 24, 42, 50, 69, 10, 20, 70, 89, 45, 35, 42]
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
