<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job"></job-listing>
    </ol>
    <div data-testid="pagination" class="flex flex-row-reverse gap-3 align-middle text-center" v-if="jobs.length > 0">
      <font-awesome-icon :icon="['fas', 'chevron-right']" :class="['ml-4', 'mr-3', 'my-1', hasNextPage ? '' : 'disabled']"
        @click="gotoNextPage" />
      <font-awesome-icon :icon="['fas', 'chevron-left']" :class="['ml-4', 'mr-3', 'my-1', hasPrevPage ? '' : 'disabled']"
        @click="gotoPreviousPage" />
      <span class="mr-20"> {{ currentPageFirstJobPosition }} - {{ currentPageLastJobPosition }} of {{ jobs.length }} jobs
      </span>
    </div>
  </main>
</template>
<script>
import JobListing from "@/components/job-results/JobListing.vue"
import axios from "axios"
import ActionButton from '../shared/ActionButton.vue'
export default {
  name: "JobListings",
  components: { JobListing, ActionButton },
  data() {
    return {
      jobs: [],
      jobsPerPage: 10,
    }
  },
  computed: {
    currentPage() {
      const pageString = this.$route.query.page || "1"
      return Number.parseInt(pageString)
    },
    displayedJobs() {
      const firstJobIdx = (this.currentPage - 1) * this.jobsPerPage
      const lastJobIdx = this.currentPage * this.jobsPerPage
      return this.jobs.slice(firstJobIdx, lastJobIdx)
    },
    currentPageFirstJobPosition() {
      return (this.currentPage - 1) * this.jobsPerPage + 1
    },
    currentPageLastJobPosition() {
      if (this.jobs.length <= this.currentPage * this.jobsPerPage) {
        return this.jobs.length
      } else {
        return this.currentPage * this.jobsPerPage
      }
    },
    hasPrevPage() {
      return this.currentPage > 1
    },
    totalPages() {
      return Math.ceil(this.jobs.length / this.jobsPerPage)
    },
    hasNextPage() {
      return this.currentPage < this.totalPages
    }
  },
  methods: {
    gotoNextPage() {
      if (this.hasNextPage)
        this.$router.push({ name: "JobResults", query: { page: this.currentPage + 1 } })
    },
    gotoPreviousPage() {
      if (this.hasPrevPage)
        this.$router.push({ name: "JobResults", query: { page: this.currentPage - 1 } })
    }

  },
  async mounted() {
    const response = await axios.get("http://localhost:3000/jobs")
    this.jobs = response.data
  }
}
</script>
<style scoped>
.disabled {
  @apply text-brand-gray-1
}
</style>
