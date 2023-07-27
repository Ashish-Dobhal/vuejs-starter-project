import { render, screen } from "@testing-library/vue"
import MainNav from "@/components/MainNav.vue"
import userEvent from "@testing-library/user-event"

describe("MainNav", () => {
  it("displays company name", () => {
    render(
      MainNav
      // GOTCHA: this leads to a tight coupling bw the component and its tests. ie if the internal name of the data.company change that leads to abroken test thus can be avoided unless required
      //     {
      //     data() {
      //         return { company: "Dobbs Diaries"}
      //     }
      // }
    )
    // the screen.debug() spits out the html for the current screen
    // screen.debug();
    const companyName = screen.getByText("Dobbs Diaries")
    expect(companyName).toBeInTheDocument()
  })

  it("shows all the nav items", () => {
    render(MainNav)
    const navItemsText = screen.getAllByRole("listitem").map((navItem) => navItem.textContent)
    const expectedNavItemsText = [
      "Teams",
      "Location",
      "Life at Dobbs Diaries",
      "How we Hire",
      "Students",
      "Jobs",
      "Sign in"
    ]
    expect(navItemsText).toEqual([
      "Teams",
      "Location",
      "Life at Dobbs Diaries",
      "How we Hire",
      "Students",
      "Jobs",
      "Ashish",
      "Nupur"
    ])
  })

  it("shows the Sign in btn and does not show the profile image when the user is not logged in", () => {
    render(MainNav)

    /* const signInBtn = screen.getByTestId("sign-in-btn") can be used as well but means adding the data-testid field to the relevant dom element. used by twitter fb youtube tx as an industry wide practise
     * interesing read  https://github.com/testing-library/react-testing-library/issues/479
     */

    const signInBtn = screen.getByRole("button", { name: /sign in/i })
    const profilePic = screen.queryByRole("img", { name: /profile pic/i })
    expect(signInBtn).toBeInTheDocument()
    expect(profilePic).not.toBeInTheDocument()
  })

  it("shows the Profile image once user has signed in", async () => {
    render(MainNav)
    const signInBtn = screen.getByRole("button", { name: /sign in/i })
    await userEvent.click(signInBtn)

    const profilePic = screen.getByRole("img", { name: /profile pic/i })
    expect(profilePic).toBeInTheDocument()
  })
})
