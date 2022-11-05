import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registro from '../views/Registro.vue'
import Medicamentos from '../views/Medicamentos.vue'
import Factura from '../views/Factura.vue'
import CD from '../views/CD.vue'
import Maquina from '../views/Maquina.vue'
import Eps from '../views/Eps.vue'
//import Relacion from '../paginas/Relacion.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'registro',
    component: Registro
  },
  {
    path: '/',
    name: 'medicamentos',
    component: Medicamentos
  },
  {
    path: '/',
    name: 'factura',
    component: Factura
  },
  {
    path: '/',
    name: 'cd',
    component: CD 
  },
  {
    path: '/',
    name: 'maquina',
    component: Maquina
  },
  {
    path: '/',
    name: 'eps',
    component: Eps 
  },
  {
    path: '/relacion',
    name: 'relacion',

    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Relacion.vue')
    }
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
