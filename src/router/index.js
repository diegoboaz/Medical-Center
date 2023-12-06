import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "@/stores/AuthStore";
// ViewComponents
import LoginView from '@/views/auth/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import ExamView from '../views/ExamView.vue'
import ConsultView from '../views/ConsultView.vue'
import RemedyView from '../views/RemedyView.vue'
import GlucoseView from '../views/GlucoseView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: 'dashboard-layout', requiresAuth: true, },
    },

    {
      path: '/exames',
      name: 'exames',
      component: ExamView,
      meta: { layout: 'dashboard-layout', requiresAuth: true, },
    },
    {
      path: '/consultas',
      name: 'consultas',
      component: ConsultView,
      meta: { layout: 'dashboard-layout', requiresAuth: true, },
    },
    {
      path: '/medicamentos',
      name: 'medicamentos',
      component: RemedyView,
      meta: { layout: 'dashboard-layout', requiresAuth: true, },
    },
    {
      path: '/medir-glicose',
      name: 'medir-glicose',
      component: GlucoseView,
      meta: { layout: 'dashboard-layout', requiresAuth: true, },
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)*',
      component: NotFoundView
    }


  ]
})

router.beforeEach(async (to, from, next) => {
  var store = await useAuthStore();
  var status;

  if (to.meta.requiresAuth) {
    await store.getUser();
    status = store.status;
    if (status != 200) {
      next({
        path: "/login",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});




export default router
