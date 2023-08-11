<template lang="pug">
header-container
  template(#title)
    h1(class="font-bold text-5xl mb-5 text-blue-700") Teams
  template(#subTitle)
    h2(class="font-semibold text-3xl text-green-500") If you want the thrill of a startup come join us?
</template>
<script>
import HeaderContainer from "@/components/shared/HeaderContainer.vue"
export default {
  name: 'TeamsView',
  components: { HeaderContainer }
}
</script>
