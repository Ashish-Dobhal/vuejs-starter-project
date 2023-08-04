import { render, screen } from "@testing-library/vue"
import { RouterLinkStub } from "@vue/test-utils"
import axios from "axios"
import JobListings from "@/components/job-results/JobListings.vue"

vi.mock("axios")

describe("JobListings", () => {
  it("component is created successfully", () => {
    axios.get.mockResolvedValue({ data: [] })
    renderJobListings()

    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs")
  })

  it("creates a job listing for every job", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })
    renderJobListings()

    const jobListings = await screen.findAllByRole("listitem")
    expect(jobListings.length).toBe(10)
  })

  describe("when params exclude page number", () => {
    it("displays page number 1", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      renderJobListings({ name: "JobResults", query: {} })
      const jobListings = await screen.findByTestId("pagination")
      expect(jobListings.children[2].textContent.trim()).toEqual("1 - 10 of 15 jobs")
    })

    it("disabled the previous btn", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      renderJobListings({ name: "JobResults", query: {} })
      const prevBtn = await (await screen.findByTestId("pagination")).children[1]
      expect(prevBtn.className).toContain("disabled")
    })
  })

  describe("when params include page number", () => {
    it("displays page number in params", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) })
      renderJobListings({ name: "JobResults", query: { page: 2 } })
      const jobListings = await screen.findByTestId("pagination")
      expect(jobListings.children[2].textContent.trim()).toEqual("11 - 15 of 15 jobs")
    })

    describe("and the param is the last page number", () => {
      it("the next btn is disabled", async () => {
        axios.get.mockResolvedValue({ data: Array(15).fill({}) })
        renderJobListings({ name: "JobResults", query: { page: 2 } })
        const nextBtn = await (await screen.findByTestId("pagination")).children[0]
        expect(nextBtn.className).toContain("disabled")
      })
    })
  })
})

function renderJobListings($route = { name: "JobResult", query: {} }) {
  render(JobListings, {
    global: {
      mocks: { $route },
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub
      }
    }
  })
}
