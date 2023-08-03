<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing></job-listing>
      <job-listing></job-listing>
      <job-listing></job-listing>

    </ol>
  </main>
</template>
<script>
import JobListing from "@/components/job-results/JobListing.vue"
export default {
  components: { JobListing },
  name: "JobListings"
}
</script>
