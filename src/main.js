import Vue from 'vue'
import App from './App.vue'
import router from './router'

 /* add font awesome icon component */
 Vue.component('font-awesome-icon', FontAwesomeIcon)

  /* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

  /* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

 
  //import fa brands
  import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'

  //import fa solid
   import { faCircleArrowUp,faHouse} from '@fortawesome/free-solid-svg-icons'

   //<font-awesome-icon icon="fa-solid fa-house" />
  

  /* add icons to the library */
  library.add(faGithub,faLinkedin,faCircleArrowUp,faHouse)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
