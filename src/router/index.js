import Vue from "vue";
import VueRouter from "vue-router";
import Header from "./../components/Header/Header.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Header",
    component: Header
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
