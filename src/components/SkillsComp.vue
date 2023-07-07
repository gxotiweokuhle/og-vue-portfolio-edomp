<template>

    <div class="col-12 col-md-6 col-sm-6 text-center p-2" id="skills">
      <section class="container">
        <h3 class="text-white">Soft Skills</h3>
        <div class="row justify-content-center">
          
          <div v-for="skills in skills" :key="skills.id">
              <h6 class="text-white">{{ skills.skill }}</h6>
          </div>
        </div>
      </section>
     </div>
  
  </template>
  <script>
  export default {
    computed: {
    skills() {
      return this.$store.state.skills;
    },

   
  },
  mounted() {
    this.$store.dispatch("fetchSkills");


  },
  };
  </script>
  <style>
  </style>