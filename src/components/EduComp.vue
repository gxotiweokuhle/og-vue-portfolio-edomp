<template>
  <div class="col-12 col-md-6 col-sm-6 text-center p-2">
    <section class="container">
      <h3 class="text-white">Education</h3>
      <div class="text-center p-2">
        <div v-for="education in educations" :key="education.id">
          <h3 class="text-white"><span>Year: </span>{{ education.year }}</h3>
          <h6 class="text-start text-white"><span>Description: </span>{{ education.desc }}</h6>
        </div>
      </div>
      
    </section>
   </div>

</template>
<script>
export default {
  computed: {
    educations() {
      return this.$store.state.education;
    },

   
  },
  mounted() {
    this.$store.dispatch("fetchEducation");


  },
};
</script>
<style>
  h3, h6{
    animation: bounceInLeft;
  animation-duration: 3s;
  }
</style>