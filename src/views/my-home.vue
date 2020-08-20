<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section bg">
        <Cheader></Cheader>
        <div class="text-slogan">
          <h3>
            培养行业一流技术
            <br />打造行业一流公司
          </h3>
          <p>
            CULTIVATE THE FIRST-CLASS TECHNOLOGY IN THE INDUSTRY
            AND BUILD THE FIRST-CLASS COMPANY IN THE INDUSTRY
          </p>
        </div>
      </div>
      <div class="section bg2">
        <Cheader></Cheader>
        <div class="m-video">
          <video
            autoplay
            loop
            muted
            controls
            poster
            type="video/mp4"
            webkit-playsinline="true"
            x-webkit-airplay="true"
            playsinline="true"
            x5-video-player-type="h5"
            x5-video-orientation="h5"
            x5-video-player-fullscreen="true"
          >
            <source src="https://v1.cecdn.yun300.cn/100001_2003195183/东陆高科6.25去掉十五载.mp4" />
            <source src="https://v1.cecdn.yun300.cn/100001_2003195183/东陆高科6.25去掉十五载.mp4" />
          </video>
        </div>
        <h3>河南油田工程咨询股份有限公司</h3>
        <div class="line"></div>
        <div class="m-des">成立于1993年，是一所集工程咨询、安全评价、环境影响评价、工程设计、信息软件开发等为一体的“产、学、研”并举的综合性技术服务机构。</div>
        <div class="m-module">
          <div class="module-item" v-for="(item,index) in moduleList" :key="index">
            <img :src="item.img" alt />
            <span>{{item.text}}</span>
          </div>
        </div>
        <div class="m-more">查看更多>></div>
      </div>
      <div class="section bg2 active news-center">
        <Cheader></Cheader>
        <h3>新闻中心</h3>
        <van-divider :style="{ color: '#f5f5f5', borderColor: '#f5f5f5', padding: '0 16px'}">
          <span style="font-size:18px;font-style: italic;color: '#f5f5f5'">News Center</span>
        </van-divider>
        <!-- <van-tabs type="card" v-model="active" color='#00458e' background='transparent' borderColor='red'>
          <van-tab title="公司要闻" title-style="color:#fff;">内容 1</van-tab>
          <van-tab title="信息公告" title-style="color:#fff;">内容 2</van-tab>
          <van-tab title="行业资讯" title-style="color:#fff;border-color:red;">内容 3</van-tab>
        </van-tabs>-->
        <div class="tab-wrap">
          <div
            class="van-tab"
            :style="{margin:index==1?'0 10px':''}"
            v-for="(tab,index) in tabList"
            :key="index"
            :class="{'tab-active':index==active}"
            @click="handleTab(index)"
          >
            <span class="van-tab__text van-tab__text--ellipsis">{{tab}}</span>
          </div>
          <!-- <div class="van-tab" style="margin:0 8px;">
            <span class="van-tab__text van-tab__text--ellipsis">信息公告</span>
          </div>
          <div class="van-tab">
            <span class="van-tab__text van-tab__text--ellipsis">行业资讯</span>
          </div>-->
        </div>
        <div class="news">
          <!-- <div class="tong-title van-hairline--bottom">
            <span>最新动态</span>
            <span @click="toList()"></span>
          </div>-->
          <ul class="news-wrap">
            <li class="van-hairline--bottom" v-for="(item,index) in news_list" :key="index">
              <div
                class="left"
                :style="`background: url(http://oa.hnocse.com:30008${item.imgurl}) no-repeat`"
              ></div>
              <div class="right">
                <div class="title mutiple-overflow">{{item.title}}</div>
                <div class="r-bottom">
                  <span>发表时间：{{item.tjsj}}</span>
                  <span>来源：{{item.source}}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import Vue from "vue";
import Cheader from "../components/header/header";
import { ActionSheet, Divider } from "vant";

Vue.use(ActionSheet).use(Divider);
import { Tab, Tabs } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: "OcseHome",
  components: {
    Cheader
  },
  props: {},
  data() {
    return {
      active: 0,
      options: {
        licenseKey: null,
        navigation: false,
        verticalCentered: false,
        navigationPosition: "right",
        menu: "#menu",
        anchors: ["page1", "page2", "page3"],
        sectionsColor: []
      },
      moduleList: [
        {
          img: require("../assets/images/公司概况.png"),
          text: "公司概况"
        },
        {
          img: require("../assets/images/企业文化.png"),
          text: "企业文化"
        },
        {
          img: require("../assets/images/发展历程.png"),
          text: "发展历程"
        },
        {
          img: require("../assets/images/执业资质.png"),
          text: "执业资质"
        }
      ],
      tabList: ["公司要闻", "信息公告", "行业资讯"],
      news_list: [] //新闻
    };
  },

  computed: {},
  created() {},

  methods: {
    handleTab(index) {
      this.active = index;
    }
  }
};
</script>
<style lang="less" scoped>
.bg {
  background: url("../assets/images/m_bg1.png") no-repeat;
  background-size: cover;
  background-position: center;
}
.bg2 {
  background: url("../assets/images/m_bg3.png") no-repeat;
  background-size: cover;
  background-position: center;
}
.text-slogan {
  h3 {
    text-align: center;
    padding-top: 50px;
    font-family: PingFang-SC-Heavy;
    font-size: 26px;
    font-weight: 600;
    font-style: italic;
    font-stretch: normal;
    line-height: 36px;
    letter-spacing: 0px;
    color: #ffffff;
    text-shadow: 0px 2px 0px #000000;
  }
  p {
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 0.6;
    font-size: 11px;
    text-align: center;
    padding-top: 15px;
    // font-weight: 100;
  }
}
.m-video {
  width: 320px;
  // height: 165px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: 20px;
  video {
    width: 100%;
  }
}
.bg2 {
  h3 {
    text-align: center;
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .m-des {
    color: #f5f5f5;
    text-indent: 2em;
    text-align: justify;
    padding: 25px 15px;
    font-size: 14px;
  }
  .line {
    height: 2px;
    width: 60px;
    color: #fff;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 15px;
  }
  .m-module {
    display: flex;
    align-items: center;
    justify-content: center;
    .module-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid #f5f5f5;
      border-radius: 3px;
      // padding: 5px;
      width: 70px;
      height: 60px;
      margin: 0 10px;
      img {
        width: 20px;
      }
      span {
        font-size: 14px;
        color: #f5f5f5;
        margin-top: 5px;
      }
    }
  }
  .m-more {
    text-align: center;
    color: #ffffff;
    opacity: 0.7;
    padding-top: 30px;
    // text-decoration: #f5f5f5;
  }
}
.news-center {
  h3 {
    padding-top: 20px;
  }
}
.tab-wrap {
  display: flex;
  padding: 0 20px;
  .van-tab {
    color: #f5f5f5;
    border: 1px solid #f5f5f5;
    padding: 4px 0;
  }
}
.tab-active {
  background-color: #00458e;
  border: 1px solid #00458e !important;
  transition: linear .5s;
}
// 最新动态
.news {
  .tong-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
    & > span:first-of-type {
      background-color: #fff;
      font-weight: 800;
      position: relative;
      font-size: 17px;
    }
    & > span:last-of-type {
      color: rgb(153, 153, 153);
      font-size: 0.28rem;
      display: flex;
      align-items: center;
      justify-content: center;
      // padding-right: .2rem;
      // background: url("../assets/images/toMore.png") no-repeat;
      background-size: 80%;
      background-position: center;
      width: 46px;
      height: 20px;
    }
  }
}
</style>