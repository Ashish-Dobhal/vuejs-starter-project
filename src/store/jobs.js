// https://vuex.vuejs.org/guide/modules.html#accessing-global-assets-in-namespaced-modules
import getJobs from "@/api/getJobs"
import { INIT_JOBS_STORE, UPDATE_ORG_FILTERS } from "./actions.constants"
const state = () => ({
  allJobs: [],
  organisationFilters: [],
  pageNos: 1,
  jobsPerPage: 10
})

const getters = {
  allJobs(state) {
    return state.allJobs
  },
  filteredJobs(state) {
    console.log("filtered jobs")
    if (state.organisationFilters.length)
      return state.allJobs.filter((job) => state.organisationFilters.includes(job.organization))
    else return state.allJobs
  },
  organisations(state) {
    const allOrgs = state.allJobs?.map((job) => job.organization)
    return new Set(allOrgs)
  },
  jobsPerPage(state) {
    return state.jobsPerPage
  },
  pageNos(state) {
    return state.pageNos
  },
  displayedJobs(state, getters) {
    const firstJobIdx = (getters.pageNos - 1) * getters.jobsPerPage
    const lastJobIdx = getters.pageNos * getters.jobsPerPage
    return getters.filteredJobs?.slice(firstJobIdx, lastJobIdx)
  },
  totalJobs(state, getters) {
    return getters.filteredJobs?.length
  },
  totalPages(state, getters) {
    return Math.ceil(getters.filteredJobs.length / getters.jobsPerPage)
  },
  hasPrevPage(state) {
    return state.pageNos > 1
  },
  hasNextPage(state, getters) {
    return getters.pageNos < getters.totalPages
  }
}

const mutations = {
  updateJobsStore(state, allJobs) {
    state.allJobs = allJobs
  },
  updateOrganisationFilters(state, organisationFilters) {
    state.organisationFilters = organisationFilters
  },
  setPageNos(state, pageNos) {
    state.pageNos = pageNos
  }
}

const actions = {
  async [INIT_JOBS_STORE]({ commit, state }, pageNos) {
    commit("setPageNos", parseInt(pageNos) || 1)
    const jobs = await getJobs()
    commit("updateJobsStore", jobs)
  },
  async [UPDATE_ORG_FILTERS]({ commit, state }, organisationFilters = []) {
    commit("setPageNos", 1)
    commit("updateOrganisationFilters", organisationFilters)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
