import { render, screen } from "@testing-library/vue"
import axios from "axios"
import SpotLight from "@/components/job-search/SpotLight.vue"

vi.mock("axios")

describe.only("JobListings", () => {
  const mockSpotlightResponse = (spotLight = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: "1",
          imgLocal: "some image",
          title: "some title",
          description: "some description",
          ...spotLight
        }
      ]
    })
  }
  it("provides image to parent component", async () => {
    mockSpotlightResponse({ imgLocal: "other image" })
    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
                    <h1>{{slotProps.imgUrl}}</h1>
                  </template>`
      }
    })

    const text = await screen.findByText("other image")
    expect(text).toBeInTheDocument()
  })

  it("provides title to parent component", async () => {
    mockSpotlightResponse({ title: "other title" })

    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
                    <h1>{{slotProps.title}}</h1>
                  </template>`
      }
    })

    const text = await screen.findByText("other title")
    expect(text).toBeInTheDocument()
  })

  it("provides dsecription to parent component", async () => {
    mockSpotlightResponse({ description: "other description" })
    render(SpotLight, {
      slots: {
        default: `<template #default="slotProps">
                    <h1>{{slotProps.description}}</h1>
                  </template>`
      }
    })

    const text = await screen.findByText("other description")
    expect(text).toBeInTheDocument()
  })
})
