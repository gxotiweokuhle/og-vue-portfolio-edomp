<template>
    <routerlink :to="{name: 'project', params:{id: project.id}}">
        <div>
            <div>
                <img :src="project.image" :alt="projectName">
                <h3>{{ project.projectName }}</h3>
                <p>{{ project.brief }}</p>
            </div>
            <div>
                <div>
                    <button>Github</button>
                </div>
                <div><button>Netlify Live</button></div>
            </div>
            
        </div>
    </routerlink>
</template>
<script>
    export default {
  props: ["project"],
};
</script>