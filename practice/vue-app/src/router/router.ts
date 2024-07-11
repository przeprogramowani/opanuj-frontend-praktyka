import { createRouter, createWebHistory } from 'vue-router';
import SolverView from '../module1/solver/views/SolverView.vue';
import HomeView from '../views/HomeView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/solver', name: 'Solver', component: SolverView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
