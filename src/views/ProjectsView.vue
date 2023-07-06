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
</template>
<script>
import ProjectComp from "@/components/ProjectComp.vue";
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProjects");
  },

  components: { ProjectComp },
};
</script>

<style scoped>
.projects{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}
</style>