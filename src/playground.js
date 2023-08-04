const axios = require("axios")

async function getAllJobs() {
  const url = "http://localhost:3000/jobs"
  const response = await axios.get(url)
  console.log(response)
}

getAllJobs()
