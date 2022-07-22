// import STATUS_TYPES from '~/constants/statusTypes'

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

const THEME_LOAD = 'THEME_LOAD'
// const THEME_RESULT = 'THEME_RESULT'

const state = () => {
  return {
    theme: null
  }
}

const getters = {
  getTheme(state: any) {
    return state.theme
  }
}

const mutations = {
  [THEME_LOAD](state: any, payload: any) {
    state.theme = payload.theme
  }
}

const actions = {
  load({ commit }: any, payload: any /* callback: any */) {
    commit('THEME_LOAD', payload)
  }
}

/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions
}
