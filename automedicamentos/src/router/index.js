import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistroView from '../views/RegistroView.vue'
import MedicamentosView from '../views/MedicamentosView.vue'
import FacturaView from '../views/FacturaView.vue'
import CDView from '../views/CDView.vue'
import MaquinaView from '../views/MaquinaView.vue'
import EpsView from '../views/EpsView.vue'
import RelacionView from '../views/RelacionView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registro',
    name: 'registro',
    component: RegistroView
  },
  {
    path: '/medicamentos',
    name: 'medicamentos',
    component: MedicamentosView
  },
  {
    path: '/factura',
    name: 'factura',
    component: FacturaView
  },
  {
    path: '/cd',
    name: 'cd',
    component: CDView
  },
  {
    path: '/maquina',
    name: 'maquina',
    component: MaquinaView
  },
  {
    path: '/eps',
    name: 'eps',
    component: EpsView
  },
  {
    path: '/relacion',
    name: 'relacion',
    component: RelacionView
  },
  {
    path: '/about',
    name: 'about',
    
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
