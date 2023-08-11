<template lang="pug">
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
export default {
  name: "JobFiltersSidebarOrganisations",
  components: { CollapsibleAccordion }
}
</script>
