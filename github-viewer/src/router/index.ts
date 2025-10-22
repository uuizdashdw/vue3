import { createRouter, createWebHistory } from 'vue-router';
import UserDetail from '../pages/user/UserDetail.vue';
import Dashboard from '../pages/dashboard/DashBoard.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/user/:username',
      name: 'user',
      component: UserDetail,
      props: true,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
  ],
});

export default router;
