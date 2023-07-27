<template>
  <!-- v-on:click => @click -->
  <!-- [primary ? 'primary' : '', seondary ? 'secondary' : ''] -->
  <button data-testid="sign-in-btn" :class="buttonClass" @click="signIn">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: false,
      default: "Sign in"
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value)
      }
    }
  },
  computed: {
    buttonClass() {
      return { [this.type]: true };
      // more readble above is a js dynamic property style
      // return {
      //     primary: this.type == 'primary',
      //     secondary: this.type == 'secondary',
      // }
    },
  },
};
</script>
<style scoped>
/* GOTCHA: https://www.codeconcisely.com/posts/tailwind-css-unknown-at-rules/ */
/* https://stackoverflow.com/questions/68147904/adding-a-space-after-colon-using-css-and-html causes issues in adding classes such as hover:text-brand-1 */
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0 bg-brand-blue-1 text-white;
}

.secondary {
  @apply bg-transparent text-brand-blue-1;
}
</style>
