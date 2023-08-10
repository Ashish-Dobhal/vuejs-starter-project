<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" data-testid="job-listing"></job-listing>
    </ol>
    <div data-testid="pagination" class="flex flex-row-reverse gap-3 align-middle text-center" v-if="allJobs?.length > 0">
      <font-awesome-icon :icon="['fas', 'chevron-right']" :class="['ml-4', 'mr-3', 'my-1', hasNextPage ? '' : 'disabled']"
        @click="gotoNextPage" />
      <font-awesome-icon :icon="['fas', 'chevron-left']" :class="['ml-4', 'mr-3', 'my-1', hasPrevPage ? '' : 'disabled']"
        @click="gotoPreviousPage" />
      <span class="mr-20"> {{ currentPageFirstJobPosition }} - {{ currentPageLastJobPosition }} of {{ allJobs?.length }}
        jobs
      </span>
    </div>
  </main>
</template>
<script>
import { mapActions, mapGetters } from "vuex"
import JobListing from "@/components/job-results/JobListing.vue"
import ActionButton from '../shared/ActionButton.vue'
import { INIT_JOBS_STORE } from "../../store/actions.constants"
export default {
  name: "JobListings",
  components: { JobListing, ActionButton },
  computed: {
    ...mapGetters('jobs',
      ['allJobs', 'jobsPerPage', 'pageNos', 'displayedJobs', 'totalPages', 'totalJobs', 'hasPrevPage', 'hasNextPage']),
    currentPageFirstJobPosition() {
      return (this.pageNos - 1) * this.jobsPerPage + 1
    },
    currentPageLastJobPosition() {
      if (this.allJobs.length <= this.pageNos * this.jobsPerPage) {
        return this.allJobs.length
      } else {
        return this.pageNos * this.jobsPerPage
      }
    },
  },
  methods: {
    ...mapActions('jobs', [INIT_JOBS_STORE]),
    gotoNextPage() {
      if (this.hasNextPage)
        this.$router.push({ name: "JobResults", query: { page: this.pageNos + 1 } })
    },
    gotoPreviousPage() {
      if (this.hasPrevPage)
        this.$router.push({ name: "JobResults", query: { page: this.pageNos - 1 } })
    }

  },
  created() {
    this.INIT_JOBS_STORE(this.$route.query.page)
  }
}
</script>
<style scoped>
.disabled {
  @apply text-brand-gray-1
}
</style>
