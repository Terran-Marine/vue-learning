<template>
  <div class="tab-control">
    <div v-for="(item ,index) in title" :key="item" class="tab-control-item" :class="{active:currentIndex===index }"
         @click="itemOnClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  data() {
    return {
      currentIndex: 0,
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    }
  },
  methods: {
    itemOnClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick', index);
    }
  },
}
</script>

<style scoped>
.tab-control {
  display: flex;

}

.tab-control-item {
  flex: 1;
  height: 35px;
  line-height: 35px;
  text-align: center;
  font-size: 16px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  padding-bottom: 3px;
  border-bottom: 3px solid #ff8198;
}
</style>