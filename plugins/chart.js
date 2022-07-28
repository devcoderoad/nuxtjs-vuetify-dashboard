/* eslint-disable vue/one-component-per-file */
import Vue from 'vue'
import { Bar, Line, Doughnut, Pie } from 'vue-chartjs/legacy'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement
)

Vue.component('LineChart', {
  extends: Line
})

Vue.component('DoughnutChart', {
  extends: Doughnut
})

Vue.component('BarChart', {
  extends: Bar
})

Vue.component('PieChart', {
  extends: Pie
})
