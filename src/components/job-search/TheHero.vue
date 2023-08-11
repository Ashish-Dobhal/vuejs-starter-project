<template lang="pug">
main( class="flex h-screen flex-col")
  section(class="pb-20 pt-28 mx-auto my-0" style="max-width: 1440px;")
    div( class="grid grid-cols-24")
      div( class="col-span-1 col-start-1")
      div( class="col-span-10 col-start-2")
        the-headline
        job-search-form
      div( class="col-start-12 col-span-2")
      div( class=" col-start-14 col-span-10 self-center justify-self-center")
        img( class="opacity-60 w-100 h-100" src="../../../../assets/hero_image_1.png")
  spot-light(class="flex flex-row pb-16")
    template(#default="{title, description, imgUrl}")
      router-link(to="/job/results" class="mx-5 flex flex-col h-96 w-72 rounded-lg border bg-brand-gray-2")
        img(class="object-contain" :src="imgUrl")
        div(class="mt-3 h-48 px-6 py-4")
          h3(class="text-lg font-medium") {{ title }}
          p(class="mt-3 text-sm") {{ description }}
        router-link(to="/job/results" class="px-6 pb-4 text-sm text-brand-blue-1") See jobs

</template>

<script>
import TheHeadline from "@/components/job-search/TheHeadline.vue"
import JobSearchForm from '@/components/job-search/JobSearchForm.vue'
import SpotLight from "@/components/job-search/SpotLight.vue"

export default {
  name: "TheHero",
  components: { TheHeadline, JobSearchForm, SpotLight },
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
