
<template>
<video-background
:src="src"
style="max-height: 500px; height: 100vh;"
>
  <h1>Welcome to the Website!</h1>
  
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
    },

    data(): =>({
      src: String
    }},

    mounted(){},
    
    methods{}
  }
</script>