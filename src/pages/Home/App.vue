<template>
  <img alt="Vue logo" src="../../assets/logo.png">
  <SiteHeader 
  src="/home/ahoque245/Projects/websites/mma_website/src/assets/teleport.mp4/"
  @ready="video-player.playVideo()"
  />
  <hello-world msg="MMA Website in Progress"/>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import SiteHeader from '../../components/SiteHeader.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SiteHeader,
  }
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
