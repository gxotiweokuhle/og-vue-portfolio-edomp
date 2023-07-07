<template>
  <Navbar/>
  <main>
    <router-view/>
  </main>
  
  
</template>

<script>
import Navbar from './components/Navbar.vue';



export default{
  components: { Navbar},
}
</script>

<style>
#topnav{
  background-color: #660099 ;
}
.offcanvas-body{
  background-color: #660099 ;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
 
}
#app{
  overflow-x: hidden;
}
html, body{
  min-width:100%;
  height: 100vh;
}
</style>
