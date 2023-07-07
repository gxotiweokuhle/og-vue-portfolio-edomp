<template>
    <div class="icon">
      <!-- <section class="container"> -->
        <h3 class="text-center text-white">Technical Skills</h3>
        <!-- <div class="row justify-content-center gap-3"> -->
        <div class="row text-center">
          <div class="col-12 col-md-3 col-sm-6 text-center mb-2" v-for="Languages in Languages" :key="Languages.id">
           <img :src="Languages.image" :alt="Languages.image" class="rounded-circle">
          </div>
        </div>
      <!-- </section> -->
     </div>
  
  </template>
  <script>
  export default {
    computed: {
      Languages() {
        return this.$store.state.Languages;
      },
  
     
    },
    mounted() {
      this.$store.dispatch("fetchLanguages");
  
  
    },
  };
  </script>
  <style>
    img{
        max-width: 200px;
    }
</style>