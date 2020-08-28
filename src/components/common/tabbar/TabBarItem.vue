<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isSelect" name="item-icon"/>
    <slot v-else name="item-icon-select"/>
    <div :style="computedSelectColor">
      <slot name="item-text"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    skipPath: String,
    selectColor:{
      type:String,
      default:'red',
    }
  },
  data() {
    return {
      // isSelect: true,
    };
  },
  computed: {
    isSelect() {
      return this.$route.path.indexOf(this.skipPath) !== -1
    },
    computedSelectColor(){
      // return this.isActive ? {color:this.selectColor}:{}
      return this.$route.path.indexOf(this.skipPath) !== -1 ? {color:this.selectColor}:{}
    }
  },

  methods: {
    itemClick() {
      this.$router.replace(this.skipPath)
    },
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
  margin-top: 3px;
}

.tab-bar-item img {
  width: 26px;
  height: 26px;
}

</style>