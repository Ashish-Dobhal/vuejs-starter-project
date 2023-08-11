<template lang="pug">
div( class="flex w-full flex-row flex-nowrap")
  job-results-sidebar(class="w-1/4")
  job-listings(class="w-3/4")
</template>

<script>
import JobResultsSidebar from "@/components/job-results/JobFiltersSidebar/JobFiltersSidebar.vue"
import JobListings from '@/components/job-results/JobListings.vue'
export default {
  name: "JobResultsView",
  components: { JobResultsSidebar, JobListings }
}
</script>
