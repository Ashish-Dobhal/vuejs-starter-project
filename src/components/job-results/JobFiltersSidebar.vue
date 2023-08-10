<template lang="pug">
div(class="flex flex-col border-solid border-brand-gray-1 bg-white p-4")
  div(class="flex flex-row gap-4")  
    h1 What do you want to do?
    a(class="text-blue-600 font-semibold cursor-pointer" @click.prevent="clearFilters") Clear filters
  collapsible-accordion(headerTitle="Job types")
    h1 placeholder job type text
  collapsible-accordion(headerTitle="Organisations")
    div(class="mt-5")
      fieldset
        ul(class="flex flex-row flex-wrap")
          li(class="h-8 w-1/2")
            input(id="VueTube", type="checkbox" class="mr-3")
            label( for="VueTube") VueTube
          li(class="h-8 w-1/2")
            input(id="Et Vue Brute", type="checkbox" class="mr-3")
            label( for="Et Vue Brute") Et Vue Brute
          li(class="h-8 w-1/2")
            input(id="VueMaps", type="checkbox" class="mr-3")
            label( for="VueMaps") VueMaps
          li(class="h-8 w-1/2")
            input(id="Vuesheets", type="checkbox" class="mr-3")
            label( for="Vuesheets") Vuesheets

</template>
<script>
import CollapsibleAccordion from "@/components/shared/CollapsibleAccordion.vue"
import ActionButton from "@/components/shared/ActionButton.vue"
export default {
  name: "JobResultsSidebar",
  components: { CollapsibleAccordion, ActionButton },
  methods: {
    clearFilters() {
      console.log("filters cleared. implementation to be added")
    }
  }
}
</script>
