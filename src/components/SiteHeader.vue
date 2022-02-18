
<template>
  <header>
    <img alt="Vue logo" src="../assets/logo.png" height="50">
    <p>My Vue.js Application</p>
    <nav>
      <ul>
        <router-link to="/">Home</router-link> 
        <router-link to="/about">About</router-link>
      </ul>
    </nav>
    <router-view/>
  </header>
</template>


<script>
//TODO: import the from vue-responsive-vide-backbground player


  export default {
  /*
  export default is used to make our prop exportable
  */
    name: 'SiteHeader',
    components: {
    },

    props:{}, 

    //what to do when this is mounted in DOM
    mounted(){
      this.VideoBackground.PlayVideo=true;
    },

    //`data` property in component must be a function
    data: function() {
      return {
        src: "../assets/logo.png"
      };
    },

    methods:{}
    
  }
</script>

<style>
  header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;

    p {
      margin-left: 1rem;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
  }
</style>