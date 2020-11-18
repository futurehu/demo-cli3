<template>
  <van-tabbar v-model="active" class="active_tab">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="tab(index,item.name)">
      <span :class="currIndex == index ? active:''">{{item.title}}</span>
      <template slot="icon" slot-scope="props">
        <img :src="props.active ? item.active : item.normal" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  name: "tabbar",
  data() {
    return {
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "home",
          title: "首页",
          normal: require("../../assets/images/index.png"),
          active: require("../../assets/images/index-active.png")
        },
         {
          name: "checkList",
          title: "验收检查",
          normal: require("../../assets/images/check.png"),
          active: require("../../assets/images/check-active.png")
        },
        {
          name: "acceptList",
          title: "验收会",
          normal: require("../../assets/images/accept.png"),
          active: require("../../assets/images/accept-active.png")
        }
       
      ]
    };
  },
  watch: {
    $route(to) {
      this.tabbars.forEach((item, index) => {
        if (to.name == item.name) {
          this.active = index;
        }
      });
    }
  },

  methods: {
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    }
  }
};
</script>

<style lang="less" scoped>
@import '../../assets/css/varibles.less';
.active_tab img {
  width: 20px;
  height: 20px;
}

.van-tabbar-item--active {
  color: @theme-color;
}
</style>