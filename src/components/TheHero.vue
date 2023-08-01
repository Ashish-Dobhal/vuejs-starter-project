<template>
  <main class="pt-10">
    <section class="h-screen pt-10 pb-20 m-auto lg:max-w-7xl xs:max-w-xl sm:max-w-4xl md:max-w-7xl">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 sm:order-1">
        </div>
        <div class="col-span-7 col-start-2 sm:order-1">
          <the-headline></the-headline>
        </div>
        <div class="col-start-9 col-span-5 content-start sm:order-2 items-center mt-20">
          <img src="../../assets/hero_image.png" class="opacity-60" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from "@/components/TheHeadline.vue"
import JobSearchForm from '@/components/JobSearchForm.vue'
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
