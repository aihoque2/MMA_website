TODO: Start with some sabe.io tutorials

<template>
  <img alt="Vue logo" src="../../assets/logo.png">
  <!--
  <SiteHeader 
  src="../../assets/teleport.mp4"
  @ready="video-player.playVideo()"
  />
  -->
  <VideoBackground
  src="../../assets/teleport.mp4"
  style="max-height: 400px; height: 100vh;"
  @onclick=playVideo
  >
    <h1 style="color: Black;">VIDEO BACKGROUND!</h1>
  </VideoBackground>
  <hello-world msg="MMA Website in Progress"/>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
//import SiteHeader from '../../components/SiteHeader.vue'
import VideoBackground from 'vue-responsive-video-background-player'


export default {
  name: 'App',
  components: {
    HelloWorld,
    VideoBackground,
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
