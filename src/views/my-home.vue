<template>
  <div class="home">
    <p class="bor-b">测试22像素字体，类似于 view) 是11111111111111111111</p>
    <div>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHome",
  components: {},
  props: {},
  data() {
    return {};
  },

  computed: {},
  created() {},

  methods: {}
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