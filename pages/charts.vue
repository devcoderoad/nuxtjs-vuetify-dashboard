<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <h1 class="title-page text-center">Charts</h1>
        <v-row class="text-left">
          <v-col col="12" md="12">
            <v-row>
              <v-col cols="12" md="6">
                <v-card height="100%">
                  <v-card-title tag="h2">Views Chart</v-card-title>
                  <v-card-subtitle>Data examples</v-card-subtitle>
                  <v-card-text>
                    <div>
                      <client-only
                        v-if="lineDataViews"
                        placeholder="Loading..."
                      >
                        <LineChart
                          :chart-options="barChartOptions"
                          :chart-data="lineDataViews"
                          :height="260"
                          :width="300"
                          chart-id="lineChart"
                        />
                      </client-only>
                      <v-row class="my-1">
                        <v-col tag="section">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Esse, eveniet est? Mollitia labore deserunt
                          iusto eius explicabo laborum autem vel consequatur
                          libero animi alias suscipit provident qui excepturi
                          quaerat possimus atque, dignissimos aut obcaecati
                          necessitatibus iure delectus molestiae!
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card height="100%">
                  <v-card-title tag="h2">Sales Chart</v-card-title>
                  <v-card-subtitle>Data examples</v-card-subtitle>
                  <v-card-text>
                    <div>
                      <client-only
                        v-if="lineDataSales"
                        placeholder="Loading..."
                      >
                        <LineChart
                          :chart-options="barChartOptions"
                          :chart-data="lineDataSales"
                          :height="260"
                          :width="300"
                          chart-id="lineChart"
                        />
                      </client-only>
                      <v-row class="my-1">
                        <v-col tag="section">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Esse, eveniet est? Mollitia labore deserunt
                          iusto eius explicabo laborum autem vel consequatur
                          libero animi alias suscipit provident qui excepturi
                          quaerat possimus atque, dignissimos aut obcaecati
                          necessitatibus iure delectus molestiae!
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" md="12">
            <v-row>
              <v-col cols="12" md="6">
                <v-card height="100%">
                  <v-card-title tag="h2">Bar Chart</v-card-title>
                  <v-card-subtitle>Data Projects</v-card-subtitle>
                  <v-card-text>
                    <div>
                      <client-only
                        v-if="barDataProjects"
                        placeholder="Loading..."
                      >
                        <BarChart
                          :chartData="barDataProjects"
                          :options="barChartOptions"
                          :height="90"
                          :width="100"
                        />
                      </client-only>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="6">
                <v-card height="100%">
                  <v-card-title tag="h2">Pie Chart</v-card-title>
                  <v-card-subtitle>Data examples</v-card-subtitle>
                  <v-card-text>
                    <div>
                      <client-only v-if="barChartData" placeholder="Loading...">
                        <PieChart
                          :chartData="barChartData"
                          :options="[
                            {
                              hoverOffset: 4,
                              rotation: 90,
                              cutout: 10,
                              hoverOffset: 30,
                              hoverBorderWidth: 20
                            }
                          ]"
                          :height="90"
                          :width="90"
                        />
                      </client-only>
                    </div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col md="12">
            <v-row>
              <v-col cols="12" lg="6">
                <v-card height="100%">
                  <v-card-title tag="h2">Graph Chart</v-card-title>
                  <v-card-subtitle>Data Channels</v-card-subtitle>
                  <v-card-text>
                    <v-row
                      v-if="channels && channels.length"
                      no-gutters
                      class="mb-4"
                    >
                      <v-col v-for="channel in channels" :key="channel.id">
                        <h4 :class="`${channel.color}--text`">
                          {{ channel.name }}
                        </h4>
                        <h5 class="grey--text">
                          {{ channel.summary }}
                        </h5>
                      </v-col>
                    </v-row>
                    <v-col cols="12" md="12">
                      <client-only
                        v-if="barChannelData"
                        placeholder="Loading..."
                      >
                        <BarChart
                          :chartData="barChannelData"
                          :options="barChannelOptions"
                          :height="90"
                          :width="100"
                        />
                      </client-only>
                    </v-col>
                    <v-col>
                      <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Esse, eveniet est? Mollitia labore deserunt iusto
                        eius explicabo laborum autem vel consequatur libero
                        animi alias suscipit provident qui excepturi quaerat
                        possimus atque, dignissimos aut obcaecati necessitatibus
                        iure delectus molestiae! Dolorum, doloremque? Sequi,
                        porro. Excepturi consequuntur iure corporis repudiandae!
                        Mollitia non maxime architecto explicabo nulla laborum
                        dolores?
                      </div>
                    </v-col>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" lg="6">
                <v-card height="100%">
                  <v-card-title tag="h2">Pie Chart</v-card-title>
                  <v-card-subtitle>Data Channels</v-card-subtitle>
                  <v-card-text>
                    <v-row
                      v-if="channels && channels.length"
                      no-gutters
                      class="mb-4"
                    >
                      <v-col v-for="channel in channels" :key="channel.id">
                        <h4 :class="`${channel.color}--text`">
                          {{ channel.name }}
                        </h4>
                        <h5 class="grey--text">
                          {{ channel.summary }}
                        </h5>
                      </v-col>
                    </v-row>
                    <v-col cols="12" md="12">
                      <client-only
                        v-if="barChannelData"
                        placeholder="Loading..."
                      >
                        <DoughnutChart
                          :chartData="barChannelData"
                          :options="barChannelOptions"
                          :height="90"
                          :width="100"
                        />
                      </client-only>
                    </v-col>
                    <v-col>
                      <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Esse, eveniet est? Mollitia labore deserunt iusto
                        eius explicabo laborum autem vel consequatur libero
                        animi alias suscipit provident qui excepturi quaerat
                        possimus atque, dignissimos aut obcaecati necessitatibus
                        iure delectus
                      </div>
                    </v-col>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ChartsPage',
  data() {
    return {
      barChartData: {
        labels: [
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11'
        ],
        datasets: [
          {
            label: 'Visualization',
            data: [72, 131, 12, 3, 4, 55],
            backgroundColor: [
              '#99aa00',
              '#aabbee',
              '#990000',
              '#99ff00',
              '#994400',
              '#9900ff'
            ],
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 2,
            radius: 240,
            hoverBackgroundColor: 'rgba(100, 0, 0, 0.5)',
            hoverOffset: 35
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        pointStyle: 'star',
        barThickness: 3,
        hoverOffset: 4,
        legend: {
          display: true,
          title: 'Pie Chart Samples'
        },
        title: {
          display: true,
          text: 'Customer analytics data',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        tooltips: {
          backgroundColor: '#17BF62'
        }
        // scales: {
        //   xAxes: [
        //     {
        //       gridLines: {
        //         display: true
        //       }
        //     }
        //   ],
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true,
        //         max: 7,
        //         min: 0,
        //         stepSize: 1
        //       },
        //       gridLines: {
        //         display: true
        //       }
        //     }
        //   ]
        // }
      },
      barChannelData: null,
      barChannelOptions: null,
      lineDataViews: null,
      lineDataSales: null,
      barDataProjects: null
    }
  },
  async fetch() {
    const {
      $store: { dispatch }
    } = this
    await dispatch('mock/actionGetChannels')
    await dispatch('mock/actionGetUsers')
    await dispatch('mock/actionGetSummary')
    await dispatch('mock/actionGetProjects')

    this.barChannelData = {
      labels: [...(this.channels && this.channels.map((item) => item.name))],
      datasets: [
        {
          label: 'Visual',
          data: [
            ...(this.channels && this.channels.map((item) => item.summary))
          ],
          backgroundColor: [
            ...(this.channels && this.channels.map((item) => item.color))
          ],
          borderColor: 'rgba(100, 155, 0, 1)',
          borderWidth: 0,
          hoverOffset: 35,
          hoverBackgroundColor: 'rgba(100, 0, 0, 0.5)',
          weight: 1,
          offset: 8,
          radius: 190
        }
      ]
    }

    this.lineDataViews = {
      labels: [...(this.sales && this.sales.map((item) => item.name))],
      datasets: [
        {
          label: 'Visualization',
          data: [...(this.sales && this.sales.map((item) => item.summary))],
          backgroundColor: 'rgba(101, 110, 10, 0.75)',
          borderColor: 'rgba(140, 155, 0, 1)',
          borderWidth: 1
        }
      ]
    }

    this.lineDataSales = {
      labels: [...(this.views && this.views.map((item) => item.name))],
      datasets: [
        {
          label: 'Visualization',
          data: [...(this.views && this.views.map((item) => item.summary))],
          backgroundColor: 'rgba(30, 12, 211, 0.75)',
          borderColor: 'rgba(10, 155, 0, 1)',
          borderWidth: 1
        }
      ]
    }

    this.barDataProjects = {
      labels: [...(this.projects && this.projects.map((item) => item.name))],
      datasets: [
        {
          label: 'Projects',
          data: [
            ...(this.projects && this.projects.map((item) => item.summary))
          ],
          backgroundColor: [
            ...(this.projects && this.projects.map((item) => item.color))
          ],
          borderColor: 'rgba(100, 155, 0, 1)',
          borderWidth: 0,
          hoverOffset: 35,
          hoverBackgroundColor: 'rgba(100, 0, 0, 0.5)',
          weight: 1,
          offset: 8,
          radius: 180
        }
      ]
    }
  },
  head() {
    return {
      title: 'Charts Page - Nuxtify',
      description: ' A Collection of Charts in Nuxtify Admin Template Dashboard'
    }
  },
  computed: {
    ...mapState({ channels: (state) => state.mock.channels }),
    ...mapState({ projects: (state) => state.mock.projects }),
    ...mapState({ users: (state) => state.mock.users }),
    ...mapState({ views: (state) => state.mock.summary.views }),
    ...mapState({ sales: (state) => state.mock.summary.sales })
  }
}
</script>
