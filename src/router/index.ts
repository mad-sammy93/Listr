// import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'


import ListsView from '../views/ListsView.vue'
import Dashboard from '../views/DashBoard.vue'

// import NotFound from '../components/pages/NotFound.vue';


// import store from '../stores/index.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ListsView
    },
    {
      path: '/notes',
      name: 'notes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotesView.vue')
    },
    {
      path: '/lists',
      name: 'list-detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/pages/ListDetail.vue'),
    },
    {
      path: '/lists/:id',
      name: 'list-single',
      component: () => import('../components/pages/ListDetail.vue'),
      children: [
       {
         path: '/lists',
         name: 'list-detail',
         component: () => import('../components/pages/ListDetail.vue'),
       }
      ]
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/pages/auth/TheRegister.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/pages/auth/TheLogin.vue')
    },
    { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
    {
      path: '/:notFound(.*)',
      name: '404',
      component: () => import('../components/pages/NotFound.vue')
    }
  ]
})
router.beforeEach((to, _from, next) => {
  const isAuthenticated = localStorage.getItem('user')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next('/register')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
