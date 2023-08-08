import { createStore } from "vuex"
import userStore from "./user"

export const store = createStore({
  state: {
    foo: "bar".repeat(2)
  },
  modules: {
    user: userStore
  }
})
