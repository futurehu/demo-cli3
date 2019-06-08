<template>
  <div class="home">
    <p class="bor-b">测试22像素字体，类似于 view) 是11111111111111111111</p>
    <div
      class="test bor-b mutiple-overflow"
    >ue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既</div>字体大小
    <van-swipe indicator-color="red">
      <van-swipe-item v-for="(item,index) in images" :key="index">
        <img :src="item" width="100%">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "MyHome",
  components: {},
  props: {},
  data() {
    return {
      images: [
        "http://www.taoqao.com/uploads/allimg/140425/1-140425212348.jpg",
        "http://www.taoqao.com/uploads/allimg/140425/1-140425212348.jpg"
      ],
      // 定义请求的路径对象 好维护
      requestURL: {
        getCurDetail: "/api/v1/identity/currentUserDetail"
      }
    };
  },
  computed: {},
  created() {
    this.$nextTick(() => {});
  },

  methods: {}
};
</script>
<style lang="less" scoped>
.text-overflow(@width) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: @width;
}
.home {
  p {
    .text-overflow(100px);
  }
}
.test {
  // .text-overflow(50px);
}
</style>