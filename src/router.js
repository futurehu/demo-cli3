import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: () => import('./views/my-home.vue'),
    meta: { title: '不出校门，挣生活费' },
  },
  {
    path: '/about',
    component: () => import('./views/my-about.vue'),
    meta: { title: '校园飞人预报名' },
  },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};