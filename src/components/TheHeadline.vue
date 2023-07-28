<template>
  <section>
    <h1 class="font-extrabold, text-8xl tracking-tighter mb-14 font-bold">
      <span :class="[actionColorClasses]">{{ currentAction }} </span>
      <br />
      <span class="'font-bold', text-8xl text-brand-gray-2">For everyone</span>
    </h1>
    <h2 class="text-4xl text-black">Find your next job at Dobbs Diaries</h2>
  </section>
</template>
<script>
import { nextElementInList } from "@/utils/array-utils"
export default {
  data() {
    return {
      allActions: ["Create", "Build", "Design", "Code"],
      currentAction: "Create",
      interval: null
    }
  },
  computed: {
    actionColorClasses() {
      return {
        [this.currentAction.toLocaleLowerCase()]: true
      }
    }
  },
  created() {
    this.interval = setInterval(() => {
      this.currentAction = nextElementInList(this.allActions, this.currentAction);
    }, 2000);
  },
  unmounted() {
    clearInterval(this.interval)
  }
}
</script>
<style scoped>
.build {
  @apply text-brand-blue-1
}

.code {
  @apply text-brand-green-1
}

.design {
  @apply text-orange-500
}

.create {
  @apply text-purple-500
}
</style>
