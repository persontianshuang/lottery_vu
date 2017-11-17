import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main/index'

import province_bar1 from '@/components/province/bar1/index'
import city_bar1 from '@/components/city/bar1/index'
import agent1_bar1 from '@/components/agent.1/bar1/index'
import agent2_bar1 from '@/components/agent.2/bar1/index'



Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'main',
    //   component: main
    // },

    {
      path: '/province_bar1',
      // name: 'province_bar1',
      component: province_bar1
    },
    {
      path: '/city_bar1',
      // name: 'city_bar1',
      component: city_bar1
    },
    {
      path: '/agent1_bar1',
      // name: 'agent1_bar1',
      component: agent1_bar1
    },







  ]
})
