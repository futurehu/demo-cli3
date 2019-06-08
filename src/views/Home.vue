<template>
  <div class="home">
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
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {},
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
  created() {
    this.$nextTick(() => {});
  },

  methods: {}
};
</script>
<style lang="less">
.van-swipe .title {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

