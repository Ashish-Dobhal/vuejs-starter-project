import HomeView from "@/views/HomeView.vue"
import JobResultsView from "@/views/JobResultsView.vue"
import JobView from "@/views/JobView.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: HomeView,
    // component: () => import("@/views/HomeView.vue"), lazy loading route
    name: "Home"
  },
  {
    path: "/job/results",
    component: JobResultsView,
    name: "JobResults"
  },
  {
    path: "/job/results/:id",
    name: "JobView",
    component: JobView,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active-link-class", //if we need to customise the active link class
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" }
  }
})

export default router
