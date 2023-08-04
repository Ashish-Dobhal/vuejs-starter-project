import { render, screen } from "@testing-library/vue"
import JobListing from "@/components/job-results/JobListing.vue"
import { RouterLinkStub } from "@vue/test-utils"

describe("JobListing", () => {
  const renderJobListing = (jobProps = {}) => {
    render(JobListing, {
      props: {
        job: { ...TEST_JOB_LISTING, ...jobProps }
      },
      global: {
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub
        }
      }
    })
  }

  it("renders job title", () => {
    renderJobListing()
    const title = screen.getByText(TEST_JOB_LISTING.title)
    expect(title).toBeInTheDocument
  })

  it("renders job organisation", () => {
    renderJobListing()
    const organisation = screen.getByText(TEST_JOB_LISTING.organization)
    expect(organisation).toBeInTheDocument
  })

  it("renders job locations", () => {
    renderJobListing({ locations: ["Bangalore", "Dehradun"] })
    const bangalore = screen.getByText("Bangalore")
    const dehradun = screen.getByText("Dehradun")

    expect(bangalore).toBeInTheDocument()
    expect(dehradun).toBeInTheDocument()
  })

  it("renders job min qualifications", () => {
    renderJobListing({
      minimumQualifications: ["Code"]
    })
    const minQualification = screen.getByText("Code")
    expect(minQualification).toBeInTheDocument()
  })
})

const TEST_JOB_LISTING = {
  id: 1,
  title: "Angular Developer",
  organization: "Vue and Me",
  degree: "Master's",
  jobType: "Intern",
  locations: ["Lisbon"],
  minimumQualifications: [
    "Mesh granular deliverables, engineer enterprise convergence, and synergize B2C initiatives",
    "Morph bricks-and-clicks relationships, whiteboard one-to-one experiences, and innovate distributed schemas",
    "Drive intuitive deliverables, exploit vertical users, and optimize interactive e-commerce",
    "Embrace sticky infrastructures, incubate B2C portals, and drive killer applications"
  ],
  preferredQualifications: [
    "Mesh wireless metrics, syndicate innovative markets, and disintermediate intuitive niches",
    "Matrix next-generation vortals, cultivate virtual relationships, and unleash wireless platforms",
    "Brand granular roi, transform mission-critical users, and target value-added models",
    "Envisioneer b2b web services, aggregate clicks-and-mortar architectures, and target synergistic initiatives"
  ],
  description: [
    "Away someone forget effect wait land.",
    "State even create can either. Character almost turn idea born its to. Understand ability another lose. Smile interesting claim difference.",
    "Author act increase worry yeah. Positive medical shake include serious check state."
  ],
  dateAdded: "2021-07-04"
}
