<template lang="pug">
ul(class="mx-auto")
  li(v-for="spotLight in spotLights" :key="spotLight.id") 
    slot(:spotLight="spotLight")
      h3 {{ spotlight.title }}
</template>

<script>
import axios from "axios"
export default {
  name: 'SpotLight',
  data() {
    return {
      spotLights: []
    }
  },
  async created() {
    const baseUrl = import.meta.env.VITE_APP_API_URL
    const spotLightUrl = `${baseUrl}/spotlights`
    const response = await axios.get(spotLightUrl)
    this.spotLights = response.data
  }
}
</script>
