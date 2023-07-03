<template>
    <div v-if="education">
        <EducationComp v-for="school of education" 
        :key="school.id"
        :school="school"
        />
    </div>
    <div v-else>
        Loading...
    </div>
</template>
<script>
import EducationComp from "@/components/EducationComp.vue";
export default {
  computed: {
    education() {
      return this.$store.state.education;
    },
  },
  mounted() {
    this.$store.dispatch("getEducation");
  },

  components: { EducationComp },
};
</script>