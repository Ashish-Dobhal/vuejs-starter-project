<template>
  <!-- <h1 class="text-6xl font-bold">Jobs View {{ $route.query["location"] }}</h1> -->
  <div class="flex w-full flex-row flex-nowrap">
    <job-results-sidebar></job-results-sidebar>
    <job-listings></job-listings>
  </div>
</template>
<script>
import JobResultsSidebar from "@/components/job-results/JobFiltersSidebar.vue"
import JobListings from '@/components/job-results/JobListings.vue'
export default {
  name: "JobResultsView",
  components: { JobResultsSidebar, JobListings }
}
</script>
