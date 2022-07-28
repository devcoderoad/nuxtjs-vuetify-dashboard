// import STATUS_TYPES from '~/constants/statusTypes'
// import { * as $cookies } from 'cookie-universal-nuxt';

// const { INIT, LOADING, SUCCESS } = STATUS_TYPES

// const GET_BLOGS = 'GET_BLOGS'
// const GET_BLOGS_LOAD = 'GET_BLOGS_LOAD'
// const GET_TAGS = 'GET_TAGS'
// const GET_TAGS_LOAD = 'GET_TAGS_LOAD'
// const GET_BLOG = 'GET_BLOG'
// const GET_BLOG_LOAD = 'GET_BLOG_LOAD'
// const GET_BLOG_TAGS = 'GET_BLOG_TAGS'
// const GET_BLOG_TAGS_LOAD = 'GET_BLOG_TAGS_LOAD'
// const GET_TAG = 'GET_TAG'
// const GET_TAG_LOAD = 'GET_TAG_LOAD'
// const GET_ARCHIVE_LOAD = 'GET_ARCHIVE_LOAD'
// const GET_ARCHIVE = 'GET_ARCHIVE'
// const GET_AUTHOR = 'GET_AUTHOR'
// const GET_AUTHOR_LOAD = 'GET_AUTHOR_LOAD'
// const GET_READ_MORE = 'GET_READ_MORE'
// const GET_READ_MORE_LOAD = 'GET_READ_MORE_LOAD'
// const GET_PREV_NEXT = 'GET_PREV_NEXT'
// const GET_PREV_NEXT_LOAD = 'GET_PREV_NEXT_LOAD'
// const GET_MEDIUM = 'GET_MEDIUM'
// const GET_MEDIUM_LOAD = 'GET_MEDIUM_LOAD'

const DARK_LOAD = 'DARK_LOAD'
const ASIDE_LOAD = 'ASIDE_LOAD'
const ASIDEMIN_LOAD = 'ASIDEMIN_LOAD'
const MINASIDE_LOAD = 'MINASIDE_LOAD'
const TOPNAVFULL_LOAD = 'TOPNAVFULL_LOAD'
const BOTNAVFIX_LOAD = 'BOTNAVFIX_LOAD'
// const THEME_RESULT = 'THEME_RESULT'

const state = () => {
  return {
    isDark: false,
    isAsideHide: false,
    isAsideMin: false,
    isMinAside: false,
    isTopNavFull: false,
    isBotNavFix: false
  }
}

const getters = {
  getIsDarkMode(state: any) {
    return state.isDark
  }
}

const mutations = {
  [DARK_LOAD](state: any, payload: any) {
    state.isDark = payload.isDark
  },
  [ASIDE_LOAD](state: any, payload: any) {
    state.isAsideHide = payload.isAsideHide
  },
  [ASIDEMIN_LOAD](state: any, payload: any) {
    state.isAsideMin = payload.isAsideMin
  },
  [MINASIDE_LOAD](state: any, payload: any) {
    state.isMinAside = payload.isMinAside
  },
  [TOPNAVFULL_LOAD](state: any, payload: any) {
    state.isTopNavFull = payload.isTopNavFull
  },
  [BOTNAVFIX_LOAD](state: any, payload: any) {
    state.isBotNavFix = payload.isBotNavFix
  }
}

const actions = {
  load({ commit }: any, payload: any) {
    // const { app, $cookies } = this
    // $cookies.get('isDark', payload.isDark)
    // console.log({ app.vuetify, $cookies, commit })
    // console.log(app.vuetify.userPreset.theme.dark)
    // console.log(payload)
    // $cookies.setAll(payload)
    // console.log($cookies.getAll())
    commit('DARK_LOAD', payload)
    commit('ASIDE_LOAD', payload)
    commit('ASIDEMIN_LOAD', payload)
    commit('MINASIDE_LOAD', payload)
    commit('TOPNAVFULL_LOAD', payload)
    commit('BOTNAVFIX_LOAD', payload)
  }
}

/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}
