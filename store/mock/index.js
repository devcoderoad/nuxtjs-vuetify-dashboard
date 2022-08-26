// import axios from 'axios'

const LOAD_CHANNELS = 'LOAD_CHANNELS'
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const LOAD_PROJECTS = 'LOAD_PROJECTS'
const LOAD_SALES = 'LOAD_SALES'
const LOAD_USERS = 'LOAD_USERS'
const LOAD_SUMMARY = 'LOAD_SUMMARY'
const LOAD_BUILDINGS = 'LOAD_BUILDINGS'

const state = () => ({
  channels: [],
  products: [],
  projects: [],
  sales: [],
  users: [],
  summary: [],
  buildings: []
})

const getters = {
  // getChannels(state) {
  //   return state.channels
  // },
  // getProducts(state) {
  //   return state.products
  // },
  // getProjects(state) {
  //   return state.Projects
  // },
  // getSales(state) {
  //   return state.sales
  // },
  // getUsers(state) {
  //   return state.users
  // }
  // geSummary(state) {
  //   return state.summary
  // }
}

const mutations = {
  [LOAD_CHANNELS](state, payload) {
    state.channels = payload
  },
  [LOAD_PRODUCTS](state, payload) {
    state.products = payload
  },
  [LOAD_PROJECTS](state, payload) {
    state.projects = payload
  },
  [LOAD_SALES](state, payload) {
    state.sales = payload
  },
  [LOAD_USERS](state, payload) {
    state.users = payload
  },
  [LOAD_SUMMARY](state, payload) {
    state.summary = payload
  },
  [LOAD_BUILDINGS](state, payload) {
    state.buildings = payload
  }
}

const actions = {
  async actionGetChannels(context, payload) {
    const { commit } = context
    const { $axios } = this
    const result = await $axios
      .$get('json/channels.json', payload)
      .then((res) => res.data)
    commit('LOAD_CHANNELS', result)
  },
  async actionGetUsers(context, payload) {
    const { commit } = context
    const { $axios } = this
    const result = await $axios
      .$get('json/users.json', payload)
      .then((res) => res.data)
    commit('LOAD_USERS', result)
  },
  async actionGetSummary(context, payload) {
    const { commit } = context
    const { $axios } = this
    const result = await $axios
      .$get('json/summary.json', payload)
      .then((res) => res.data)
    commit('LOAD_SUMMARY', result)
  },
  async actionGetBuildings(context, payload) {
    const { commit } = context
    const { $axios } = this
    const result = await $axios
      .$get('json/buildings.json', payload)
      .then((res) => res.data)
    commit('LOAD_BUILDINGS', result)
  },
  async actionGetProducts(context, payload) {
    const { commit } = context
    const { $axios } = this
    const result = await $axios
      .$get('json/products.json', payload)
      .then((res) => res.data)
    commit('LOAD_PRODUCTS', result)
  },
  async actionGetProjects(context, payload) {
    const { commit } = context
    const { $axios } = this
    const result = await $axios
      .$get('json/projects.json', payload)
      .then((res) => res.data)
    commit('LOAD_PROJECTS', result)
  }
  // actionGetSales({ commit }, payload) {},
}

/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}
