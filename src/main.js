import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import _ from 'lodash'
import App from './App.vue'
import MemberLists from './components/MemberLists.vue'
import MemberForm from './components/MemberForm.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

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

const store = new Vuex.Store({
  state: {
    members: []
  },
  mutations: {
    addMember (state, member) {
      state.members.push(member)
    },
    shuffle (state) {
      _(state.members)
      .shuffle()
      .each((member, i) => Vue.set(member, 'ordering', i))
    }
  }
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
