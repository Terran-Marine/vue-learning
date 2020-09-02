<template>
  <div>
    <!--    标题栏-->
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>

    <gj-scroll class="gj-scroll-wrapper">
      <!--    banner图-->
      <home-banner :banners="banners"/>
      <!--    推荐栏-->
      <home-recommend-view :recommend="recommend"/>

      <home-feature-view/>

      <tab-control :title="['流行','新款','精选']" class="home-tab-control" @tabClick="tabClick"/>

      <goods-list-view :goods="showGoods">

      </goods-list-view>
    </gj-scroll>


  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeBanner from "@/page/home/HomeBanner";
import HomeRecommendView from "@/page/home/HomeRecommendView";
import HomeFeatureView from "@/page/home/HomeFeatureView";

import TabControl from "@/components/content/TabControl";
import GoodsListView from "@/components/content/GoodsListView";
import GjScroll from "@/components/content/GjScroll";
import {getHttpHomeMultiData, getHttpGoodsData} from "@/network/home";

export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommend: [],
      multiData: null,
      currentType: 'pop',
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    GoodsListView,
    HomeBanner,
    NavBar,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GjScroll,
  },
  methods: {
    getHomeMultiData() {
      getHttpHomeMultiData().then(res => {
        this.multiData = res;
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      }).catch(err => {
        console.log(err);
      });
    },

    getGoodsData(productType) {
      const page = this.goods[productType].page + 1
      getHttpGoodsData(productType, page).then(res => {
        this.goods[productType].list.push(...res.list);
      }).catch(err => {
        console.log(err);
      });
    },

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break
        case 2:
          this.currentType = 'sell';
          break
        default:
          this.currentType = 'pop';
          break
      }
      console.log(this.currentType);

    }

  },
  created() {
    this.getHomeMultiData();
    this.getGoodsData('pop');
    this.getGoodsData('new');
    this.getGoodsData('sell');
  },
  mounted() {
    // this.bsScroll = new BScroll('.wrapper', {
    //   scrollbar: true,
    //   pullUpLoad: true,
    // });
    //
    // this.bsScroll.on('pullingUp', () => {
    //   console.log('加载更多');
    //   this.bsScroll.finishPullUp()
    // });
  }
}

</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: var(--color-background);
}

.home-tab-control {
  position: sticky;
  top: 0;
  background-color: white;
}


.gj-scroll-wrapper {
  height: 100%;
  overflow: hidden;
}

</style>