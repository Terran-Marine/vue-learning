<template>
  <div id="app">

    <router-view></router-view>
    <main-app-tab></main-app-tab>

  </div>
</template>

<script>
import MainAppTab from "@/components/MainAppTab";


export default {
  name: 'App',
  components: {
    MainAppTab,
  },
}


// function test() {
//
//   new Promise(((resolve, reject) => {
//     setTimeout(() => {
//       resolve('haha');
//     }, 1000)
//   })).then((value) => {
//     console.log(value);
//   }).then(() => {
//     throw "err"
//   })
//   Promise.all()
// }


</script>

<style>
@import "./assets/css/base.css";


</style>


<!--<div class="tab-bar-item">-->
<!--<img src="../../assets/img/tabbar/ic_main_home.png" alt="首页">-->
<!--首页-->
<!--</div>-->
<!--<div class="tab-bar-item">-->
<!--<img src="../../assets/img/tabbar/ic_main_member.png" alt="分类">-->
<!--分类-->
<!--</div>-->
<!--<div class="tab-bar-item">-->
<!--<img src="../../assets/img/tabbar/ic_main_plan.webp" alt="购物车">-->
<!--购物车-->
<!--</div>-->
<!--<div class="tab-bar-item">-->
<!--<img src="../../assets/img/tabbar/ic_main_share.png" alt="我的">-->
<!--我的-->
<!--</div>-->