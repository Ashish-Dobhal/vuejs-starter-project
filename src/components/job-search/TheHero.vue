<template>
  <main>
    <section class="flex flex-col pb-20 pt-28 mx-auto my-0" style="max-width: 1440px;">
      <div class="grid grid-cols-24">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-10 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-start-12 col-span-2"></div>
        <div class=" col-start-14 col-span-10 self-center justify-self-center">
          <img class="opacity-60 w-100 h-100" src="../../../assets/hero_image_1.png" />
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
