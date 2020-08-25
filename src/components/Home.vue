<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>


    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>


</template>

<script>
export default {
  name: "Home",
  props: {},
  created() {
    //创建的时候
    document.title="首页"
  },
  mounted() {
    //dom 加载完毕的时候
  },
  updated() {
    //界面刷新的时候
  },
}
</script>

<style scoped>

</style>