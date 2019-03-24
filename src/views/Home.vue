<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <router-link to="/about">去地图页面</router-link>
    <br>
    <br>
    <router-link to="/chooseCity">定位城市</router-link>
    <!-- 图表 -->
    <div
      class="container"
      style="margin-top:40px;"
    >
      <canvas
        id="mountNode"
        width="375"
      ></canvas>
    </div>
    <van-swipe indicator-color="red">
      <van-swipe-item
        v-for="(item,index) in images"
        :key="index"
      >
        <div class="title">我的</div>
        <img
          :src="item"
          width="100%"
        >
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
// 导入
const F2 = require("@antv/f2");
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      images: [
        "http://www.taoqao.com/uploads/allimg/140425/1-140425212348.jpg",
        "http://www.taoqao.com/uploads/allimg/140425/1-140425212348.jpg"
      ],
      // 定义请求的路径对象 好维护
      requestURL: {
        getCurDetail: "/api/v1/identity/currentUserDetail"
      },
      data: [
        {
          day: "周一",
          value: 300
        },
        {
          day: "周二",
          value: 400
        },
        {
          day: "周三",
          value: 350
        },
        {
          day: "周四",
          value: 500
        },
        {
          day: "周五",
          value: 490
        },
        {
          day: "周六",
          value: 600
        },
        {
          day: "周日",
          value: 900
        }
      ]
    };
  },
  created() {
    console.log("this", this.coverFormData);
    // this.currentDetail();
    this.$nextTick(() => {
      // this.renderBarChart();
    });
  },

  methods: {
    renderBarChart() {
      const chart = new F2.Chart({
        id: "mountNode",
        pixelRatio: window.devicePixelRatio // 指定分辨率
      });
      chart.source(this.data, {
        value: {
          tickCount: 5,
          min: 0
        },
        day: {
          range: [0, 1]
        }
      });
      chart.tooltip({
        showCrosshairs: true,
        showItemMarker: false,
        onShow: function onShow(ev) {
          var items = ev.items;
          items[0].name = null;
          items[0].value = "$ " + items[0].value;
        }
      });
      chart.axis("value", {
        line: {
          lineWidth: 0.5,
          stroke: "#ccc"
        }
        // labelOffset:20
      });
      chart.axis("day", {
        // label: (text, index, total) => {
        //   console.log("text", text, index, total);
        // },
        tickLine: {
          lineWidth: 1,
          stroke: "#ccc",
          length: 5 // 刻度线长度
        }
      });
      chart
        .line()
        .position("day*value")
        .color("red");
      chart
        .point()
        .position("day*value")
        .color("#fff")
        .style({
          stroke: "red",
          lineWidth: 1
        });
      // .color("l(0) 0:#ffffff 0.5:#7ec2f3 1:#1890ff"); //根据类型，使用内置颜色
      chart.render();
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    // 获取当前用户信息
    async currentDetail() {
      let res = await this.$fetch(this.requestURL.getCurDetail);
    },
    showInfo() {
      console.log("res");
      // this.$message.info("This is a normal message");
    }
  }
};
</script>
<style lang="less">
.van-swipe .title {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

