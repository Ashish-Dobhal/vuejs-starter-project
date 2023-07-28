import nextElementInList from "./array-utils"

describe.only("array utils", () => {
  describe("nextElementInList", () => {
    it("locates the next element in list and returns the element", () => {
      const list = ["A", "B", "C", "D", "E", "F"]
      const value = "C"
      expect(nextElementInList(list, value)).toBe("D")
    })
  })
  describe("when element is at the end of the list", () => {
    it("locates next element at the start of the list", () => {
      const list = ["A", "B", "C", "D", "E", "F"]
      const value = "F"
      expect(nextElementInList(list, value)).toBe("A")
    })
  })
  describe("when element is not present in the list", () => {
    it("locates next element at the start of the list", () => {
      const list = ["A", "B", "C", "D", "E", "F"]
      const value = "Z"
      expect(nextElementInList(list, value)).toBe(null)
    })
  })
})
