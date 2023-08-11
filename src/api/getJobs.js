import axios from "axios"

const getJobs = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL
  const jobsUrl = `${baseUrl}/jobs`
  const response = await axios.get(jobsUrl)
  return response.data
}

export default getJobs
