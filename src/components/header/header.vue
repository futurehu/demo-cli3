<template>
  <!-- 通用顶部 -->
  <div>
    <div class="head">
      <img src="../../assets/images/logo.png" class="logo" />
      <img src="../../assets/images/nav.png" class="nav" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style scoped lang='less'>
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  .logo {
    width: 240px;
    padding-right: 60px;
  }
  .nav {
    width: 25px;
    // height: 30px;
    padding-left: 10px;
  }
}
</style>
