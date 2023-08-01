<template>
  <form class="w-full flex h-12 items-center rounded-3xl border border-solid border-brand-gray-3">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class=" relative flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3"></div>
      <label class="absolute left-0 -top-9">Role</label>
      <input type="text" v-model="role" placeholder="Software engineer"
        class="w-full text-lg font-normal focus:outline-none" />
    </div>
    <span class="flex items-center h-full border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3">in</span>
    <div class=" relative flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center pr-3"></div>
      <label class="absolute left-0 -top-9">Where?</label>
      <input type="text" v-model="location" placeholder="London" class="w-full text-lg font-normal focus:outline-none" />
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl"></action-button>
  </form>
</template>

<script>
import ActionButton from '@/components/shared/ActionButton.vue';
export default {
  name: "JobSearchForm",
  components: { ActionButton },
  data() {
    return {
      role: "",
      location: ""
    }
  }
}
</script>