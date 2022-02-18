import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import LoginForm from "@/views/Login.vue";
import store from "@/store";

Vue.use(VueRouter);

const beforeAuth = (isAuth: any) => (from: any, to: any, next: any) => {
  const isAuthenticated = store.getters["isAuthenticated"]
  if ((isAuthenticated && isAuth) || (!isAuthenticated && !isAuth)) {
    return next()
  } else {
    next("/login")
  }
}

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    beforeEnter: beforeAuth(true)
  },
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
    beforeEnter: beforeAuth(false)
  },

];

const router = new VueRouter({
  mode: "history",
  routes,
});



export default router;
