<template>
    <div v-if="education">
        <ResumeComp v-for="edu of education" 
        :key="edu.id"
        :edu="edu"
        />
    </div>
    
   
    <div v-else>
        Loading...
    </div>
</template>
<script>
import ResumeComp from "@/components/ResumeComp.vue";
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
    education2(){
      return this.$store.state.education2;
    },
  },
  mounted() {
    this.$store.dispatch("fetchEducation");


  },

  components: { ResumeComp },
};
</script>