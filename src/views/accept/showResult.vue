<template>
  <div class="result">
    <van-nav-bar title="查看结果" @click-left="onClickLeft" left-arrow />

    <div style="background:rgb(228,240,255)" id="topText">
      <p>单井工程名称：D12-81井钻井工程</p>
      <p>施工队伍：中原钻三40485队 开工作业类别：钻井->一开</p>
    </div>

    <div class="middleBox">
      <div class="isPassBg">
        <span class="passTitle">是否通过</span>
        <span class="isPass">不通过</span>
      </div>

      <table>
        <tr>
          <td class="firstCol">意见</td>
          <td>承包商HSE资格确认证、安全生产许可证、市场准入证符合要求。</td>
        </tr>

        <tr>
          <td class="firstCol">附件</td>
          <td></td>
        </tr>
      </table>
    </div>

    <div class="bottom">
      <p class="title">成员意见</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Grid, GridItem } from "vant";
Vue.use(Grid);
Vue.use(GridItem);

export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang='less'>
.result {
  background-color: #f8f8f8;
}
#topText {
  color: #0046a3;
  font-size: 12px;
  padding: 10px 20px;
}

.result .middleBox {
  background-color: #ffffff;
}

.isPassBg {
  width: 100%;
  justify-content: space-between;
  display: flex;

  .passTitle {
    margin: 10px 17px;
    color: #999999;
    font-size: 15px;
  }

  .isPass {
    color: red;
    margin: 10px 20px;
    font-size: 15px;
  }
}

.firstCol {
  font-size: 15px;
  color: #999999;
  padding: 10px;
  width: 40px;
  text-align: center;
}

.bottom {
  background-color: #ffffff;
  margin-top: 10px;
    
  .title {
    margin: 10px 18px;
    font-size: 15px;
    padding: 10px 0;
  }

  .grid {
    color: black;
  }
}
</style>
