<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <h1>THIS IS THE ABOUT PAGE!</h1>
  <HelloWorld msg="MMA website project"/>

  <static-posts/>

</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import StaticPosts from '../components/StaticPosts.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    StaticPosts
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
