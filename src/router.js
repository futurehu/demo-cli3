import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [{
    path: '*',
    redirect: '/home',
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('./views/my-home.vue'),
    meta: {
      title: '首页'
    }
  }, {
    name: 'my',
    path: '/my',
    component: () => import('./views/my/my.vue'),
    meta: {
      title: '个人中心'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({
  routes
});

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