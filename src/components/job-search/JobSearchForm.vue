<template>
  <form class="w-full flex h-12 items-center rounded-3xl border border-solid border-brand-gray-3">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class=" relative flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3"></div>
      <label class="absolute left-0 -top-9">Role</label>
      <text-input placeholder="Software engineer" v-model="role"></text-input>
    </div>
    <span class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">in</span>
    <div class=" relative flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3"></div>
      <label class="absolute left-0 -top-9">Where?</label>
      <text-input placeholder="London" v-model="location"></text-input>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl"></action-button>
  </form>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
import TextInput from "@/components/shared/TextInput.vue"
export default {
  name: "JobSearchForm",
  components: { ActionButton, TextInput },
  data() {
    return {
      role: "",
      location: ""
    }
  },
  methods: {
    handleRole(payload) {
      this.role = payload
    },
    handleLocation(payload) {
      this.role = payload
    }
  }
}
</script>

<!-- 
  docs: https://vuejs.org/guide/components/v-model.html#v-model-arguments
  <input v-model="searchText" />
  
  <script setup>
    defineProps(['modelValue'])
    defineEmits(['update:modelValue'])
  </script>

  <CustomInput :modelValue="searchText"
               @update:modelValue="newValue => searchText = newValue"/>

GOTCHA
By default, v-model on a component uses modelValue as the prop and update:modelValue as the event. We can modify these names passing an argument to v-model:
<MyComponent v-model:title="bookTitle" />
<script setup>
defineProps(['title'])
defineEmits(['update:title'])
</script>
 -->