<template>
  <input type="text" :value="value" @input="handleInput" class="w-full text-lg font-normal focus:outline-none" />
</template>
<script>
export default {
  name: "TextInput",
  data() {
    return { value: "" }
  },
  emits: ['handle-input'],
  methods: {
    handleInput($event) {
      this.value = $event.target.value
      this.$emit('handle-input', $event.target.value)
    }
  }
}
</script>