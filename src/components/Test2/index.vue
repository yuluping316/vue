<template>
  <div>
    <div id="container" class="allmap"></div>
    <div class="my">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <div class="iconfont icon1">&#xe715;</div>
    <div class="iconfont icon2">豆</div>
    <div class="iconfont icon3">&#xe71a;</div>
    <div class="iconfont icon4">&#xe716;</div>
    <div class="iconfont icon5">&#xe628;</div>
    <div class="iconfont icon6">&#xe62a;</div>
    <div class="iconfont icon7">&#xe642;</div>
  </div>
</template>

<script>
import { BMPGL } from '../../bmpgl'
import Swiper from 'swiper'
export default {
  name: 'Test2',
  data() {
    return {
      ak: "A7OGYxBUx1KN3A4XuXc0grb0T6hTEsU8", // 百度的地图密钥
      myMap: null
    };
  },
  mounted() {
    this.initMap()
    new Swiper(".swiper-container", {
      slidesPerView: 4,
      loop: true,
      autoplay: 4000,
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
    });
  },
  methods: {
    initMap() {
      // 传入密钥获取地图回调。
      BMPGL(this.ak).then((BMapGL) => {
        // 创建地图实例
        let map = new BMapGL.Map("container");
        // 创建点坐标 axios => res 获取的初始化定位坐标
        let point = new BMapGL.Point(106.497138, 29.627971)
        // 在地图上添加点标记
        var marker = new BMapGL.Marker(point, {});
        marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        map.addOverlay(marker);
        // 初始化地图，设置中心点坐标和地图级别
        map.centerAndZoom(point, 19)
        //开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true)
        map.setHeading(64.5)
        // map.setTilt(73)
        // 保存数据
        // this.myMap = map
      }).catch((err) => {
        console.log(err)
      })
    },
  }
};
</script>
<style scoped>
.iconfont {
  float: left;
  font-size: 100px;
}
.icon1 {
  color: #7bc549;
}
.icon3 {
  color: #56b6e7;
}
.icon4 {
  color: #ff763b;
}
.icon2 {
  color: #33b045;
}
.icon5 {
  color: #008655;
}
.icon6 {
  color: #8db359;
}
.icon7 {
  color: #fdbe3d;
}
.allmap {
  width: 550px;
  height: 274px;
  position: relative;
  z-index: 1;
}
.my {
  position: relative;
}
.swiper-container {
  height: 300px;
  width: 900px;
  overflow: block;
}
.swiper-button-prev {
  background-image: url(./Snipaste_2022-02-12_18-36-09.png);
  background-size: 11.5px 22px;
  left: 200px;
}
.swiper-button-next {
  right: 200px;
  background-size: 11.5px 22px;
  background-image: url(./Snipaste_2022-02-12_18-39-05.png);
}
.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
