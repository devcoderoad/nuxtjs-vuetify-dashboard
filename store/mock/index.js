// import axios from 'axios'

const LOAD_CHANNELS = 'LOAD_CHANNELS'
const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const LOAD_SALES = 'LOAD_SALES'
const LOAD_USERS = 'LOAD_USERS'
const LOAD_SUMMARY = 'LOAD_SUMMARY'

const state = () => ({
  channels: [],
  products: [],
  sales: [],
  users: [],
  summary: []
})

const getters = {
  // getChannels(state) {
  //   return state.channels
  // },
  // getProducts(state) {
  //   return state.products
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
  [LOAD_SALES](state, payload) {
    state.sales = payload
  },
  [LOAD_USERS](state, payload) {
    state.users = payload
  },
  [LOAD_SUMMARY](state, payload) {
    state.summary = payload
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
  }
  // actionGetProducts({ commit }, payload) {},
  // actionGetSales({ commit }, payload) {},
}

/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}
