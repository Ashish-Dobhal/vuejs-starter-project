import { render, screen } from "@testing-library/vue"

import HeaderContainer from "../../../../src/components/shared/HeaderContainer.vue"

describe("HeaderContainer", () => {
  it.only("allows parent component to provide title content", () => {
    render(HeaderContainer, {
      slots: {
        title: "<h2>teams page title</h2>"
      }
    })

    expect(screen.getByText("teams page title")).toBeInTheDocument()
  })

  it.only("allows parent component to provide sub title content", () => {
    render(HeaderContainer, {
      slots: {
        subTitle: "<h3>teams page sub title</h3>"
      }
    })

    expect(screen.getByText("teams page sub title")).toBeInTheDocument()
  })
})
