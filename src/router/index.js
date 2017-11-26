import Vue from 'vue'
import Router from 'vue-router'
import maina from "@/components/main/index";

import { provinceRouterMap } from './province'
import { cityRouterMap } from './city'
import { userRouterMap } from './user'
import { agent1RouterMap } from './agent1'
import { agent2RouterMap } from './agent2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'maina',
      component: maina,
      redirect: '/login',
      children: [
        ...provinceRouterMap,
        ...cityRouterMap,
        ...agent1RouterMap,
        ...agent2RouterMap,
      ]
    },

    ...userRouterMap,


  ]
})
