
<template>
  <MainNav />
</template>
<script>
import MainNav from '@/components/MainNav.vue';
export default {
  name: "App",
  components: {
    MainNav
  }
}
</script>
<!-- 
  - styles can leak across the entire component hierarchy if not scoped
  - its not just a parent to child thing its across the component irrespective of the component hierarchy
  - scoped limits styles escaping from this component but doesnt involve styles entering into the component
  - best practise always have scoped component styles
 -->
