import Vue from 'vue'
import Router from 'vue-router'
import BridgeSelect from '@/components/BridgeSelect'
import huesystem from '@/components/huesystem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BridgeSelect',
      component: BridgeSelect
    },
    {
      path: '/huesystem',
      name: 'huesystem',
      component: huesystem,
      props: true
    }
  ]
})
