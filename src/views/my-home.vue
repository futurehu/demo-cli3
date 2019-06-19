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
    <section :style="{fontSize:size+'em'}">
      <base-blog v-for="item in posts" :key="item.id" :post="item" @enlarge-text="enlargeText"></base-blog>
    </section>
    <!-- 双向数据绑定 -->
    <!-- <input type="text" v-model="bindVal"> -->
    <!-- 双向绑定原理 -->
    <input type="text" :value="bindVal" @input="hanleVal($event)">
    <!-- uuPicker组件 -->
    <div class="registe-item" @click="showPicker">
      <span class="registe-icon register_start"></span>
      <span class="registe-label">入学时间</span>
      <span class="registe-value">{{yearTxt}}</span>
      <span class="registe-more"></span>
    </div>
  </div>
</template>

<script>
import picker from "../components/picker";
Vue.use(picker);
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
import BaseBlog from "@/components/base-blog.vue";
export default {
  name: "MyHome",
  components: { BaseBlog },
  props: {},
  data() {
    return {
      yearTxt: "",
      bindVal: "",
      size: 1, //字体大小
      // 博客文章
      posts: [{ id: 1, title: "My journey with Vue", content: "11111111111" }],
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
    this.getData();
    this.$nextTick(() => {});
  },

  methods: {
    showPicker() {
      let that = this;
      let nowDate = new Date();
      let year = nowDate.getFullYear();
      // console.log(year)
      const data = [];
      for (let i = year; i > year - 5; i--) {
        console.log(i);
        let obj = {
          value: i,
          text: i + "年"
        };
        data.push(obj);
      }
      console.log("data", data);
      that
        .$createPicker({
          title: "选择入学年份",
          data: [data],
          onSelect: (selectValue, selectIndex, selectText) => {
            that.year = selectValue[0];
            that.yearTxt = selectText[0];
          },
          onCancel: () => {
            console.log("取消");
          }
        })
        .show();
    },
    hanleVal(e) {
      console.log(e);
      this.bindVal = e.target.value;
    },
    enlargeText(postSize) {
      this.size += postSize;
    },
    getData() {
      this.$fetch("/nljz/nljz/question/head/wxxcx?gz_id=8").then(res => {});
    }
  }
};
</script>
<style lang="less" scoped>
.registe-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 35px 32px 35px 37px;
  box-sizing: border-box;
  font-size: 30px;
  &::after {
    content: "";
    position: absolute;
    display: block;
    bottom: 0px;
    left: 37px;
    right: 32px;
    height: 2px;
    background-color: #ebebeb;
    transform: scaleY(0.5);
    transform-origin: 0 0;
  }
  .registe-icon {
    display: inline-block;
    background-size: contain;
    width: 40px;
    height: 40px;
  }
  .registe-label {
    padding-left: 22px;
  }
  &.last {
    &::after {
      content: "";
      overflow: hidden;
      display: none;
    }
  }
}
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