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
      title: '首页',
      showBottom: true
    }
  },
  {
    name: 'checkList',
    path: '/checkList',
    component: () => import('./views/check/check-list.vue'),
    meta: {
      title: '验收检查',
      showBottom: true
    }
  },
  {
    name: 'acceptList',
    path: '/acceptList',
    component: () => import('./views/accept/accept-list.vue'),
    meta: {
      title: '验收会',
      showBottom: true
    }
  },
  {
    name: 'personalAdvice',
    path: '/personalAdvice',
    component: () => import('./views/accept/personalAdvice.vue'),
    meta: {
      title: '验收会-个人意见',

    }
  },
  {
    name: 'personalAdvice',
    path: '/personalAdvice',
    component: () => import('./views/accept/personalAdvice.vue'),
    meta: {
      title: '验收会-个人意见',

    }
  },
  {
    name: 'showResult',
    path: '/showResult',
    component: () => import('./views/accept/showResult.vue'),
    meta: {
      title: '验收会-最终验收结果',

    }
  },
  {
    name: 'lookAll',
    path: '/lookAll',
    component: () => import('./views/accept/lookAll.vue'),
    meta: {
      title: '查看全部'
    }
  },
  {
    name: 'lookPro',
    path: '/lookPro',
    component: () => import('./views/accept/lookPro.vue'),
    meta: {
      title: '查看问题'
    }
  },
  {
    name: 'remark',
    path: '/remark',
    component: () => import('./views/check/remark.vue'),
    meta: {
      title: '问题维护'
    }
  },
  {
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