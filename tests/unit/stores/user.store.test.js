import Vuex from "vuex"
import userStore from "../../../src/store/user"
import { LOGIN_USER, LOGOUT_USER } from "../../../src/store/actions.constants"

/**
 *
 *  ⚠️ FIXME: mv away from the pattern of replicating the entire store for the store related tests
 *   vue master class job tests https://interactivebrokers.udemy.com/course/vue-masterclass/learn/lecture/35062294#overview
 */
describe.only("Vuex Global Store", () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: { foo: "foo" },
      modules: {
        user: userStore
      }
    })
  })
  it("sets signedIn to true when login is called", () => {
    store.dispatch(`user/${LOGIN_USER}`)
    expect(store.state.user.signedIn).toBe(true)
  })

  it("sets signedIn to false when logout is called", () => {
    store.dispatch(`user/${LOGOUT_USER}`)
    expect(store.state.user.signedIn).toBe(false)
  })

  it("signed in getter returns correct value", () => {
    store.commit("user/login")
    expect(store.state.user.signedIn).toBe(true)
    store.commit("user/logout")
    expect(store.state.user.signedIn).toBe(false)
  })
})
