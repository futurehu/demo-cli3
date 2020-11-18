<template>
  <!-- 开工验收检查 添加备注 -->
  <div class="remark">
    <van-nav-bar title="问题维护" @click-left="$router.go(-1)" left-arrow />
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
    <div class="note">
      <van-cell value="添加备注" />
      <van-field v-model="message" rows="4" autosize type="textarea" placeholder="请输入备注..." />
    </div>

    <!-- 上传附件 -->
    <div class="up-file">
       <van-cell value="上传附件" />
      <van-uploader
        v-model="fileList"
        accept="image/*"
        :after-read="afterRead"
        :multiple="false"
        :max-count="9"
        :max-size="4 * 1024 * 1024"
        :before-read="beforeRead"
        @click="afterRead()"
        @delete="deleteItem"
      />
    </div>

    <van-button block color="#197CFF" class="complete">保存</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Uploader } from 'vant';

Vue.use(Uploader);
export default {
  name: "",
  data() {
    return {
         fileList: [], //文件列表
      message: "" //备注
    };
  },
  methods: {
    // 删除 //detail额外信息，包含 name 和 index 字段
    deleteItem(file, detail) {
      // console.log("file", file);
      // console.log("detail", detail);
      this.imgfile.splice(detail.index, 1);
    },
    // 返回布尔值
    beforeRead(file) {
      console.log(file);
      let maxSize = 4 * 1024 * 1024;
      if (file.size > maxSize) {
        this.$toast("文件大小不能超过4M!");
        return false;
      }
      return true;
    },

    async afterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      // 此时可以自行将文件上传至服务器
      let config = {
        headers: {
          "csrf-csrf": "csrf-csrf",
          "Content-Type": "multipart/form-data"
        }
      };
      let formdata = new FormData();
      if (file.length > 0) {
        for (let i = 0; i < file.length; i++) {
          formdata.append("fileData", file[i].file);
          let res = await axios.post("/nljz/Zskjk/upload", formdata, config);
          file.status = "";
          file.message = "";
          this.imgfile = [...this.omit(res.data.path, "status")];
        }
      } else {
        // 通过append向form对象添加数据,可以通过append继续添加数据
        formdata.append("fileData", file.file);
        let res = await axios.post("/nljz/Zskjk/upload", formdata, config);
        file.status = "";
        file.message = "";
        this.imgfile.push(this.omit(res.data.path[0], "status"));
      }
      console.log("this.imgfile", this.imgfile);
    }
  }
};
</script>

<style scoped lang='less'>
.remark {
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
  .note {
    margin-bottom: 10px;
    /deep/.van-field__control{
       background:  #F4F4F4;
       padding-left: 8px;
       padding-top: 5px;
    }
  }
}
.up-file {
    background: #fff;
   min-height: 380px;
    .van-uploader {
        margin: 10px;
    }
}
.complete {
  width: 80%;
  position: fixed;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  z-index: 999;
}
</style>
