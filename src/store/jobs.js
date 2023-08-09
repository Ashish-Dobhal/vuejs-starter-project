import axios from "axios"

const state = () => ({
  allJobs: null,
  pageNos: 1,
  jobsPerPage: 10
})

const getters = {
  allJobs(state) {
    return state.allJobs
  },
  jobsPerPage(state) {
    return state.jobsPerPage
  },
  pageNos(state) {
    return state.pageNos
  },
  displayedJobs(state) {
    const firstJobIdx = (state.pageNos - 1) * state.jobsPerPage
    const lastJobIdx = state.pageNos * state.jobsPerPage
    return state.allJobs?.slice(firstJobIdx, lastJobIdx)
  },
  totalJobs(state) {
    return state.allJobs?.length
  },
  totalPages(state) {
    return Math.ceil(state.allJobs.length / state.jobsPerPage)
  },
  hasPrevPage(state) {
    return state.pageNos > 1
  },
  hasNextPage(state, getters) {
    return state.pageNos < getters.totalPages
  }
}

const mutations = {
  updateJobsStore(state, allJobs) {
    state.allJobs = allJobs
  },
  setPageNos(state, pageNos) {
    state.pageNos = pageNos
  }
}

const actions = {
  async initJobsStore({ commit, state }, pageNos) {
    commit("setPageNos", parseInt(pageNos) || 1)
    // TODO: add vite config for IA machine
    const baseUrl = import.meta.env.VITE_APP_API_URL
    const response = await axios.get(`http://localhost:3000/jobs`)
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
