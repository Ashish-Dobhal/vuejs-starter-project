import TheHeadline from "@/components/TheHeadline.vue"
import { render, screen } from "@testing-library/vue"
import { vi } from "vitest"
import { nextTick } from "vue"
describe.only("The Headline", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it("displays the introductory action verbs", () => {
    render(TheHeadline)
    const actionPhrase = screen.getByRole("heading", { name: /create for everyone/i })
    expect(actionPhrase).toBeInTheDocument()
  })

  it("changes the introductoty action verb at the correct interval", () => {
    const mock = vi.fn()
    vi.stubGlobal("setInterval", mock)
    render(TheHeadline)
    expect(mock).toHaveBeenCalled()
  })

  it("swaps the action verbs after interval", async () => {
    render(TheHeadline)
    vi.advanceTimersToNextTimer()
    await nextTick()
    const actionPhrase = screen.getByRole("heading", { name: /build for everyone/i })
    expect(actionPhrase).toBeInTheDocument()
  })

  it("removes interval when component disappears", () => {
    const clearInterval = vi.fn()
    vi.stubGlobal("clearInterval", clearInterval)

    const { unmount } = render(TheHeadline)
    unmount()
    expect(clearInterval).toHaveBeenCalled()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })
})
