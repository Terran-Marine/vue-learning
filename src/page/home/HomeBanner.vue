<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt="item.title">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper/index'

export default {
  name: "HomeBanner",
  components: {Swiper, SwiperItem},
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
}
</script>

<style scoped>

</style>