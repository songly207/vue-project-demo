import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const routes = [
  {
    path: "/",
    redirect: "/dataSourceManage"
  },
  {
    path: "/dsm",
    name: "Home",
    text: "数据源",
    component: Home,
    children: [
      {
        path: "/dataSourceManage",
        name: "dataSourceManage",
        inNav: true,
        text: "数据源管理",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "/editOrCreate",
        name: "editOrCreate",
        inNav: false,
        text: "数据源管理",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/EditOrCreate.vue")
      }
    ]
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new Router({
  routes
})

export default router
