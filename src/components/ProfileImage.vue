<template>
  <img data-testid="profile-image" @click="signOut" :src="src" :alt="alt" class="h-10 rounded-3xl object-contain" />
</template>
<script>
export default {
  name: "ProfileImage",
  props: ['src', 'alt'],
  methods: {
    signOut(event) {
      //  this was rmed in favour of click handler on the component itself in the calling parent component
      return
      //this.$emit('signOut')
    }
  }
}
</script>
<!-- 
  - styles can leak across the entire component hierarchy if not scoped
  - its not just a parent to child thing its across the component irrespective of the component hierarchy
  - scoped limits styles escaping from this component but doesnt involve styles entering into the component
  - best practise always have scoped component styles
 -->
