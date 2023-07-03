import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/EducationView.vue'),
    props: true
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('../views/SkillsView.vue'),
    props: true
  },
  {
    path: '/projects',
    name: 'skills',
    component: () => import('../views/ProjectsView.vue'),
    props: true
  },
 

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
