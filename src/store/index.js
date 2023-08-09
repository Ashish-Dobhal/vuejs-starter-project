import { createStore } from "vuex"
import userStore from "./user"
import jobsStore from "./jobs"
export const store = createStore({
  state: {
    foo: "bar".repeat(2)
  },
  modules: {
    user: userStore,
    jobs: jobsStore
  }
})
