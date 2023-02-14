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
   import { faCircleArrowUp,} from '@fortawesome/free-solid-svg-icons'
  

  /* add icons to the library */
  library.add(faGithub,faLinkedin,faCircleArrowUp,)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
