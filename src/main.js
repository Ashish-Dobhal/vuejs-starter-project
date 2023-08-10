import { createApp } from "vue"
import "./index.css"
import { createStore } from "vuex"
import { createPinia } from "pinia"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faSearch,
  faLocationDot,
  faBuilding,
  faChartSimple,
  faChevronLeft,
  faChevronRight,
  faAngleUp,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons"

import router from "@/router"
// GOTCHA installed the vscode plugin vetur for this to work. Not sure though
import App from "@/App.vue"
import { store } from "./store"
library.add(
  faSearch,
  faBuilding,
  faLocationDot,
  faChartSimple,
  faChevronLeft,
  faChevronRight,
  faAngleUp,
  faAngleDown
)

// const vuexStore = createStore()
// const piniaStore = createPinia()

/**
 * global component registration https://vuejs.org/guide/components/registration.html
 */

createApp(App)
  .use(router)
  .use(store)
  //.use(piniaStore)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")
