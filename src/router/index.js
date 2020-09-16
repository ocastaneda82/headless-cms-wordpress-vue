import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/user",
    name: "Protected",
    component: () =>
      import(/* webpackChunkName: "protected" */ "../views/Protected.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import(/* webpackChunkName: "edit" */ "../views/Edit.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if user is logged in
    // if not, redirect to login page.
    if (!store.state.user) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      // we have a state.user object but
      // we need to check if the token is still valid
      // we need to check if the token is still valid
      try {
        // eslint-disable-next-line no-unused-vars
        const { status } = store.dispatch("validate");
        // user is logged in with a valid token
        next();
      } catch (e) {
        // the token is invalid so we will have the user login again
        // clear the token and user info
        // store.commit("DELETE_USER");
        store.commit("DELETE_DATA_USER");
        next({
          path: "/login",
          query: { redirect: to.fullPath },
        });
      }
    }
  } else {
    // this is not a protected route
    next();
  }
});

export default router;
