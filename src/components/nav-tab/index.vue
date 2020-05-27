<template>
  <div class="nav-tab">
    <ul class="nav-list">
      <li
        ref="nav-item"
        class="nav-item"
        v-for="(item,i) in navList"
        :key="item.path.path||item.path"
      >
        <router-link :to="item.path">
          <span class="text" :style="{color:getTitleColor(item.path)}">{{item.title}}</span>
        </router-link>
      </li>
    </ul>
    <div class="bottom-line" :style="{width:`${lineWidth}px`,}"></div>
  </div>
</template>

<script>
export default {
  name: "NavTab",
  props: {
    navList: Array,
    titleColor: String,
    lineColor: String,
    activeTitleColr: String,
    backgroundColor: String
  },
  data() {
    return {};
  },
  methods: {
    getTitleColor(path) {
      return path == this.$route.path ? this.activeTitleColr : this.titleColor;
    }
  }
};
</script>

<style scoped lang='less'>
.nav-tab {
  position: relative;
  display: inline-block;
  background-color: #0180ff;
  .nav-list {
    display: flex;
    align-items: center;
    white-space: nowrap;
    .nav-item {
      padding: 10px 15px;
      font-size: 14px;
      color: #cfcfd3;
      .router-link-active {
        color: #fff;
      }
    }
  }
   .bottom-line {
    position: absolute;
    border-radius: 1px;
    bottom: 0;
    height: 3px;
    background: #fff;
    transition: all 100ms;
  }
}
</style>
