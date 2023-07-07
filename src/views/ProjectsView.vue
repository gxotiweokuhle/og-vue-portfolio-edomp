<template>
    <div v-if="projects" class="projects">
        <ProjectComp v-for="project of projects"
        :key="project.id"
        :project="project"
        />
    </div>
    <div v-else>
        loading...
    </div>
    <FooterComp/>
</template>
<script>
import ProjectComp from "@/components/ProjectComp.vue";
import FooterComp from '@/components/FooterComp.vue';
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },

  components: { ProjectComp, FooterComp },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');
.projects{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  background-image: url(https://i.postimg.cc/SxBrRcGT/f1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Space Mono', monospace;
}
</style>