import HomeView from "@/views/HomeView.vue"
import JobResultsView from "@/views/JobResultsView.vue"
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active-link-class" //if we need to customise the active link class
})

export default router

/**
 * vue 2 router: https://router.vuejs.org/
 * **important** history mode vs hash mode: 
 * https://router.vuejs.org/guide/essentials/history-mode.html#different-history-modes
 * 
 * dynamic routes: https://router.vuejs.org/guide/essentials/dynamic-matching.html
 * 
 * route props: https://router.vuejs.org/guide/essentials/passing-props.html
 *  Why ?
 *  Using $route in your component creates a tight coupling with the route which limits the
 *  flexibility of the component as it can only be used on certain URLs.
 *   While this is not necessarily a bad thing, we can decouple this behavior with a props option:
 *  ``` js
 *    const User = {
      // make sure to add a prop named exactly like the route param
      props: ['id'],
      template: '<div>User {{ id }}</div>'
    }
    
    const routes = [{ path: '/user/:id', component: User, props: true }]
    additionally the props value can be transformed as well
    example
    props: route => ({id: parseInt(route.params.id)})
    * ```
 
  * lazy loading routes: https://router.vuejs.org/guide/advanced/lazy-loading.html
    example:const UserDetails = () => import( './UserDetails.vue')
 
    * navigation guards: https://router.vuejs.org/guide/advanced/navigation-guards.html 
*/
