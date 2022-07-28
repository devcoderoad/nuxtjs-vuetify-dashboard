const state = () => ({})

const getters = {}

const mutations = {}

const actions = {
  async nuxtServerInit({ dispatch }: any, context: any /* app: any */) {
    const { $cookies }: any = this
    const { $vuetify }: any = context
    // const { $vuetify }: any = app
    const getCore = await $cookies.getAll()

    // console.log(this.app.$vuetify)
    // console.log(context.$vuetify.theme.isDark)
    // const isDark = context.$vuetify.theme.isDark

    const isDark = getCore.isDark
    const isAsideHide = getCore.isAsideHide
    const isAsideMin = getCore.isAsideMin
    const isMinAside = getCore.isMinAside
    const isTopNavFull = getCore.isTopNavFull
    const isBotNavFix = getCore.isBotNavFix

    /* Set Vuetify theme  */
    $cookies.set('isDark', isDark)
    $vuetify.theme.isDark = isDark

    // vuetify.theme.isDark = isDark
    // $vuetify.theme.isDark = true
    // console.log(isDark)
    // console.log($vuetify.theme.isDark)
    // console.log($vuetify.theme.isDark)

    await dispatch('core/load', {
      // payload: {
      isDark,
      isAsideHide,
      isAsideMin,
      isMinAside,
      isTopNavFull,
      isBotNavFix
      // }
    })
  }
}

/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}
