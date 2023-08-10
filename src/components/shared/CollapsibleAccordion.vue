<template lang="pug">
div(class="border-b border-solid-gray-2 py-5" @click="toggleAccordion")
  div(class="flex flex-wrap items-center justify-between cursor-pointer")
    h3(class="text-base font-semibold") {{ headerTitle }}
    font-awesome-icon(:icon="caretIcon") 
  div( class="w-100 mt-5" v-if="isOpened")
    slot Child
    slot(name="notDefault")
</template>

<script>
export default {
  props: {
    headerTitle: {
      required: true,
      type: String,
      default: null
    }
  },
  data() {
    return { isOpened: false }
  },
  computed: {
    caretIcon() {
      return this.isOpened ? ['fas', 'fa-angle-up'] : ['fas', 'fa-angle-down']
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpened = !this.isOpened
    }
  }
}
</script>
