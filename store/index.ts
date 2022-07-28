const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  // nuxtServerInit({ commit }: any, { req }: any) {
  async nuxtServerInit(
    { dispatch }: any, // { vuetify }: any /* { req }: any */
    { $cookies }: any
  ) {
    // console.log(this)
    // vuetify.theme.dark = $cookies.get('theme')
    await dispatch('core/load', { isDark: $cookies.get('theme') })
  }
}

/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}
