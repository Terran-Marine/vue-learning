<template>
  <div class="goods">
    <goods-list-item-view v-for="item in goods" :key="item.iid" :goods-item="item"/>
  </div>
</template>

<script>

import GoodsListItemView from "@/components/content/GoodsListItemView";

export default {
  name: "GoodsListView",
  components: {
    GoodsListItemView,
  },
  props: {
    goods: Array,
    default() {
      return [];
    },
  },
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}

</style>