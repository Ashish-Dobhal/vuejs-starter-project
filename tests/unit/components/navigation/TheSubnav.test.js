import { render, screen } from "@testing-library/vue"
import TheSubnavVue from "@/components/navigation/TheSubnav.vue"

describe("TheSubNav", () => {
  describe("when user is not on the jobs page", () => {
    it("should not display the job count", () => {
      renderSubNav("Home")
      const jobsCount = screen.queryByText(/786 jobs/i)
      expect(jobsCount).not.toBeInTheDocument()
    })
  })

  describe("when user is on the jobs page", () => {
    it("should display the job count", () => {
      renderSubNav("JobResults")
      const jobsCount = screen.getByText(/786 jobs/i)
      expect(jobsCount).toBeInTheDocument()
    })
  })
})

// the route name must match one of the names as defined in the apps routing

function renderSubNav(routeName) {
  const $route = { name: routeName }
  render(TheSubnavVue, {
    global: {
      mocks: {
        $route
      },
      stubs: {
        FontAwesomeIcon: true
      }
    }
  })
}
