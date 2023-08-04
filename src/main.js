import { createApp } from "vue"
import "./index.css"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faSearch,
  faLocationDot,
  faBuilding,
  faChartSimple,
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons"

import router from "@/router"
// GOTCHA installed the vscode plugin vetur for this to work. Not sure though
import App from "@/App.vue"
library.add(faSearch, faBuilding, faLocationDot, faChartSimple, faChevronLeft, faChevronRight)

/**
 * global component registration https://vuejs.org/guide/components/registration.html
 */

createApp(App).use(router).component("font-awesome-icon", FontAwesomeIcon).mount("#app")
