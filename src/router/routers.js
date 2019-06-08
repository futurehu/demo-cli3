
const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: { title: '不出校门，挣生活费' },
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
    meta: { title: '校园飞人预报名' },
  },
 
]
export default routes