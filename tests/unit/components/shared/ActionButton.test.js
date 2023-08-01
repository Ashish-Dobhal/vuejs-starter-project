import { render, screen } from "@testing-library/vue"
import ActionButton from "@/components/shared/ActionButton.vue"

describe("ActionButton", () => {
  it("renders text", () => {
    render(ActionButton, {
      props: {
        text: "Click me",
        type: "primary"
      }
    })
    // screen.debug();
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it(`a primary type button contains the primary class name`, () => {
    render(ActionButton, {
      props: {
        text: "Click me",
        type: "primary"
      }
    })
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button.className).toBe("primary")
  })

  it(`a secondary type button contains the secondary class name`, () => {
    render(ActionButton, {
      props: {
        text: "Click me",
        type: "secondary"
      }
    })
    const button = screen.getByRole("button", { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button.className).toBe("secondary")
  })
})
