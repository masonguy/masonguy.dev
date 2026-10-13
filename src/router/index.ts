import { createRouter, createWebHistory } from 'vue-router'
import RideView from '@/views/RideView.vue'
import WorkView from '@/views/WorkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'ride', component: RideView },
    { path: '/work', name: 'work', component: WorkView },
    { path: '/ride', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
