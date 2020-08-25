<template>
  <tab-bar>
    <tab-bar-item skipPath="/home">
      <img slot="item-icon" src="../assets/img/tabbar/ic_main_home.png" alt="首页">
      <img slot="item-icon-select" src="../assets/img/tabbar/ic_main_home_select.png" alt="首页">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item skipPath="/category">
      <img slot="item-icon" src="../assets/img/tabbar/ic_main_member.png" alt="分类">
      <img slot="item-icon-select" src="../assets/img/tabbar/ic_main_member_select.png" alt="分类">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item skipPath="/profile">
      <img slot="item-icon" src="../assets/img/tabbar/ic_main_plan.webp" alt="购物车">
      <img slot="item-icon-select" src="../assets/img/tabbar/ic_main_plan_select.png" alt="购物车">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item skipPath="/cart">
      <img slot="item-icon" src="../assets/img/tabbar/ic_main_share.png" alt="我的">
      <img slot="item-icon-select" src="../assets/img/tabbar/ic_main_share_select.png" alt="我的">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";

export default {
  name: "MainAppTab",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>