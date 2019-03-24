<template>
  <div id="City">
    <div
      class="head-title"
      @click="back"
    >
      <img
        src="./images/back.png"
        alt=""
        srcset=""
      >
      <span>城市选择</span>
    </div>
    <div class="current-city">
      <img
        src="./images/loc4.png"
        alt=""
      >
      <span>当前定位城市</span>

    </div>
    <div class="local-city add-weight">
      郑州市
    </div>
    <div class="no-limitCity">
      <ul>
        <li>不限城市</li>
        <li>全国</li>
      </ul>
    </div>
    <div class="hot-city">
      <ul>
        <li>热门城市</li>
        <li>
          <span v-for="(hotItem,index) in hot_list" :key="index">{{hotItem.area_name}}</span>
          
        </li>
      </ul>
    </div>
    <div class="city-list">
      <div
        v-for="(item,index) in allList"
        :key="index"
      >
        <div
          class="tag"
          :id="item.initials"
        >{{item.initials}}</div>
        <div class="detail-city">
          <ul>
            <li
              v-for="(city_list,i) in item.list"
              :key="i"
            >{{city_list.area_name}}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="word-fix">
      <ul>
        <li
          v-for="(item,i) in allList"
          :key="i"
        ><a
            :href="`#${item.initials}`"
            @click="clickItem(i)"
            :class="{textActive:i==checkIndex}"
          >{{item.initials}}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "City",
  data() {
    return {
      city_url: "/v2.0/area/index",
      allList: [],
      checkIndex: 0, //默认第一个高亮
      hot_list:[] //热门城市
    };
  },
  created() {
    this.getCity();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    clickItem(curIndex) {
      // e.target.classList.add('textActive')
      this.checkIndex = curIndex;
    },
    async getCity() {
      let res = await this.$post(this.city_url);
      this.allList = res.result;
      this.hot_list = res.hot;
    }
  }
};
</script>

<style scoped lang='less'>
.textActive {
  background-color: skyblue;
  border-radius: 2px;
  color: white;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.head-title {
  display: flex;
  padding: 2vw;
  background-color: #fff;
  img {
    transform: scale(0.5);
  }
  span {
    padding-right: 2vw;
    font-weight: 500;
    .center();
    flex: 8;
  }
}
.current-city {
  padding: 3vw 2vw;
  & > img {
    vertical-align: middle;
    width: 5vw;
  }
}
.local-city {
  padding: 3vw 2vw;
  background-color: #fff;
}
.add-weight {
  font-weight: 600;
}
.no-limitCity > ul,
.hot-city > ul {
  li:first-of-type {
    padding: 3vw 2vw;
  }
  li:last-of-type {
    .local-city();
  }
}
.hot-city > ul {
  li:last-of-type {
    span {
      display: inline-block;
      padding: 2vw 3vw;
      background-color: #f6f6f6;
      margin-right: 2vw;
      font-size: 14px;
      border-radius: 2px;
    }
  }
}
.tag {
  .local-city();
  background-color: #f6f6f6;
  padding-left: 3vw;
}
.detail-city > ul {
  background-color: #fff;
}
.detail-city > ul {
  li {
    padding: 3vw;
    padding-left: 3vw;
    background-color: #fff;
    border-bottom: 1px solid #eee;
    margin-left: 2vw;
  }
}
// 字母列表样式
.word-fix {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  width: 14px;
  height: 100%;
  top: 0;
  right: 2vw;
  ul > li {
    font-size: 14px;
    line-height: 17px;
    padding: 2px 0;
    color: #202224;
    text-align: center;
    a {
      display: block;
      // padding: 1px;
    }
  }
}
</style>