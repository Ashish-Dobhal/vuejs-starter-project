<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>

        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img class="h-100 w-100 opacity-60" src="../../../assets/hero_image.png" />
        </div>
        <div class="col-span-1 col-start-12"></div>
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
