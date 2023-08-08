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
  login({ commit, state }) {
    console.log("login ===============")
    commit("login")
  },
  logout({ commit, state }) {
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
