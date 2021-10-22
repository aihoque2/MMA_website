
<template>
<VideoBackground>


</template>


<script>
//TODO: import the from vue-responsive-vide-backbground player
import VideoBackground from 'vue-responsive-video-background-player'
Vue.component('video-background', VideoBackground);


export default {
  /*
  export default is used to make our prop exportable
  */
  name: 'SiteHeader',
  props: {
    video_background: VideoBackground
  }

</script>