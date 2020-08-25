<template>
  <div>
    <h1>我的页面</h1>
    <p>我是的相关信息</p>
    <p>用户id是{{userId}}</p>
  </div>
</template>

<script>
export default {
  name: "Mine",
  computed:{
    userId(){
      return this.$route.params.userId;
    },
  },
}
</script>

<style scoped>

</style>