import { render, screen } from "@testing-library/vue"
import { RouterLinkStub } from "@vue/test-utils"
import axios from "axios"
import JobListings from "@/components/job-results/JobListings.vue"

vi.mock("axios")

describe("JobListings", () => {
  it("component is created successfully", () => {
    axios.get.mockResolvedValue({ data: [] })
    render(JobListings)
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs")
  })

  it("creates a job lsiting for every job", async () => {
    axios.get.mockResolvedValue({ data: Array(10).fill({}) })
    render(JobListings, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })

    const jobListings = await screen.findAllByRole("listitem")
    expect(jobListings.length).toBe(10)
  })
})
