<template lang="pug">
div(class="flex flex-col border-solid border-brand-gray-1 bg-white p-4")
  div(class="flex flex-row gap-4")  
    h1 What do you want to do?
    a(class="text-blue-600 font-semibold cursor-pointer" @click.prevent="clearFilters") Clear filters
  collapsible-accordion(headerTitle="Degree")
  collapsible-accordion(headerTitle="Job types")
    h1 placeholder job type text
  job-filters-sidebar-organisations
</template>
<script>
import CollapsibleAccordion from "@/components/shared/CollapsibleAccordion.vue"
import JobFiltersSidebarOrganisations from './JobFiltersSidebarOrganisations.vue'
export default {
  name: "JobResultsSidebar",
  components: { CollapsibleAccordion, JobFiltersSidebarOrganisations },
  methods: {
    clearFilters() {
      console.log("filters cleared. implementation to be added")
    }
  }
}
</script>
