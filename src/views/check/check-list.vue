<template>
  <!-- 验收检查列表 -->
  <div>
    <van-nav-bar title="验收检查" ></van-nav-bar>
    <van-tabs v-model="active" background="#fff" color="#197CFF" @click="onClick">
      <van-tab :title="tab.title" v-for="(tab,index) in tabList" :key="index">
        <van-pull-refresh v-model="tabList[index].refreshing" @refresh="onRefresh">
          <van-list
            v-model="tabList[index].loading"
            :finished="tabList[index].finished"
            :immediate-check="false"
            finished-text="没有更多了"
            @load="onLoad"
            style="min-height:calc(100vh - 110px)"
          >
            <div v-for="(item,index) in tabList[index].items" :key="index" class="spjl-cell">
              <van-cell-group
                style="position:relative;border-radius: 5px;"
                @click.prevent="goDetail(item.ycsq_id,tabList[active].id)"
              >
                <van-cell :title="item.cphm">
                  <template slot="right-icon">
                    <van-tag :color="tab.tag_color" plain style="height:16px;">{{tab.tag}}</van-tag>
                  </template>
                </van-cell>
                <van-cell>
                  <p>车辆类型：{{item.cllx}}</p>
                </van-cell>
                <van-cell>
                  <p>驾驶员：{{item.jsy}}</p>
                </van-cell>
                <van-cell>
                  <p>发车时间：{{item.fcsj}}</p>
                </van-cell>
                <van-cell>
                  <p>乘车人：{{item.dcr}}</p>
                </van-cell>
                <van-cell>
                  <p>出发地：{{item.ccdd}}</p>
                </van-cell>
                <van-cell>
                  <p>目的地：{{item.mdd}}</p>
                </van-cell>
              </van-cell-group>
            </div>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { SwipeCell } from "vant";
Vue.use(SwipeCell);
export default {
  name: "ConfirmList",
  data() {
    return {
      active: 0,
      tabList: [
        {
          title: "未结束",
          tag: "未完成",
          tag_color: "#FEA501",
          id: 1,
          requestUrl: "/mobile/getDjcrwList",
          page: 1,
          items: [], //待确认列表
          refreshing: false,
          loading: false,
          finished: false
        },
        {
          title: "已结束",
          tag: "已完成",
          tag_color: "#E51000",
          id: 2,
          requestUrl: "/mobile/getYjcrwList",
          page: 1,
          items: [], //已确认列表
          refreshing: false,
          loading: false,
          finished: false
        }
      ]
    };
  },
  created() {
    this.getTodoList();
    // this.getDoneList();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    //点击tab
    onClick(index) {
      if (index == 0) {
        this.tabList[0].items = [];
        this.tabList[0].page = 1;
        this.getTodoList();
      }
      if (index == 1) {
        this.tabList[1].items = [];
        this.tabList[1].page = 1;
        this.getDoneList();
      }
    },
    // 获取待确认列表
    getTodoList() {
      this.$fetch("/ocm/mobile/getDjcrwList", {
        ldzt: 0,
        pageSize: 10,
        pagePos: 1
      }).then(res => {
        this.tabList[this.active].items = res.data;
      });
    },
    // 获取已确认列表
    getDoneList() {
      this.$fetch("/mobile/getYjcrwList", {
        ldzt: 1,
        pageSize: 10,
        pagePos: 1
      }).then(res => {
        this.tabList[this.active].items = JSON.parse(res).data;
        // console.log("已確認", JSON.parse(res));
      });
    },
    // 刷新
    onRefresh() {
      let item = this.tabList[this.active];
      item.page = 1;
      item.items = [];
      item.finished = false;
      setTimeout(() => {
        if (this.active == 0) {
          this.getTodoList();
        }
        if (this.active == 1) {
          this.getDoneList();
        }
        item.refreshing = false;
      }, 500);
    },
    // 加载更多
    onLoad() {
      this.tabList[this.active].page += 1;
      this.getMore();
    },
    async getMore() {
      let listItem = this.tabList[this.active];
      let pagingObj = {
        ldzt: this.active, //状态
        pagePos: listItem.page,
        pageSize: 10
      };
      let res = await this.$fetch(listItem.requestUrl, pagingObj, {
        headers: {
          "csrf-csrf": "csrf-csrf"
          // Authorization: `Bearer ${this.getUrlParam("token")}`
        }
      });
      listItem.items = [...listItem.items, ...JSON.parse(res).data];
      // 加载状态结束
      listItem.loading = false;
      // 数据全部加载完成
      if (JSON.parse(res).data.length < 10) {
        console.log("数据加载完成");
        listItem.finished = true;
      }
    },
    //跳转费用确认详情页面
    goDetail(id,type) {
      this.$router.push({
        path: "/confirmDetail",
        query: {
          id: id,
          typeId:type
        }
      });
    }
  }
};
</script>

<style scoped lang='less'>
// @import "../../assets/css/varibles.less";
.spjl-cell {
  margin-bottom: 10px;
  .car-check {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
}
/deep/.van-tabs__content {
  background-color: #f8f8f8;
  padding: 10px;
}
</style>
