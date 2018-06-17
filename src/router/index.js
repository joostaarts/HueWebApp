import Vue from 'vue'
import Router from 'vue-router'
import BridgeSelect from '@/components/BridgeSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bridge',
      name: 'BridgeSelect',
      component: BridgeSelect
    }
  ]
})
