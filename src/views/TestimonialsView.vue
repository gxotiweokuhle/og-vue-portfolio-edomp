<template>
    <div v-if="testimonials">
        <TestimonialComp/>
    </div>
   
    <div v-else>
        Loading...
    </div>
</template>
<script>
import TestimonialComp from "@/components/TestimonialComp.vue";
export default {
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    },
  },
  mounted() {
    this.$store.dispatch("fetchTestimonials");
  },

  components: { TestimonialComp },
};
</script>