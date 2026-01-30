import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultarTodosView from '../views/ConsultarTodosView.vue'
import ConsultarPorIdView from '../views/ConsultarPorIdView.vue'
import GuardarView from '../views/GuardarView.vue'
import ActualizarView from '../views/ActualizarView.vue'
import ActualizarParcialView from '../views/ActualizarParcialView.vue'
import BorrarView from '../views/BorrarView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/consultartodos',
    name: 'consultartodos',
    component: ConsultarTodosView
  },
  {
    path: '/consultarPorId',
    name: 'consultarPorId',
    component: ConsultarPorIdView
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: GuardarView
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: ActualizarView
  },
  {
    path: '/actualizarParcial',
    name: 'actualizarParcial',
    component: ActualizarParcialView
  },
  {
    path: '/borrar',
    name: 'borrar',
    component: BorrarView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
