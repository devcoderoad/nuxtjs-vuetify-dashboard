const INITIALIZE_STORE = 'INITIALIZE_STORE'
const DARK_LOAD = 'DARK_LOAD'
const ASIDE_LOAD = 'ASIDE_LOAD'
const ASIDEMIN_LOAD = 'ASIDEMIN_LOAD'
const MINASIDE_LOAD = 'MINASIDE_LOAD'
const TOPNAVFULL_LOAD = 'TOPNAVFULL_LOAD'
const BOTNAVFIX_LOAD = 'BOTNAVFIX_LOAD'

// type ThemeType = {
//   isDark: boolean
//   isAsideHide: boolean
//   isAsideMin: boolean
//   isMinAside: boolean
//   isTopNavFull: boolean
//   isBotNavFix: boolean
// }

const state = () => ({
  theme: {
    isDark: false,
    isAsideHide: false,
    isAsideMin: false,
    isMinAside: false,
    isTopNavFull: false,
    isBotNavFix: false
  }
})

const getters = {
  getIsDarkMode: (state) => state.theme.isDark
}

const mutations = {
  /* Execute this mutation on client */
  [INITIALIZE_STORE](state) {
    const { app } = this
    const themeStore = JSON.parse(localStorage.getItem('nuxtify') || 'null')
    if (themeStore) {
      app.vuetify.framework.theme.isDark = themeStore.isDark
    } else {
      localStorage.setItem('nuxtify', JSON.stringify(state.theme))
      app.vuetify.framework.theme.isDark = state.theme.isDark
    }
  },
  [DARK_LOAD](state, payload) {
    state.theme.isDark = payload?.isDark
    localStorage.setItem('nuxtify', JSON.stringify(state.theme))
  },
  [ASIDE_LOAD](state, payload) {
    state.theme.isAsideHide = payload?.isAsideHide
  },
  [ASIDEMIN_LOAD](state, payload) {
    state.theme.isAsideMin = payload?.isAsideMin
  },
  [MINASIDE_LOAD](state, payload) {
    state.theme.isMinAside = payload?.isMinAside
  },
  [TOPNAVFULL_LOAD](state, payload) {
    state.theme.isTopNavFull = payload?.isTopNavFull
  },
  [BOTNAVFIX_LOAD](state, payload) {
    state.theme.isBotNavFix = payload?.isBotNavFix
  }
}

const actions = {
  load({ commit }, payload) {
    commit('DARK_LOAD', payload)
    commit('ASIDE_LOAD', payload)
    commit('ASIDEMIN_LOAD', payload)
    commit('MINASIDE_LOAD', payload)
    commit('TOPNAVFULL_LOAD', payload)
    commit('BOTNAVFIX_LOAD', payload)
  },
  setDark({ commit }, payload) {
    commit('DARK_LOAD', payload)
  }
}

/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}
