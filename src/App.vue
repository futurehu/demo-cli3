<template>
  <div id="app">
    <router-view />
    <!-- <tabbar></tabbar> -->
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
}
</style>
