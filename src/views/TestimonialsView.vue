<template>
    <div v-if="testimonials" id="test">
        <TestimonialComp/>
    </div>
   
    <div v-else>
        Loading...
    </div>
    <FooterComp/>
</template>
<script>
import TestimonialComp from "@/components/TestimonialComp.vue";
import FooterComp from '@/components/FooterComp.vue';
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },

  components: { TestimonialComp, FooterComp},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');
  .test{
    font-family: 'Space Mono', monospace;
    
        background-image: url(https://i.postimg.cc/SxBrRcGT/f1.jpg);
        background-repeat: no-repeat;
        background-size: cover;
  }
</style>
