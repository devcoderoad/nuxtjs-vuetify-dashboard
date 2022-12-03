import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'

// import { Bar, Line, Doughnut, Pie } from 'vue-chartjs/legacy'
// import {
//   Chart as ChartJS,
//   Title,
//   Tooltip,
//   Legend,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   ArcElement
// } from 'chart.js'

Vue.component('ApexCharts', {
  extends: VueApexCharts
})
