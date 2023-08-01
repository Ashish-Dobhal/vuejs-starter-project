
<template>
  <main-nav />
  <router-view />
</template>
<script>
/**
* - Each *.vue file can contain at most one < script > block(excluding < script setup >).
- The script is executed as an ES Module.
- The default export should be a Vue component options object, either as a plain object or as the return value of defineComponent.  
- setup https://stackoverflow.com/questions/69597342/using-script-setup-in-vuejs-2-x (vue js 2 compiler does it thus no concept of script)
*/

/**
 * default exports gotcha https://stackoverflow.com/questions/46913851/why-and-when-to-use-default-export-over-named-exports-in-es6-modules
 * default export imports can be referenced by any name the programmer decides on
 */
import MainNav from '@/components/navigation/MainNav.vue';
import TheHero from './components/job-search/TheHero.vue';
export default {
  name: "App",
  components: {
    MainNav,
    TheHero
  }
}
</script>
<!-- 
  - styles can leak across the entire component hierarchy if not scoped
  - its not just a parent to child thing its across the component irrespective of the component hierarchy
  - scoped limits styles escaping from this component but doesnt involve styles entering into the component
  - best practise always have scoped component styles
 -->
