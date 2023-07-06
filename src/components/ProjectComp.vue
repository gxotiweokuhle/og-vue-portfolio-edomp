<template>
    <routerlink :to="{name: 'project', params:{id: project.id}}">
        <div class="card">
            <img  :src="project.image" :alt="project.image">
            <div class="card-body">
                <h3 class="card-title text-center">{{ project.projectName }}</h3>
                <p class="card-text text-center p-2">{{ project.brief }}</p>
                <div class="link-btns">
                    <a :href="project.github" class="btn" target="_blank">Github</a>
                    <a :href="project.netlify" class="btn" target="_blank">Netlify</a>
                </div>
            </div>
        </div>
    </routerlink>
   
</template>
<script>
    export default {
  props: ["project"],
};
</script>

<style scoped>
    .card{
      /* display: flex;
      flex-wrap: wrap; */
      justify-content: space-evenly;
      align-content: center;
      background-color: plum;
      width: 400px;
      margin-block: 20px;
      height: 400px;
    }
    img{
        max-width: 400px;
    }
    .link-btns{
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .btn{
    background-color: #800080;
    }
    
</style>