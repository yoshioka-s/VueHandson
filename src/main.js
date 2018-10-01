import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import App from './App.vue'
import MemberLists from './components/MemberLists.vue'
import MemberForm from './components/MemberForm.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    name: 'memberLists',
    path: '/',
    component: MemberLists
  }, {
    name: 'memberForm',
    path: '/form',
    component: MemberForm
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
