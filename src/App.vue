<template>
  <h1 class="m-8 text-6xl text-center">Hello Vue</h1>
</template>

<!-- 
  - styles can leak across the entire component hierarchy if not scoped
  - its not just a parent to child thing its across the component irrespective of the component hierarchy
  - scoped limits styles escaping from this component but doesnt involve styles entering into the component
  - best practise always have scoped component styles
 -->
