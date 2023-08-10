import { LOGIN_USER, LOGOUT_USER } from "./actions.constants"

const state = () => ({
  signedIn: false
})

const getters = {
  signedIn(state) {
    return state.signedIn
  }
}

const mutations = {
  login(state) {
    state.signedIn = true
  },
  logout(state) {
    state.signedIn = false
  }
}

const actions = {
  [LOGIN_USER]({ commit, state }) {
    commit("login")
  },
  [LOGOUT_USER]({ commit, state }) {
    commit("logout")
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
