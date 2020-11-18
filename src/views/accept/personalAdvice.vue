<template>
  <div class="advice">
    <van-nav-bar title="个人意见" @click-left="onClickLeft" />

    <div style="background:rgb(228,240,255)" id="topText">
      <p>单井工程名称：D12-81井钻井工程</p>
      <p>施工队伍：中原钻三40485队 开工作业类别：钻井->一开</p>
    </div>

    <div style="background:#fff" class="pass">
      <span>是否通过</span>
      <div class="btn">
        <van-button type="default" size="small">通过</van-button>
        <van-button type="info" size="small">不通过</van-button>
      </div>
    </div>

    <div class="bottom">
      <p>个人意见</p>
      <van-cell-group>
        <van-field v-model="value1" label="文本" type="textarea" placeholder="请输入" class="textarea" />
      </van-cell-group>

      <van-button type="info">保存</van-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "",
  data() {
    return {
      value1: "请输入文字"
    };
  },
  methods: {
    onClickLeft() {}
  }
};
</script>

<style scoped lang='less'>
.advice {
  background-color: #f8f8f8;

  #topText {
    color: #0046a3;
    font-size: 12px;
    padding: 10px 20px;
  }

  .pass {
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-between;
  }

  .btn {
    float: right;
    button {
      margin: 0 5px;
    }
  }

  .bottom {
    background-color: #fff;
    margin-top: 10px;
    display: flex;

    .textarea {
      margin: 20px 10px;
      min-height: 20px;
      padding: 5px;
      width: 100%;
      display: inline-block;
      flex: 1;
      margin: 10px 5px;
      font-size: 15px;
      color: #0c0c0c;
      outline: none;
      border: none;
      overflow-y: auto;
      appearance: none;
      text-align: inherit;
    }
  }
}
</style>
