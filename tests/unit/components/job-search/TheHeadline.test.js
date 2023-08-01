import TheHeadline from "@/components/job-search/TheHeadline.vue"
import { render, screen } from "@testing-library/vue"
import { vi } from "vitest"
import { nextTick } from "vue"
describe.only("The Headline", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it("displays the introductory action verbs", () => {
    render(TheHeadline, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
    const actionPhrase = screen.getByRole("heading", { name: /create for everyone/i })
    expect(actionPhrase).toBeInTheDocument()
  })

  it("changes the introductory action verb at the correct interval", () => {
    const mock = vi.fn()
    vi.stubGlobal("setInterval", mock)
    render(TheHeadline, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
    expect(mock).toHaveBeenCalled()
  })

  it("swaps the action verbs after interval", async () => {
    render(TheHeadline, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
    vi.advanceTimersToNextTimer()
    await nextTick()
    const actionPhrase = screen.getByRole("heading", { name: /build for everyone/i })
    expect(actionPhrase).toBeInTheDocument()
  })

  it("removes interval when component disappears", () => {
    const clearInterval = vi.fn()
    vi.stubGlobal("clearInterval", clearInterval)

    const { unmount } = render(TheHeadline, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
    unmount()
    expect(clearInterval).toHaveBeenCalled()
  })
  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })
})
