<template>
    <!--hero-->
    <section class="hero">
        <div class="hero-inner text-centre text-white p-5">
          <p class="text">Aspiring Web Developer</p>
          <p class="text">Welcome to my World of Creativity.</p>
          <a href="/about" class="btn">Explore</a>
      </div>
    </section>


   
</template>
<script>

    export default{
        
    }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');
    .hero {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(https://i.postimg.cc/6qZmdk4V/bg-gif.gif);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: 'Space Mono', monospace;
    font-weight: 600;
    font-size: 50px;

}
.hero h1 {
    font-size: 5em;
    margin-top: 0;
    margin-bottom: 0.5em;
}
.hero-inner{
    font-size: 25px;
}
.btn{
    background-color: blueviolet;
}
img{
    max-width: 50px;
}
.text{
  animation: fadeInUp;
  animation-duration: 3s;

}

</style>