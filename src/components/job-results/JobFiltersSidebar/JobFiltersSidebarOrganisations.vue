<template lang="pug">
collapsible-accordion(headerTitle="Organisations")
  div(class="mt-5")
    fieldset
      ul(class="flex flex-row flex-wrap")
        li(class="h-8 w-1/2" v-for="org in organisations" :key="org")
          input(:id="org", :value="org" type="checkbox" class="mr-3" v-model="checkedOrganisations" @change="onJobCheck($event)")
          label( :for="org") {{ org }}
    
</template>
<script>
import CollapsibleAccordion from "@/components/shared/CollapsibleAccordion.vue"
import { mapGetters, mapActions } from 'vuex'
import { UPDATE_ORG_FILTERS } from '@/store/actions.constants'
export default {
  name: "JobFiltersSidebarOrganisations",
  components: { CollapsibleAccordion },
  data() {
    return { checkedOrganisations: [] }
  },
  computed: {
    ...mapGetters("jobs", ["organisations"])
  },
  methods: {
    ...mapActions('jobs', [UPDATE_ORG_FILTERS]),
    onJobCheck(event) {
      this.UPDATE_ORG_FILTERS(this.checkedOrganisations)
    }
  }
}
</script>
