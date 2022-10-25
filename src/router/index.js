import { createRouter, createWebHistory } from 'vue-router'
import Calculator from '../components/Calculator.vue'
import Stringmanip from '../components/Stringmanip.vue'
import Courseinfo from '../components/Courseinfo.vue'
import Developerinfo from '../components/Developerinfo.vue'
import Rectangle from '../components/Rectangle.vue'
import Circle from '../components/Circle.vue'
import Square from '../components/Square.vue'
import Triangle from '../components/Triangle.vue'
import Axios from '../components/Axios.vue'
import Playquiz from '../components/Playquiz.vue'

const routes = [
  {
    path: '/axios',
    name: 'axios',
    component: Axios
  },
  {
    path: '/playquiz',
    name: 'playquiz',
    component: Playquiz
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
