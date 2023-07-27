import { render, screen } from "@testing-library/vue"
import TheSubnavVue from "./TheSubnav.vue"

describe.only("TheSubNav", () => {
  describe("when user is not on the jobs page", () => {
    it("should not display the job count", () => {
      render(TheSubnavVue, {
        data() {
          return { pageName: "Teams" }
        }
      })
      const jobsCount = screen.queryByText(/786 jobs/i)
      expect(jobsCount).not.toBeInTheDocument()
    })
  })

  describe("when user is on the jobs page", () => {
    it("should display the job count", () => {
      render(TheSubnavVue, {
        data() {
          return { pageName: "Jobs" }
        }
      })
      const jobsCount = screen.getByText(/786 jobs/i)
      expect(jobsCount).toBeInTheDocument()
    })
  })
})
