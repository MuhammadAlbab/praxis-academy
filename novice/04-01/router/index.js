import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import ('../views/Home.vue'),
    children: [
      {
        path: 'listalbums',
        component: () => import(/* webpackChunkName: "about" */ '../views/List/ListAlbums.vue')
      },
      {
        path: 'listposts',
        component: () => import(/* webpackChunkName: "about" */ '../views/List/ListPosts.vue')
      },
      {
        path: '/listalbums/:id',
        component: () => import (/* webpackChunkName: "about" */ '../views/List/AuthorAlbums.vue')
      },
      {
        path: '/listposts/:id',
        component: () => import (/* webpackChunkName: "about" */ '../views/List/AuthorPosts.vue')
      }
    ]
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: 'contact',
        component: () => import(/* webpackChunkName: "about" */ '../views/About/Contact.vue')
      },
      {
        path: 'name',
        component: () => import(/* webpackChunkName: "about" */ '../views/About/Name.vue')
      },
      {
        path: 'address',
        component: () => import(/* webpackChunkName: "about" */ '../views/About/Address.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router