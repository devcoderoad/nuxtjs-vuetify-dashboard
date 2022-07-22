const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  // nuxtServerInit({ commit }: any, { req }: any) {
  async nuxtServerInit(
    { dispatch }: any /*,
    { $vuetify }: any, */ /* { req }: any */
  ) {
    // console.log(document.localStorage.getItem('theme'))
    // $vuetify.theme.dark = true
    await dispatch('core/load', { theme: '' })
  }
}

/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}
