<template>
  <h1>{{ jobDetails }}</h1>
</template>
<script>
import axios from "axios"
export default {
  name: "Job View",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return { jobDetails: null }
  },
  async mounted() {
    this.jobDetails = (await axios.get(`http://localhost:3000/jobs/${this.id}`)).data
  }
}
</script>
