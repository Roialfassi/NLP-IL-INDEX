<template>
  <div id="app">

      <!-- <router-link to="/">All Posts</router-link> | -->
      <!-- <router-link to="/add-board">Add Board</router-link> -->
    <!-- <header class="header"> -->
    <!-- <div class="header-container"> -->
      <!-- <a href="/NNLP-IL-Index/" class="headerLink"><h1 class="site-title">NLP IL Index Website!</h1></a> -->
      <!-- <router-link to="/" class="headerLink">NLP IL Index Website!</router-link> | -->
    <!-- <span class="site-tagline">All Rights Reserved</span> -->
      <!-- </div> -->
    
    <!-- </header> -->
    <div id="nav">
 

    <nav class="main-nav">
  <div class="container">
      <ul class= "nav-ul">
        <li><router-link to="/" class="nav-link">NLP Index</router-link></li>
      <li><a class="nav-link" href="https://nnlp-il.mafat.ai/" target="_blank">National NLP Program</a></li>
      <li><a  class="nav-link" href="https://github.com/NNLP-IL/Resources" target="_blank">Index GitHub</a></li>
      <li><a  class="nav-link" href="https://nnlp-il.github.io/Blog/" target="_blank">Blog</a></li>
      <li><router-link to="/Corpora" class="nav-link">Corpora</router-link></li>
      <li><router-link to="/LinguisticResources" class="nav-link">Linguistic Resources</router-link></li>
      <li><router-link to="/Code" class="nav-link">Code</router-link></li>
      <li><router-link to="/TaggingTools" class="nav-link">Tagging Tools</router-link></li>
      <li><router-link to="/LabsAndResearchers" class="nav-link">Labs & Researchers</router-link></li>
      <li><router-link to="/Papers" class="nav-link">Papers</router-link></li>
      <li><router-link to="/cpm" class="nav-link">Courses, Presentations and Meetups</router-link></li>
    </ul>
    </div>
  </nav>
  <router-view/>
</div>
</div>
</template>

<script>
import router from "router"
export default {
  methods: {
    moveTo(link) {
      router.push({ name: link})
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
} */

/* #nav a.router-link-exact-active {
  color: #42b983;
} */
.header {
  background: #03A9F4;
  color: white;
  padding: em(10000px);
}

.site-title{
  color: white;
  font-weight: 400;
  width: 100%;
  text-align: center;
  font-size: em(42px);
  margin: 1500;
}
  .header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 75em;
  margin: 0 auto;
  }
  .container {
  max-width: 75em;
  margin: 0 auto;
}
  .headerLink:hover{
    text-decoration: none;
  }


  .nav-link:hover{
        background-color: rgb(237, 54, 54);
        color: rgb(255, 255, 255);
  }
  .nav-link:focus{
        background-color: rgb(232, 209, 82);
        color: rgb(255, 255, 255);
  }
  .main-nav {
  background: rgb(164, 91, 91);
  color: white;
  }
  .nav-link {
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: em(15px) em(35px);
      display: flex;
      text-transform: none;
  }

  .nav-ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .container {
  max-width: 75em;
  margin: 0 auto;
}

</style>
