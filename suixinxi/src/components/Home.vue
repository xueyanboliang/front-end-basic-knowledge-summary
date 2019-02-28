<template>
  <div class="wrapper">
    <div class="header">
      <div class="title left">随心洗</div>
      <div class="right tags">
        <ul>
          <li><span class="bg bg-no-fade"></span><span>不褪色</span></li>
          <li><span class="bg bg-mix-wash"></span><span>可混洗</span></li>
          <li @click="playVideo2()" style="cursor: pointer;"><span class="bg bg-test-report"></span><span>检测报告</span></li>
        </ul>
      </div>
    </div>
    <div class="body">
      <div>
        <p class="ad">No fade jeans can be washed with other clothes freely</p>
      </div>
      <div class="background"></div>
      <div class="ad-group">
        <p class="ad bold">永不褪色，轻松洗涤</p>
        <p class="ad bold">Never fade denim</p>
        <p class="ad less-bold">牛仔面料锁色技术</p>
        <p class="ad less-bold">在穿洗过程中，不褪色不泛黄，可放心与其他衣物混洗</p>
        <p class="ad">No fade demin made with ‘permanent dyed’ yarns that no color loss to ensure the jeans stay dark.</p>
      </div>
      <div class="video-group">
        <div class="video-wrapper">
          <div class="open-btn" @click="playVideo()">
            <i class="play-video" v-show="isShowPlayBtn"></i>
          </div>
          <div class="video">
            <video src="../assets/media/wash-introduction.mp4" poster="../assets/img/poster.jpg" ref="videoEl"></video>
          </div>
        </div>
        <div class="learn-more" @click="playVideo2()">
          了解更多
        </div>
      </div>
      <div class="contrast-img">
        <div class="img">
          <div class="words-left">
            <p class="fontSize16">市面某品牌</p>
            <p>Other brand</p>
          </div>
          <div class="words-right">
            <p class="fontSize16">随心洗牛仔</p>
            <p>Our Jeans</p>
          </div>
        </div>
        <div class="ad-group">
          <p class="ad bold">100°C 热水实验</p>
          <p class="ad less-bold">100°C hot water fading test</p>
          <p class="ad">在100度热水浸泡5分钟后，随心洗牛仔不褪色</p>
          <p class="ad">Our jeans will not fade when soaked in 100°C hot water.</p>
        </div>
      </div>
       <div class="contrast-img">
        <div class="img img2">
          <div class="words-left">
            <p class="fontSize16">市面某品牌</p>
            <p>Other brand</p>
          </div>
          <div class="words-right">
            <p class="fontSize16">随心洗牛仔</p>
            <p>Our Jeans</p>
          </div>
        </div>
        <div class="ad-group">
          <p class="ad bold">洗衣粉洗涤测试</p>
          <p class="ad less-bold">Detergent fading test</p>
          <p class="ad">洗衣粉加冷水，反复搓洗后，随心洗牛仔不褪色</p>
          <p class="ad">Our jeans will not fade while washing with detergent</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="background background2"></div>
      <div class="contact">
        <div class="contact-title">
          <p class="ad bold" style="margin-bottom: 0rem;">联系我们</p>
          <p class="ad" style="margin-top: .3125rem;">contact us</p>
        </div>
        <div class="contact-way">
          <ul>
            <li><span class="bold" style="font-size: 1.6rem;">朱经理</span>|Michael</li>
            <li>业务总监|Business Director</li>
            <li>MOB：+86 18550211049</li>
            <li>QQ：463141038</li>
            <li>Email：nofade.denim@gmail.com</li>
          </ul>
        </div>
      </div>
      <div class="background background2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      isShowPlayBtn: true
    }
  },
  methods: {
    playVideo() {
      let player = this.$refs.videoEl;
      if(player.paused) {
        player.play();
        player.webkitRequestFullscreen();
        this.isShowPlayBtn = false;
      }else {
        player.pause();
        this.isShowPlayBtn = true;
        player.webkitExitFullscreen();
      }
    },
    playVideo2() {
      let player = this.$refs.videoEl;
      if(player.paused) {
        player.play();
        player.webkitRequestFullscreen();
        this.isShowPlayBtn = false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    padding: 0 .625rem
  }
  .header {
    padding-top: 1.875rem;
    height: 3.75rem;
    line-height: 3.75rem;
  }
  .header .title {
    font-size: 2.5rem;
  }
  .header .tags ul>li {
    float: left;
    margin-left: .3125rem;
    font-size: 0.8rem;
  }
  .body {
    magin: .625rem 0;
  }
  .background {
    height: 6rem;
    background: url(../assets/img/background.jpg) center;
  }
  .ad {
    margin: .9375rem 0;
    font-size: 1.6rem;
  }
  .header .tags ul>li>.bg {
    display: inline-block;
    width: 1.875rem;
    height: 1.875rem;
    background: url(../assets/img/header-icon.png);
    background-size: cover;
  }
  .header .tags ul>li>span {
    display: inline-block;
    vertical-align: middle;
  }
  .header .tags ul>li>span.bg-no-fade {
    background-position: 0rem 0rem;
  }
  .header .tags ul>li>span.bg-mix-wash {
    background-position: -1.875rem 0rem;
  }
  .header .tags ul>li>span.bg-test-report {
    background-position: -3.75rem 0rem;
  }
  .video-wrapper {
    width: 9.375rem;
    height: 6.25rem;
    background: #000;
    margin-right: .625rem;
    z-index: 1;
    position: relative;
    overflow: hidden;
  }
  .video-wrapper .open-btn {
    z-index: 2;
    background: rgba(0,0,0,0);
  }
  .video {
    z-index: 0;
  }
  .video video {
    width: 100%;
    height: 100%;
  }
  .open-btn, .video {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
  }
  .play-video {
    display: inline-block;
    width: 1.875rem;
    height: 1.875rem;
    background-image: url(../assets/img/play-circle.png);
    background-size: contain;
    position: absolute;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    cursor: pointer;
  }
  .learn-more, .video-wrapper {
    display: inline-block;
    vertical-align: middle;
  }
  .learn-more {
    width: 6rem;
    height: 2.5rem;
    background:#000;
    color: #fff;
    text-align: center;
    cursor: pointer;
    line-height: 2.5rem;
  }
  .contrast-img {
    width: 100%;
  }
  .img {
    display: inline-block;
    position: relative;
    margin: .9375rem auto;
    height: 12.5rem;
    width: 100%;
    background: url(../assets/img/hot-test.png) no-repeat;
    background-size: cover;
    color: #fff;
  }
  .img2 {
    background: url(../assets/img/wash-test.png) no-repeat;
     background-size: cover;
  }
  .img .words-left{
    position: absolute;
    left: 5rem;
    bottom: 1.25rem;
  }
  .img .words-right{
    position: absolute;
    right: 5rem;
    bottom: 1.25rem;
  }
  .fontSize16 {
    font-size: 1rem;
  }
  .bold {
    font-weight: bold;
  }
  .less-bold {
    font-weight: 600;
  }
  .background2 {
    height: 5rem;
  }
  .contact-way {
    margin: 1.25rem 0;
    text-align: left;
    padding-left: 1.25rem;
    font-size: 1.5rem;
  }
  .contact-way ul>li {
    margin-top: .3125rem;
  }
</style>
