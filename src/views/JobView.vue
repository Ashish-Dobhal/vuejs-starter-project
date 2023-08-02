<template>
  <h1>Job Details for job {{ id }}</h1>
</template>
<script>
export default {
  name: "Job View",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted() {
    console.log(this.id)
  }
}
</script>
