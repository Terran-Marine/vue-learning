<template>
  <div class="recommend">
    <div v-for="item in recommend" :key="item.title" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="item.title"/>
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  margin-top: 10px;
  display: flex;
  text-align: center;
  font-size: 13px;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 8px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  margin-bottom: 5px;
  height: 60px;
  width: 60px;
}

</style>