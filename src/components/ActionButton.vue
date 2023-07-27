<template>
    <!-- v-on:click => @click -->
    <button data-testid="sign-in-btn" @click="signIn"
        class="rounded bg-brand-blue-1 px-5 py-3 font-medium text-white hover:shadow-blue-800">{{ label }} </button>
</template>
<script>
export default {
    name: "ActionButton",
    data() {
        return {
            signedIn: false,
            label: 'Sign in'
        }
    },
    methods: {
        //  this was rmed in favour of click handler on the component itself in the calling parent component
        signIn(event) {
            return
            // this.$emit('signIn')
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
  