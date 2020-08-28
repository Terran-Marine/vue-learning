//配置路由相关信息
import VueRouter from "vue-router";
import Vue from "vue";


const Home = () => import('../page/home/Home');
const Category = () => import('../page/category/category');
const Profile = () => import('../page/profile/profile');
const Cart = () => import('../page/cart/cart');

//1.通过Vue.use(插件),来安装
Vue.use(VueRouter);

const routers = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  },
];

const router = new VueRouter({
  routes: routers,
  mode: 'history'
});

export default router


