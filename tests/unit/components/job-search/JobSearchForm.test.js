import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"
import { RouterLinkStub } from "@vue/test-utils"
import JobSearchForm from "@/components/job-search/JobSearchForm.vue"

describe("JobSearchForm", () => {
  describe("when user submits the job search form", () => {
    it.only("directs user to the job search page with user's search preferences as query params", async () => {
      const push = vi.fn()
      const $router = { push }
      render(JobSearchForm, {
        global: {
          mocks: {
            $router
          },
          stubs: {
            FontAwesomeIcon: true,
            RouterLink: RouterLinkStub
          }
        }
      })
      const submitBtn = screen.getByRole("button", { name: /Search/i })
      const roleInput = screen.getByRole("textbox", { name: /role/i })
      const locationInput = screen.getByRole("textbox", { name: /where?/i })
      await userEvent.type(roleInput, "Engineer")
      await userEvent.type(locationInput, "London")
      await userEvent.click(submitBtn)
      expect($router.push).toHaveBeenCalledWith({
        name: "JobResults",
        query: { role: "Engineer", location: "London" }
      })
    })
  })
})
