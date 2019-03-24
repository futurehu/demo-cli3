<template>
  <div id="About">
    <div
      id="container"
      ref='myMap'
    ></div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      map: "",
      // 定义标记点
      markerArr: [{ x: 116.404, y: 39.915 }, { x: 116.41, y: 39.91 }],
      center: { lng: 116.405813, lat: 39.914059 }
    };
  },
  methods: {
    initMap() {
      this.createMap(); //创建地图
      this.addMapControl(); //添加控件
      this.addMarker();
    },
    createMap() {
      var map = new BMap.Map(this.$refs.myMap); //在百度地图容器中创建一个地图
      //  var point = new BMap.Point(116.405813,39.914059);//定义一个中心点坐标
      var point = new BMap.Point(this.center.lng, this.center.lat); //定义一个中心点坐标
      map.centerAndZoom(point, 15); //设定地图的中心点和坐标并将地图显示在地图容器中
      this.map = map; //将map变量存储在全局
    },
    addMapControl() {
      //向地图中添加缩放控件
      let zoomCtrl = new BMap.ZoomControl({
        anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
        offset: new BMap.Size(20, 20)
      });
      this.map.addControl(zoomCtrl); //向地图中添加缩略图控件
    },
    addMarker() {
      let imgSrc = "./images/mylocal.png";
      let myIcon = new BMap.Icon(require(`${imgSrc}`), new BMap.Size(50, 50)); //配置icon
      this.markerArr.forEach((item, i) => {
        let point = new window.BMap.Point(item.x, item.y);
        let marker = new window.BMap.Marker(point, { icon: myIcon }); //把icon和坐标添加到Marker中//
        this.map.addOverlay(marker);
      });
    }
  },
  mounted() {
    this.initMap();
  }
};
</script>
 
<style scoped lang='less'>
#container,
#About {
  height: 100%;
}
</style>