const axios = require("axios")

async function getAllJobs() {
  const url = "http://localhost:3000/jobs"
  const response = await axios.get(url)
  return response.data
}

getAllJobs()

const jobs = 789
console.log(Math.floor(jobs / 10))
