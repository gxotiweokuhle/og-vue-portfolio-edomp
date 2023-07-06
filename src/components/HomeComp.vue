<template>
    <!--hero-->
    <section class="hero">
        <div class="hero-inner text-centre text-white p-5">
          <p>Aspiring Web Developer</p>
          <p>Welcome to my World of Creativity.</p>
          <a href="/about" class="btn">Explore</a>
      </div>
    </section>
    <!--social links-->
    <div class="social">
            <div class="icon">
                <a href="https://github.com/" target="_blank">
                <img src="https://i.postimg.cc/SxMJN8w9/github-1.png" alt="github">
            </a>
            </div>
            <div class="icon">
                <a href="https://www.linkedin.com/" target="_blank">
                <img src="https://i.postimg.cc/15T8QMYP/linkedin-1.png" alt="linkedin">
            </a>
            </div>
            <div class="icon">
                <a href="https://www.facebook.com/" target="_blank">
                <img src="https://i.postimg.cc/CKpdZ5gQ/facebook-1.png" alt="facebook"></a>
            </div>
            <div class="icon">
                <a href="https://twitter.com/" target="_blank">
                <img src="https://i.postimg.cc/YqCB2HmB/twitter.png" alt="twitter">
            </a>
            </div>
    </div>
    <!--copyright-->
    <div id="copyright" class="text-center p-2">
            <p>@Copyrights Reserved by Okuhle Gxotiwe 2023.</p>
    </div>

   
</template>
<script>

    export default{
        
    }
</script>
<style scoped>
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
    font-family: 'Dancing Script', cursive;
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
    background-color: #800080;
}
img{
    max-width: 50px;
}
.social{
    /* right: -80px; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    bottom: 50%;
    background-color: #A491B8;
  }
  .social a :hover{
    transition: 0.3s;
    padding-inline: 5px;
  }
  #copyright{
    display: flex;
    justify-content: center;
    background-color: #A491B8;
    font-family: 'Dancing Script', cursive;
    color:#361B57;
    font-size: 20px;
  }

</style>