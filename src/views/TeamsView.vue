<template lang="pug">
header-container
  template(v-slot:title)
    h1 title for the teams view page
  template(v-slot:subTitle)
    h2 subtitle for the teams view page

</template>
<script>
import HeaderContainer from "@/components/shared/HeaderContainer.vue"
export default {
  name: 'TeamsView',
  components: { HeaderContainer }
}
</script>
