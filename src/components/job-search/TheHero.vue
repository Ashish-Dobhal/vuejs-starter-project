<template>
  <main class="pt-10">
    <section class="h-screen pt-10 pb-20 m-auto lg:max-w-7xl xs:max-w-xl sm:max-w-4xl md:max-w-7xl">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 sm:order-1">
        </div>
        <div class="col-span-5 col-start-2 sm:order-1">
          <the-headline></the-headline>
        </div>
        <div class="col-start-7 col-span-5  sm:order-2 self-center justify-self-center">
          <!-- course image https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png -->
          <img src="../../../assets/hero_image.png" class="h-80 opacity-60" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "@/components/job-search/TheHeadline.vue"
import JobSearchForm from '@/components/job-search/JobSearchForm.vue'
export default {
  name: "TheHero",
  components: { TheHeadline, JobSearchForm },
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
