import Vuex from "vuex"

export const mockLoginAction = vi.fn()
export const mockLogoutAction = vi.fn()
export const mockStore = new Vuex.Store({
  modules: {
    user: {
      namespaced: true,
      state: {
        signedIn: false
      },
      getters: {
        signedIn: (state) => state.signedIn
      },
      mutations: {
        login(state) {
          state.signedIn = true
        },
        logout(state) {
          state.signedIn = false
        }
      },
      actions: {
        login({ commit }) {
          commit("login")
        },
        logout({ commit }) {
          commit("logout")
        }
      }
    }
  }
})
