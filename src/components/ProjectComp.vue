<template>
    <routerlink :to="{name: 'project', params:{id: project.id}}">
        <section class="card">
            <div>
                <div class="img-container">
                <img  :src="project.image" :alt="project.image">
            </div>
        
            <div class="card-body">
                <h3 class="card-title text-center text-white">{{ project.projectName }}</h3>
                <p class="card-text text-end text-white px-5">{{ project.brief }}</p>
                <div class="link-btns">
                    <a :href="project.github" class="btn" target="_blank">Github</a>
                    <a :href="project.netlify" class="btn" target="_blank">Netlify</a>
                </div>
            </div>
            </div>
        </section>
            
            
      
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
      background-color: black;
      width: 400px;
      margin-block: 20px;
      height: 400px;
    
    }
    .card:hover img{
    scale: 1.1;
    }
.card:hover{
    box-shadow: 5px 15px 25px white !important;
}
.card img{
    transition: all 0.3s !important;
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
    background-color: blueviolet;
    }
    .btn :hover{
        color: white;
    }
    p{
        font-size: 12px;
       
    }
</style>