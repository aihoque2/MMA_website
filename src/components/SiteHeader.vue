
<template>
<video-background
:src="src"
style="max-height: 400px; height: 100vh;"
>
  
</video-background>


</template>


<script>
//TODO: import the from vue-responsive-vide-backbground player

  import VideoBackground from 'vue-responsive-video-background-player'

  export default {
  /*
  export default is used to make our prop exportable
  */
    name: 'SiteHeader',
    components: {
      "video-background": VideoBackground
    },
    props: {
      src: String
    }
  }
</script>