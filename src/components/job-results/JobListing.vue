<template>
  <li class="mb-7 bg-white">
    <router-link :to="jobPageLink" class="mx-auto rounded border border-solid border-brand-gray-2  hover:shadow-gray">
      <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
        <div class="flex flex-row">
          <h2 class="mb-2 text-2xl text-brand-black-1">{{ job.title }}</h2>
        </div>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <font-awesome-icon :icon="['fas', 'building']" class="ml-4 mr-3" />
            <span>{{ job.organization }}</span>
          </div>
          <div class="mr-5" v-if="job.locations">
            <font-awesome-icon :icon="['fas', 'fa-location-dot']" class="ml-4 mr-3" />
            <span class="mr-2 locations" v-for="location in job.locations" :key="location">{{ location
            }}</span>
          </div>
          <div class="mr-5">
            <font-awesome-icon :icon="['fas', 'fa-chart-simple']" class="ml-4 mr-3" />
            <span>Medium</span>
          </div>
        </div>
      </div>
      <hr class="h-2px" />
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2 font-semibold">Minimum Qualifications</h3>
          <div>
            <ul v-if="job.minimumQualifications" class="list-disc pl-8">
              <li v-for="qualification in job.minimumQualifications" :key="qualification">{{ qualification }}</li>
            </ul>
          </div>
        </div>
      </div>
    </router-link>

  </li>
</template>
<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true,
      default: {}
    }
  },
  computed: {
    jobPageLink() {
      return `/job/results/${this.job.id}`
    }
  }
}
</script>
<style scoped>
.locations:not(:last-of-type)::after {
  content: ",";
}
</style>
