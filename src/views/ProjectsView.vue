<template>
    <div v-if="projects">
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
    this.$store.dispatch("getProjects");
  },

  components: { ProjectComp },
};
</script>