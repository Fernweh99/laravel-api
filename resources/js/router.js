import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './components/pages/HomePage.vue'
import AboutUs from './components/pages/aboutUs.vue'

Vue.use(VueRouter)

const routes = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes:[
    {path: '/',component: HomePage , name:'home'},
    {path: '/about',component: AboutUs ,name:'about'},
  ]
});
export default routes;