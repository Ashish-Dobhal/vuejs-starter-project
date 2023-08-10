import axios from "axios"
import getJobs from "../../../src/api/getJobs"

vi.mock("axios")
axios.get.mockResolvedValue({
  data: [
    {
      id: 1,
      title: "Java engineer"
    }
  ]
})

describe("getJobs", () => {
  it("fetches job with the correct url", async () => {
    await getJobs()
    expect(axios.get).toBeCalledWith("http://fakeapi.com/jobs")
  })

  it("fetches jobs that candidates can apply to", async () => {
    await getJobs()
    expect(axios.get).toReturn({
      data: [
        {
          id: 1,
          title: "Java engineer"
        }
      ]
    })
  })
})
