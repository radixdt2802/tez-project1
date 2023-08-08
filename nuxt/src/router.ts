import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [];
import Index from './pages/index.vue'
import { webVital } from "./utils/web-vitals/web-vital";
routes.push(
    { path: '/:pathMatch(.*)*', component: Index,
    }
)
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        el : to.hash,
        top : 94,
        behavior: 'smooth',
      }
    }else
    return { top: 0,behavior: 'smooth' }
  }
});

router.afterEach((to,from)=>{
  webVital.subscribeWebVital();
})
export default router;