import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConsultarTodosView from '../views/ConsultarTodosView.vue'
import ConsultarPorIdView from '../views/ConsultarPorIdView.vue'
import GuardarView from '../views/GuardarView.vue'
import ActualizarView from '../views/ActualizarView.vue'
import ActualizarParcialView from '../views/ActualizarParcialView.vue'
import BorrarView from '../views/BorrarView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false,
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiereAutorizacion: false,
      esPublica: false,
    }
  },
  {
    path: '/consultartodos',
    name: 'consultartodos',
    component: ConsultarTodosView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false,
    }
  },
  {
    path: '/consultarPorId',
    name: 'consultarPorId',
    component: ConsultarPorIdView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false,
    }
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: GuardarView,
    meta: {
      requiereAutorizacion: false,
      esPublica: false,
    }
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: ActualizarView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false,
    }
  },
  {
    path: '/actualizarParcial',
    name: 'actualizarParcial',
    component: ActualizarParcialView,
    meta: {
      requiereAutorizacion: false,
      esPublica: false,
    }
  },
  {
    path: '/borrar',
    name: 'borrar',
    component: BorrarView,
    meta: {
      requiereAutorizacion: true,
      esPublica: false,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* Configuracion del Guardian */
router.beforeEach((to, from, next) => {
  if (to.meta.requiereAutorizacion) {
    /*Le envio a una pagina de login*/
    const estaAutenticado = localStorage.getItem("estaAutenticado", true);
    if (!estaAutenticado) {
      console.log("Redirigiendo al LOGIN");
      next({ name: 'login' })
    }
    else{
      next();
    }

  } else {
    /*Le dejo que pase sin validación */
    console.log("Pase Libre");
    next();
  }
})

export default router
