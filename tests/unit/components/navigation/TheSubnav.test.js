import { render, screen } from "@testing-library/vue"
import TheSubnavVue from "@/components/navigation/TheSubnav.vue"

describe("TheSubNav", () => {
  describe("when user is not on the jobs page", () => {
    it("should not display the job count", () => {
      renderSubNav("Teams")
      const jobsCount = screen.queryByText(/786 jobs/i)
      expect(jobsCount).not.toBeInTheDocument()
    })
  })

  describe("when user is on the jobs page", () => {
    it("should display the job count", () => {
      renderSubNav("Jobs")
      const jobsCount = screen.getByText(/786 jobs/i)
      expect(jobsCount).toBeInTheDocument()
    })
  })
})
function renderSubNav(pageName = "Jobs") {
  render(TheSubnavVue, {
    global: {
      stubs: {
        FontAwesomeIcon: true
      }
    },
    data() {
      return { pageName }
    }
  })
}
