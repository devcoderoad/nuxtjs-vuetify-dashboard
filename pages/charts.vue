<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1 class="title-page">Charts</h1>
        <v-container fluid>
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
            <v-col md="12">
              <v-card height="100%">
                <v-card-title tag="h2">Bar Chart</v-card-title>
                <v-card-subtitle>Data examples</v-card-subtitle>
                <v-card-text>
                  <div>
                    <client-only placeholder="Loading...">
                      <BarChart
                        :chartData="barChartData"
                        :options="barChartOptions"
                        :height="90"
                        :width="100"
                      />
                    </client-only>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="6">
              <v-card height="100%">
                <v-card-title tag="h2">Pie Chart</v-card-title>
                <v-card-subtitle>Data examples</v-card-subtitle>
                <v-card-text>
                  <div>
                    <!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
                eveniet est? Mollitia labore deserunt iusto eius explicabo
                laborum autem vel consequatur libero animi alias suscipit
                provident qui excepturi quaerat possimus atque, dignissimos aut
                obcaecati necessitatibus iure delectus molestiae! Dolorum,
                doloremque? Sequi, porro. Excepturi consequuntur iure corporis
                repudiandae! Mollitia non maxime architecto explicabo nulla
                laborum dolores? -->
                    <client-only placeholder="Loading...">
                      <PieChart
                        :chartData="barChartData"
                        :options="barChartOptions"
                        :height="90"
                        :width="100"
                      />
                    </client-only>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="6">
              <v-card height="100%">
                <v-card-title tag="h2">Donut Chart</v-card-title>
                <v-card-subtitle>Data examples</v-card-subtitle>
                <v-card-text>
                  <div>
                    <!-- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
                eveniet est? Mollitia labore deserunt iusto eius explicabo
                laborum autem vel consequatur libero animi alias suscipit
                provident qui excepturi quaerat possimus atque, dignissimos aut
                obcaecati necessitatibus iure delectus molestiae! Dolorum,
                doloremque? Sequi, porro. Excepturi consequuntur iure corporis
                repudiandae! Mollitia non maxime architecto explicabo nulla
                laborum dolores? -->
                    <client-only placeholder="Loading...">
                      <DoughnutChart
                        :chartData="barChartData"
                        :options="barChartOptions"
                      />
                    </client-only>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="12">
              <v-row>
                <v-col cols="12" lg="6">
                  <v-card height="100%">
                    <v-card-title tag="h2">Graph Chart</v-card-title>
                    <v-card-subtitle>Data examples</v-card-subtitle>
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
                          elit. Esse, eveniet est? Mollitia labore deserunt
                          iusto eius explicabo laborum autem vel consequatur
                          libero animi alias suscipit provident qui excepturi
                          quaerat possimus atque, dignissimos aut obcaecati
                          necessitatibus iure delectus molestiae! Dolorum,
                          doloremque? Sequi, porro. Excepturi consequuntur iure
                          corporis repudiandae! Mollitia non maxime architecto
                          explicabo nulla laborum dolores?
                        </div>
                      </v-col>
                    </v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-card height="100%">
                    <v-card-title tag="h2">Pie Chart</v-card-title>
                    <v-card-subtitle>Data examples</v-card-subtitle>
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
                          elit. Esse, eveniet est? Mollitia labore deserunt
                          iusto eius explicabo laborum autem vel consequatur
                          libero animi alias suscipit provident qui excepturi
                          quaerat possimus atque, dignissimos aut obcaecati
                          necessitatibus iure delectus molestiae! Dolorum,
                          doloremque? Sequi, porro. Excepturi consequuntur iure
                          corporis repudiandae! Mollitia non maxime architecto
                          explicabo nulla laborum dolores?
                        </div>
                      </v-col>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
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
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ChartsPage',
  data() {
    console.log(this.$store.state)
    return {
      barChartData: {
        labels: [
          '2019-06',
          '2019-07',
          '2019-08',
          '2019-09',
          '2019-10',
          '2019-11',
          '2019-12',
          '2020-01',
          '2020-02',
          '2020-03'
        ],
        datasets: [
          {
            label: 'Visualization',
            data: [72, 131, 12, 3, 4, 55, 0, 0, 4, 10, 2],
            backgroundColor: 'rgba(20, 255, 0, 0.3)',
            borderColor: 'rgba(100, 155, 0, 1)',
            borderWidth: 1
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Customer analytics data',
          fontSize: 24,
          fontColor: '#6b7280'
        },
        tooltips: {
          backgroundColor: '#17BF62'
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                max: 7,
                min: 0,
                stepSize: 1
              },
              gridLines: {
                display: true
              }
            }
          ]
        }
      },
      barChannelData: null,
      barChannelOptions: null,
      lineDataViews: null,
      lineDataSales: null
    }
  },
  async fetch() {
    const {
      $store: { dispatch }
    } = this
    await dispatch('mock/actionGetChannels')
    await dispatch('mock/actionGetUsers')
    await dispatch('mock/actionGetSummary')

    this.barChannelData = {
      labels: [...(this.channels && this.channels.map((item) => item.name))],
      datasets: [
        {
          label: 'Visual',
          data: [
            ...(this.channels && this.channels.map((item) => item.summary))
          ],
          // backgroundColor: [
          //   ...(this.channels && this.channels.map((item) => item.color))
          // ],
          // borderColor: 'rgba(100, 155, 0, 0.5)',
          backgroundColor: 'rgba(20, 255, 0, 0.3)',
          borderColor: 'rgba(100, 155, 0, 1)',
          borderWidth: 1
        }
      ]
    }

    this.lineDataViews = {
      labels: [...(this.sales && this.sales.map((item) => item.name))],
      datasets: [
        {
          label: 'Visualization',
          data: [...(this.sales && this.sales.map((item) => item.summary))],
          backgroundColor: 'rgba(101, 110, 10, 0.55)',
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
          backgroundColor: 'rgba(30, 212, 0, 0.55)',
          borderColor: 'rgba(150, 155, 0, 1)',
          borderWidth: 1
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
    ...mapState({ users: (state) => state.mock.users }),
    ...mapState({ views: (state) => state.mock.summary.views }),
    ...mapState({ sales: (state) => state.mock.summary.sales })
  }
}
</script>
