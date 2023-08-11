import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"
import CollapsibleAccordion from "../../../../src/components/shared/CollapsibleAccordion.vue"

describe.only("Collapsible Accordion", () => {
  const renderAccordionComponent = (config = {}) => {
    render(CollapsibleAccordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      },
      props: {
        headerTitle: "Category"
      },
      slots: {
        default: "<h3> my nested child</h3>"
      },
      ...config
    })
  }

  it("renders child content", async () => {
    const config = {
      props: { headerTitle: "Category" },
      slots: { default: `<h3>my nested child content</h3>` }
    }

    renderAccordionComponent(config)
    expect(screen.queryByText(`my nested child content`)).not.toBeInTheDocument()
    const button = screen.getByRole("button", { name: "Category" })
    await userEvent.click(button)
    expect(screen.queryByText(`my nested child content`)).toBeInTheDocument()
  })

  describe("when parent does not provide a custom child component", () => {
    it("displays the fallaback content", async () => {
      const config = {
        props: { headerTitle: "Category" },
        slots: null
      }
      renderAccordionComponent(config)
      const button = screen.getByRole("button", { name: "Category" })
      await userEvent.click(button)
      expect(screen.queryByText(`fallback content`)).toBeInTheDocument()
    })
  })
})
