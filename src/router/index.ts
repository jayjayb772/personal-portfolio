import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppLayout from '@/Layouts/AppLayout.vue'
import AboutView from '@/views/AboutView.vue'
import ProjectIndexView from '@/views/ProjectIndexView.vue'
import BskyEventHandlersView from '@/views/Projects/BskyEventHandlersView.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: {title: 'Juniper\'s Portfolio'},
    },
    { path: '/about', component: AboutView, meta: {title: 'About Me'} },
    { path: '/projects', component: ProjectIndexView, meta: {title: 'Projects'}},
    { path: '/projects/bsky-event-handlers', component:BskyEventHandlersView, meta: {title: 'Bsky Event Handlers'} }
  ],
})

export default router
