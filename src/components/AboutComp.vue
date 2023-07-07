<template>
    <!--bio section-->
    <section id="about-section">
        <!--my image-->
        <div class="about-hero">
            <h1 class="text-white">About Me</h1>
            <div class=" w-10 m-0">
                <img src="https://i.postimg.cc/prd9XVH0/C12-Okuhle-Gwotiwe-1.jpg" alt="myphoto" loading="lazy" class="hero img" style="width: 300px"/>
            </div>
            <div class="w-75 text-center">
            <h5 class="text-white">Okuhle Gxotiwe</h5>
            <h5 class="text-white">Junior Developer</h5>
    
            <p class="text-white"> 
                I am passionate and a go-getter.I enjoy learning new technologies and upskilling myself via online courses . Reading books, drawing are what I enjoy doing on my spare time and full-time I am coding while listening to music.
                I believe in innovation and that Tech has the ability to solve our modern problems hence it is important that more youth is exposed to 
                obtaining such skills especially in the Townships.
            </p>
            <a href="https://www.jobseeker.com/d/2Fm7BJP5yUHSbyaS3Bf7PQ/view" target="_blank">
                    <button name="download cv" class="btn text-white">View CV</button>
            </a>
            </div>
        </div>
    </section>
 
  
</template>
<script>

 export default{
    
 }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');

    #about-section{
        font-family: 'Space Mono', monospace;
        padding: 5% 10%;
        background-image: url(https://i.postimg.cc/SxBrRcGT/f1.jpg);
        background-repeat: no-repeat;
        background-size: cover;
    }
   .about-hero{
        width: 80%;
        margin: auto;
        padding: 30px 0;
    }

    .about-hero h1{
        font-size: 50px;
        font-weight: 500;
        text-align: center;
        color:#AB82AD;
    }
    .about-hero h1::after{
        content: "";
        height: 3px;
        width: 240px;
        color: #AB82AD;
        display: block;
        margin: auto;
    }
    .about-hero img{
        margin: auto;
        margin-block: 40px;
        height: 20rem;
        width: 15rem;
        border-radius: 55%;
    }
    .about-hero h5{
        font-size: 35px;
        font-weight: 600;
        text-align: center;
        color: #AB82AD;
    }
    .about-hero p{
        font-size: 20px;
        font-weight: 600;
        line-height: 1.4;
    }
    .btn{
    font-family: 'Space Mono', monospace;
    background-color: blueviolet;}
    h1, h3, h5, p{
    
    animation: fadeInUp;
  animation-duration: 3s;
    }
    h1 {
        margin-top: 0;
    }
    @media screen and (max-width: 300px) {
        img{
            position: absolute;
            left: 3%;
            top: 10%;
            max-width: 95%;
        }

        /* h1 {
        margin-top: 7em;
        } */
    }
</style>