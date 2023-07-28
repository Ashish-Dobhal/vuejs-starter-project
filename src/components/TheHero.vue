<template>
  <main class="pt-10">
    <section class="flex flex-col h-screen pt-10 pb-20 px-">
      <div class="grid grid-col-12">
        <div class="col-span-1 col-start-1">
        </div>
        <div class="col-span-5  col-start-2">
          <the-headline></the-headline>
        </div>
        <div class="col-span-1 col-start-12 border-blue-700">
        </div>

      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "@/components/TheHeadline.vue"
export default {
  name: "TheHero",
  components: { TheHeadline },
  beforeCreate() {
    console.log("componet abt to be created")
  },
  created() {
    console.log("component has been created", this.data)
  },
  beforeMount() {
    console.log("component is abt to be mounted")
  },
  updated() {
    console.log("component has been updated")
  },
  beforeUpdate() {
    console.log("before update")
  },
}
</script>
