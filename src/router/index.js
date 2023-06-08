import Vue from 'vue'
import VueRouter from 'vue-router'

// import QueryProcessing from "@/views/QueryProcessing.vue"
import Search from "@/views/Search.vue"
import DataPer from "@/views/DataPre.vue"
import Inverted from "@/views/Inverted.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/data-pre',
    name: 'data-pre',
    component: DataPer
  },
  {
    path: '/inverted',
    name: 'inverted',
    component: Inverted
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
