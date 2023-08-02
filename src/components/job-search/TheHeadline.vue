<template>
  <section class="w-fit bg-red mb-16">
    <h1 class="font-bold text-8xl tracking-tighter mb-14 w-fit">
      <span :class="[actionColorClasses]">{{ currentAction }} </span>
      <br />
      <span class="font-bold text-8xl text-brand-black-1">For everyone</span>
    </h1>
    <h2 class="xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl  text-black">Find your next job at Dobbs Diaries</h2>
  </section>
</template>
<script>
import nextElementInList from "@/utils/array-utils"
import JobSearchForm from "@/components/job-search/JobSearchForm.vue"

export default {
  components: { JobSearchForm },
  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
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
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        this.currentAction = nextElementInList(this.allActions, this.currentAction);
      }, 2000);
    }
  },
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
