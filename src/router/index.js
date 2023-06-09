import Vue from 'vue'
import VueRouter from 'vue-router'

// import QueryProcessing from "@/views/QueryProcessing.vue"
import Result from "@/views/Result.vue"
import DataPer from "@/views/DataPre.vue"
import Inverted from "@/views/Inverted.vue"
import QueryIndexing from "@/views/QueryIndexing.vue"
import QueryProcessing from "@/views/QueryProcessing.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/result',
    name: 'result',
    component: Result
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
  {
    path: '/query-indexing',
    name: 'query-indexing',
    component: QueryIndexing
  },
  {
    path: '/query-processing',
    name: 'query-processing',
    component: QueryProcessing
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
