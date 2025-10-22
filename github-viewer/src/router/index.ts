import { createRouter, createWebHistory } from 'vue-router';
import UserDetail from '../pages/user/UserDetail.vue';
import Dashboard from '../pages/dashboard/DashBoard.vue';
import DefaultLayout from '../layout/DefaultLayout.vue';
import Home from '../pages/home/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout, // ✅ 모든 페이지는 이 레이아웃을 공통으로 사용
      children: [
        { path: '', name: 'home', component: Home },
        { path: '/dashboard', name: 'dashboard', component: Dashboard },
        { path: '/user/:username', name: 'userDetail', component: UserDetail },
      ],
    },
  ],
});

export default router;
