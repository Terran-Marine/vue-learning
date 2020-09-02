<template>
  <div id="app">

    <router-view></router-view>
    <main-app-tab></main-app-tab>

  </div>
</template>

<script>
// import MainAppTab from "@/components/content/MainAppTab";
import MainAppTab from "@/components/content/MainAppTab";
import {initBScroll} from "@/components/content/BScrollIndex";

export default {
  name: 'App',
  components: {
    MainAppTab,
  },
  created() {
    console.log('app创建时');
    initBScroll();
  }
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
@import "~normalize.css";

</style>