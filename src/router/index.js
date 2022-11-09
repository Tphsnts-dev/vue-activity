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
import StartQuiz from '../components/StartQuiz.vue'
import Leaderboards from '../components/Leaderboards.vue'
import tryComponent from '../components/tryComponent.vue'


const routes = [
  
  {
    path: '/tryComponent',
    name: 'tryComponent',
    component: tryComponent
  },
  {
    path: '/axios',
    name: 'axios',
    component: Axios
  },
  {
    path: '/playquiz/:username',
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
  },
  {
    path : '/circle',
    name : 'Circle',
    component :Circle,
  },
  {
    path : '/startquiz',
    name : 'StartQuiz',
    component :StartQuiz,
  },
  {
    path : '/leaderboards',
    name : 'Leaderboards',
    component :Leaderboards,
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
