import Vue from "vue";
import VueRouter from "vue-router";
import Header from "components/header/header";
import Goods from 'components/goods/goods';
import Comments from 'components/comments/comments'
import Seller from 'components/seller/seller'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/comments',
    name: 'Comments',
    component: Comments
  },
  {
    path: '/seller',
    name: 'Seller',
    component: Seller
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active'
});

export default router;