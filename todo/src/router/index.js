import Vue from "vue";
import store from "../store";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";
import CreateItem from "../views/CreateItem.vue";
import BookList from "../components/BookList.vue";
import EditEntry from "../components/EditEntry.vue";
import ListView from "../components/ListView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/Add",
    name: "Create-item",
    component: CreateItem,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/LogIn",
    name: "LogIn",
    component: LogIn,
  },
  {
    path: "/BookList",
    name: "BookList",
    component: BookList,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/EditEntry/:id",
    name: "EditEntry",
    component: EditEntry,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: "/ListView/:id",
    name: "ListView",
    component: ListView,
    meta: {
      requireLogin: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record) => record.meta.requireLogin) &&
    !store.state.isAuthenticated
  ) {
    next("/LogIn");
  } else {
    next();
  }
});
export default router;
