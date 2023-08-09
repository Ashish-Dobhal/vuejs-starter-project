import axios from "axios"
const state = () => ({
  allJobs: null
})

const getters = {
  allJobs(state) {
    return state.allJobs
  }
}

const mutations = {
  updateJobsStore(state, allJobs) {
    state.allJobs = allJobs
  }
}

const actions = {
  async initJobsStore({ commit, state }) {
    console.log("hody action")
    const baseUrl = import.meta.env.VITE_APP_API_URL
    const response = await axios.get(`${baseUrl}/jobs`)
    commit("updateJobsStore", response.data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
