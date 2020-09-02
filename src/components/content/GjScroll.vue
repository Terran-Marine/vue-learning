<template>
  <div class="gj-scroll-wrapper" ref="gjscrollwrapper">
    <div class="gj-scroll-context">
      <slot/>
    </div>


  </div>
</template>

<script>
import BScroll from '@better-scroll/core'


export default {
  name: "GjScroll",
  data() {
    return {bscroll: null,};
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.gjscrollwrapper, {});
  }
}
</script>

<style scoped>
.gj-scroll-wrapper{
  width: 100%;
  overflow: hidden;
  /*position: absolute;*/
  /*top: 0;*/
  /*bottom: 0;*/
}

</style>