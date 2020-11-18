<template>
  <div id="app">
    <router-view />
    <tabbar  v-if="$route.meta.showBottom"></tabbar>
  </div>
</template>
<script>
import tabbar from "./components/tabbar/tabbar";
export default {
  components: {
    tabbar
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-nav-bar .van-icon {
    color: #fff;
  }
  .van-nav-bar {
    background: #197CFF;
  }
}
</style>
