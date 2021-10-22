
<template>

</template>


<script>
//TODO: import the from vue-responsive-vide-backbground player
import VideoBackground from 'vue-responsive-video-background-player'
Vue.component('video-background', VideoBackground);


export default {
  //TODO
  name: 'VideoBackground',
  props: {
    msg: String
  }

</script>