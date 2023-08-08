import Vuex from "vuex"
import userStore from "../../../src/store/user"

describe("Vuex Global Store", () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: { foo: "foo" },
      modules: {
        user: userStore
      }
    })
  })

  it.only("state value", () => {
    console.log(store.state)
  })

  it("sets signedIn to true when login is called", () => {
    store.dispatch("user/login")
    expect(store.state.user.signedIn).toBe(true)
  })

  it("sets signedIn to false when logout is called", () => {
    store.dispatch("user/logout")
    expect(store.state.user.signedIn).toBe(false)
  })

  it("signed in getter returns correct value", () => {
    store.commit("user/login")
    expect(store.state.user.signedIn).toBe(true)
    store.commit("user/logout")
    expect(store.state.user.signedIn).toBe(false)
  })
})
