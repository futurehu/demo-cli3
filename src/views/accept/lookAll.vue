<template>
  <!--验收会-查看全部 -->
  <div class="look-all">
    <van-nav-bar title="查看全部" @click-left="$router.go(-1)" left-arrow />
    <div class="top">
      <p>
        单井工程名称：
        D12-81井钻井工程
      </p>
      <p>
        单井工程名称：
        D12-81井钻井工程
      </p>
    </div>
    <van-collapse v-model="activeNames">
      <van-collapse-item title="检查项目：资质确认" name="1">
        <div class="list-wrap" v-for="(item,index) in 3" :key="index">
          <div class="level2-title">队伍、人员资质等</div>
          <div class="level2-item van-hairline--bottom" v-for="(list,i) in 2" :key="i">
            <p>
              <span>1、承包商HSE资格确认证、安全生产许可证、市场准入证符合要求。</span>
              <van-tag plain type="primary" round color="#00B053">无问题</van-tag>
            </p>
            <div class="note">
              <span class="label">备注</span>
              <span style="padding-left:10px;">承包商HSE资格确认证、安全生产许可证、市场准入证符合要求。</span>
            </div>
            <div class="file">
              <span class="label">附件</span>
              <div class="img-list">
                <img src="../../assets/images/banner .png" v-for="(item,i) in 2" />
              </div>
            </div>
          </div>
        </div>
      </van-collapse-item>
      <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeNames: ["1"]
    };
  }
};
</script>

<style scoped lang='less'>
.top {
  padding: 5px 10px;
  height: 50px;
  background-color: #e4f0ff;
  box-sizing: border-box;
  p {
    font-size: 14px;
    color: #0046a3;
  }
}
.list-wrap {
  .level2-title {
    margin-bottom: 5px;
    padding: 0 15px;
    position: relative;
    padding-left: 25px;
    &::before {
      content: "";
      position: absolute;
      width: 3px;
      height: 13px;
      top: 50%;
      transform: translateY(-50%);
      left: 18px;
      background-color: #197cff;
    }
     &::after {
      content: "";
      position: absolute;
      width: 3px;
      height: 13px;
      top: 50%;
      transform: translateY(-50%);
      left: 12px;
      background-color: #197cff;
    }
  }
  .level2-item {
    margin-bottom: 5px;
    padding: 3px 15px;
    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    span {
      max-width: 250px;
      color: #222222;
    }
    .file,
    .note {
      display: flex;
      .label {
        font-size: 15px;
        color: #999999;
        padding-left: 8px;
        // flex: 1;
      }
    }
    .img-list {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      img {
        width: 60px;
        height: 60px;
        margin: 10px;
        margin-bottom: 0;
      }
    }
  }
}
/deep/ .van-collapse-item__content {
  background: transparent;
  padding: 5px 0;
}
</style>
