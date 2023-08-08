import { expect } from "chai"
import { mutations } from "../stores/userStore"

// destructure assign `mutations`
const { increment } = mutations

describe("mutations", () => {
  it("INCREMENT", () => {
    // mock state
    const state = { count: 0 }
    // apply mutation
    increment(state)
    // assert result
    expect(state.count).to.equal(1)
  })
})
