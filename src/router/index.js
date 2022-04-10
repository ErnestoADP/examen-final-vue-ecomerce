import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Cerrar_sesion from '../views/Cerrar_sesion.vue'
import Iniciar_sesion from '../views/Iniciar_sesion.vue'
import Registrate from '../views/Registrate.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/aboutview',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/cerrar_sesion',
        name: 'Cerrar_sesion',
        component: Cerrar_sesion
    },
    {
        path: '/iniciar_sesion',
        name: 'Iniciar_sesion',
        component: Iniciar_sesion
    },
    {
        path: '/registrate',
        name: 'Registrate',
        component: Registrate
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router