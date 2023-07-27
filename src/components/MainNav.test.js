import { render, screen } from "@testing-library/vue"
import MainNav from "@/components/MainNav.vue"

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
    render(MainNav, {
      data() {
        return { signedIn: false }
      }
    })
    const signInBtn = screen.getByTestId("sign-in-btn")
    const profilePic = screen.queryByTestId("profile-pic")

    expect(signInBtn).toBeInTheDocument()
    expect(profilePic).not.toBeInTheDocument()
  })

  it("shows the Profile image and does not show the sign in btn when the user is logged in", () => {
    render(MainNav, {
      data() {
        return { signedIn: true }
      }
    })

    const profilePic = screen.getByTestId("profile-image")
    const signInBtn = screen.queryByTestId("sign-in-btn")
    expect(profilePic).toBeInTheDocument()
    expect(signInBtn).not.toBeInTheDocument()
  })
})
