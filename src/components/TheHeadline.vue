<template>
  <section>
    <h1 class="font-extrabold, text-8xl tracking-tighter mb-14 font-bold">
      <span :class="[actionCssClasses]">{{ currentAction }} </span>
      <br />
      <span class="'font-bold', text-8xl text-brand-gray-2">For everyone</span>
    </h1>
    <h2 class="text-4xl text-black">Find your next job at Dobbs Diaries</h2>
  </section>
</template>
<script>
export default {
  data() {
    return {
      allActions: ["Create", "Build", "Design", "Code"],
      currentAction: "Create",
      interval: null
    }
  },
  computed: {
    actionCssClasses() {
      return {
        'text-brand-blue-1': this.currentAction === this.allActions[0],
        'text-brand-green-1': this.currentAction === this.allActions[1],
        'text-orange-600': this.currentAction === this.allActions[2],
        'text-purple-600': this.currentAction === this.allActions[3],
      }
    }
  },
  created() {
    this.interval = setInterval(() => {
      const currentActionIdx = this.allActions.indexOf(this.currentAction)
      const nextActionIdx = (currentActionIdx + 1) % 4
      this.currentAction = this.allActions[nextActionIdx];
    }, 2000);
  },
  unmounted() {
    clearInterval(this.interval)
  }
}
</script>
