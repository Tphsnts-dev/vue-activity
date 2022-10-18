import { createRouter, createWebHistory } from 'vue-router'
import Calculator from '../views/Calculator.vue'
import Stringmanip from '../views/Stringmanip.vue'
import Courseinfo from '../views/Courseinfo.vue'
import Developerinfo from '../views/Developerinfo.vue'
import Rectangle from '../views/Rectangle.vue'
import Circle from '../views/Circle.vue'
import Square from '../views/Square.vue'
import Triangle from '../views/Triangle.vue'
import Axios from '../views/Axios.vue'

const routes = [
  {
    path: '/axios',
    name: 'axios',
    component: Axios
  },
  {
    path: '/courseinfo',
    name: 'courseinfo',
    component: Courseinfo
  },
  {
    path: '/courseinfo',
    name: 'courseinfo',
    component: Courseinfo
  },
  {
    path: '/developerinfo',
    name: 'developerinfo',
    component: Developerinfo
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: Calculator
  },
  {
    path: '/stringmanip',
    name: 'stringmanip',
    component: Stringmanip
  },
  {
    path : '/rectangle',
    name : 'Rectangle',
    component :Rectangle,
  },
  {
    path : '/square',
    name : 'Square',
    component :Square,
  },{
    path : '/triangle',
    name : 'Triangle',
    component :Triangle,
  },{
    path : '/circle',
    name : 'Circle',
    component :Circle,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
