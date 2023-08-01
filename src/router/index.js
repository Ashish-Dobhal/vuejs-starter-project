import HomeView from "@/views/HomeView.vue"
import JobResultsView from "@/views/JobResultsView.vue"
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: HomeView,
    name: "Home"
  },
  {
    path: "/job/results",
    component: JobResultsView,
    name: "JobResults"
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
