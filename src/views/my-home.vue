<template>
  <div class="home">
    <p class="bor-b">测试22像素字体，类似于 view) 是11111111111111111111</p>
    <div>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
    </div>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import Vue from "vue";
import { ActionSheet } from "vant";

Vue.use(ActionSheet);
export default {
  name: "MyHome",
  components: {},
  props: {},
  data() {
    return {
      show: false,
      actions: [
        { name: "选项" },
        { name: "选项" },
        { name: "选项", subname: "描述信息" }
      ]
    };
  },

  computed: {},
  created() {},

  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    }
  }
};
</script>
<style lang="less" scoped>
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
</style>