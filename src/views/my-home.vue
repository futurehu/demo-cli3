<template>
  <div class="home">
    <van-nav-bar title="首页" right-text="按钮">
      <template #right>
        <van-icon name="close" size="18" @click="loginOut" />
      </template>
    </van-nav-bar>
    <div style="background:#fff;">
      <!-- 问候语 -->
      <section class="greep-wrap">
        <div class="greet morning-greet">
          <div class="tip">
            <div class="top">
              <p>{{greet}}好！胡伟</p>
            </div>
            <div class="time">{{year}} {{day}}</div>
          </div>
        </div>
      </section>
      <div class="tong-title">
        <section>
          <span
            class="m-tab"
            v-for="(tab,index) in tabArr"
            :key="index"
            :style="{'margin-left':index==1?'.5rem':''}"
            :class="{'m-tab-active':index==lightIndex}"
            @click="handleTab(index)"
          >{{tab.name}}</span>
          <!-- <span class="m-tab" style="margin-left:.5rem;"></span> -->
        </section>
      </div>
    </div>
    <!-- 检查任务 -->
    <div v-for="(item,index) in 3" :key="index" class="spjl-cell" v-if="lightIndex==0">
      <van-cell-group>
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">12-81井钻井工程</span>
            <van-tag plain round style="margin-left:10px;" color="#EF1600">待检查</van-tag>
          </template>
          <template slot="right-icon">
            <span style="color:#666666;">2020-10-26</span>
          </template>
        </van-cell>
        <van-cell>
          <p>
            施工队伍：
            中原钻三40485队
          </p>
        </van-cell>
        <van-cell>
          <p>
            建设单位：
            一厂
          </p>
        </van-cell>
        <van-cell>
          <p>
            开工作业类别：
            钻井->一开
          </p>
        </van-cell>
        <van-cell>
          <p>
            职责：
            成员
          </p>
        </van-cell>
        <van-cell>
          <p>
            验收时间：
            2020-10-26
          </p>
        </van-cell>
        <van-cell>
          <div class="btn">
            <van-button type="info" size="small">去检查</van-button>
            <van-button type="primary" size="small">检查结束</van-button>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
    <!-- 待验收 -->
    <div v-for="(item,index) in 3" :key="index" class="spjl-cell" v-if="lightIndex==1">
      <van-cell-group>
        <van-cell>
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">12-81井钻井工程</span>
            <van-tag plain round style="margin:10px;" color="#EF1600">待验收</van-tag>
          </template>
          <template slot="right-icon">
            <span style="color:#666666;">2020-10-26</span>
          </template>
        </van-cell>
        <van-cell>
          <p>
            施工队伍：
            中原钻三40485队
          </p>
        </van-cell>
        <van-cell>
          <p>
            建设单位：
            一厂
          </p>
        </van-cell>
        <van-cell>
          <p>
            开工作业类别：
            钻井->一开
          </p>
        </van-cell>
        <van-cell>
          <p>
            职责：
            成员
          </p>
        </van-cell>
        <van-cell>
          <p>
            验收时间：
            2020-10-26
          </p>
        </van-cell>
        <van-cell>
          <div class="btn">
            <van-button type="info" size="small" color="#65A2FB">查看全部</van-button>
            <van-button type="primary" size="small" color="#43CCA5">查看问题</van-button>
            <van-button type="info" size="small" color="#FF9649">个人意见</van-button>
            <van-button type="primary" size="small" color="#FF5117">验收结果</van-button>
          </div>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
let moment = require("moment");
moment.locale("zh-cn"); //设置中文
import Vue from "vue";
import { ActionSheet, Divider } from "vant";
Vue.use(ActionSheet).use(Divider);
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: "OcseHome",
  components: {},
  props: {},
  data() {
    return {
      lightIndex: 1, //当前高亮
      tabArr: [
        {
          name: "检查任务"
        },
        {
          name: "待验收"
        }
      ],
      year: "", //月份
      day: "", //星期
      greet: "" //问候语
    };
  },

  computed: {},
  created() {
    this.year = moment().format("M月D日");
    this.day = moment().format("dddd");
    this.greet = this.getGreetings();
  },

  methods: {
    // 退出登录
    loginOut() {
      if (this.browser.versions.android) {
        window.android.logout();
      } else if (this.browser.versions.ios) {
        try {
          window.webkit.messageHandlers.logout.postMessage('');
        } catch (e) {}
      }
    },
    handleTab(index) {
      this.active = index;
    },
    handleTab(i) {
      this.lightIndex = i;
    },
    //   获取问候语
    getGreetings() {
      var now = new Date();
      var times = now.getHours();
      // console.log("times", times);
      var whe = parseInt(times);
      if (times >= 6 && times < 12) {
        this.isMorning = true;
        this.isNoon = false;
        this.isEvening = false;
        return "上午";
      }
      if (times >= 12 && times < 18) {
        this.isNoon = true;
        this.isMorning = false;
        this.isEvening = false;
        return "下午";
      }
      if (times >= 18 || times < 6) {
        this.isEvening = true;
        this.isMorning = false;
        this.isNoon = false;
        return "晚上";
      }
    }
  }
};
</script>
<style lang="less" scoped>
.spjl-cell {
  margin-bottom: 10px;
}
.morning-greet {
  background: url("../assets/images/banner .png") no-repeat;
  background-position: center;
  background-size: contain;
}
.home {
  background-color: #f8f8f8;
  padding-bottom: 50px;
  .btn {
    float: right;
    button {
      margin: 0 5px;
    }
  }
  .greep-wrap {
    padding: 0.2rem;
    padding-bottom: 0.1rem;
  }
  .greet {
    position: relative;
    width: 100%;
    height: 3.4rem;

    .tip {
      // display: flex;
      // flex-direction: column;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 120px;
      color: #fff;
      .top {
        display: flex;
        // margin-bottom: 0.24rem;
        align-items: center;
        p {
          font-size: 20px;
          font-weight: 500;
          margin-right: 0.2rem;
          text-shadow: 0 2px 4px rgba(11, 105, 82, 0.9);
        }
        .time {
          padding-top: 0.1rem;
          font-size: 0.25rem;
          text-shadow: 0 2px 4px rgba(11, 105, 82, 0.9);
        }
      }
    }
  }
  .tong-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.2rem;
    padding-left: 15px;
    .m-tab {
      position: relative;
      display: inline-block;
      font-weight: 800;
      // font-size: 0.36rem;
      font-size: 16px;
    }
    .m-tab-active {
      color: rgb(0, 115, 254);
      // transition:all linear .2s;
      &::after {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -0.16rem;
        content: "";
        width: 1.4rem;
        height: 3px;
        background-color: rgb(0, 115, 254);
      }
    }
  }
}
</style>