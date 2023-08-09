/**
 * FIXME: the tests in this file needs to be fixed to supporrt updating the store state.
 * set page number to 2 and then update the tests to test for last page and first page next and prev btn apperence
 */
import { render, screen } from "@testing-library/vue"
import { RouterLinkStub } from "@vue/test-utils"
import axios from "axios"
import JobListings from "@/components/job-results/JobListings.vue"
import { mockStore } from "../../stores/helpers"
vi.mock("axios")

describe("JobListings", () => {
  it("component is created successfully", () => {
    axios.get.mockResolvedValue({ data: [] })
    renderJobListings()
  })

  it("creates a job listing for every job", async () => {
    renderJobListings()
    const jobListings = await screen.findAllByTestId("job-listing")
    expect(jobListings.length).toBe(6)
  })

  describe("when params exclude page number", () => {
    it("displays page number 1", async () => {
      renderJobListings({ name: "JobResults", query: {} })
      const jobListings = await screen.findByTestId("pagination")
      expect(jobListings.children[2].textContent.trim()).toEqual("1 - 6 of 6 jobs")
    })

    it("disabled the previous btn", async () => {
      renderJobListings({ name: "JobResults", query: {} })
      const prevPageBtn = await (await screen.findByTestId("pagination")).children[1]
      expect(prevPageBtn.className).toContain("disabled")
    })
  })

  describe("when params include page number", () => {
    it("displays the page number", async () => {
      renderJobListings({ name: "JobResults", query: { page: 1 } })
      const jobListings = await screen.findByTestId("pagination")
      expect(jobListings.children[2].textContent.trim()).toEqual("1 - 6 of 6 jobs")
    })
  })

  describe("when the user is on the first page", () => {
    it("the prev btn is disabled", async () => {
      renderJobListings({ name: "JobResults", query: { page: 1 } })
      const prevPageBtn = (await screen.findByTestId("pagination")).children[1]
      expect(prevPageBtn.className).toContain("disabled")
    })
  })

  describe("when the user is on the last page", () => {
    it("the next btn is disabled", async () => {
      renderJobListings({ name: "JobResults", query: { page: 1 } })
      const nextPageBtn = (await screen.findByTestId("pagination")).children[0]
      expect(nextPageBtn.className).toContain("disabled")
    })
  })
})

function renderJobListings($route = { name: "JobResult", query: {} }) {
  render(JobListings, {
    global: {
      mocks: { $route },
      plugins: [mockStore],
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub
      }
    }
  })
}
