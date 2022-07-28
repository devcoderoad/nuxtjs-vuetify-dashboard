<template>
  <v-row>
    <v-col class="text-center">
      <h1 class="title-page">Cards</h1>
      <v-row class="text-left">
        <v-col md="12" light>
          <v-card light>
            <v-card-title tag="h2">Line Chart</v-card-title>
            <v-card-subtitle>Data examples</v-card-subtitle>
            <v-card-text>
              <div>
                <client-only placeholder="Loading...">
                  <LineChart
                    :chart-options="barChartOptions"
                    :chart-data="barChartData"
                    :height="100"
                    :width="300"
                    chart-id="lineChart"
                  />
                </client-only>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="12" light>
          <v-card light>
            <v-card-title tag="h2">Bar Chart</v-card-title>
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
        <v-col md="6" light>
          <v-card light>
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
        <v-col md="6" light>
          <v-card light>
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
        <v-col md="12" light>
          <v-card light>
            <v-card-title tag="h2">Graph Chart</v-card-title>
            <v-card-subtitle>Data examples</v-card-subtitle>
            <v-card-text>
              <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
                eveniet est? Mollitia labore deserunt iusto eius explicabo
                laborum autem vel consequatur libero animi alias suscipit
                provident qui excepturi quaerat possimus atque, dignissimos aut
                obcaecati necessitatibus iure delectus molestiae! Dolorum,
                doloremque? Sequi, porro. Excepturi consequuntur iure corporis
                repudiandae! Mollitia non maxime architecto explicabo nulla
                laborum dolores?
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
</template>

<script>
// import { Bar } from 'vue-chartjs/legacy'
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale
// } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
// import BarChart from '~/components/Charts/BarChart.vue'

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
          '2019-11',
          '2019-12',
          '2020-01',
          '2020-02',
          '2020-03'
        ],
        datasets: [
          {
            label: 'Visualization',
            data: [2, 1, 12, 3, 4, 5, 0, 0, 4, 10, 2],
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
      }
    }
  }
}
</script>
