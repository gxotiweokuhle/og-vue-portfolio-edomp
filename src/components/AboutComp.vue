<template>
    <!--bio section-->
    <section class="about">
        <!--my image-->
        <div class="about-hero">
            <h1>About Me</h1>

            <img src="https://i.postimg.cc/prd9XVH0/C12-Okuhle-Gwotiwe-1.jpg" alt="myphoto" loading="lazy" class="hero img"/>
            <h5>Okuhle Gxotiwe</h5>
    
            <p class="text"> 
                I am passionate and a go-getter.I enjoy learning new technologies and upskilling myself via online courses . Reading books, drawing are what I enjoy doing on my spare time and full-time I am coding while listening to music.
                I believe in innovation and that Tech has the ability to solve our modern problems hence it is important that more youth is exposed to 
                obtaining such skills especially in the Townships.
            </p>
        </div>
    </section>
    <!--resume heading-->
    <div class="text-center" id="title">
        <h1 class="mb-0">Resume</h1>
    </div>
    <!--resume section-->
    <section class="resume-parts">
       
        <!--education-->
        <div class="views1 rounded-circle rounded-3">
            <div class="icon-img">
              <img src="https://i.postimg.cc/1XzfyKwk/mortarboard.png" alt="" class="icon1">
                <h5 class="text-center">Education</h5>
                <a href="/education">View</a>
            </div>
        </div>
        <!--skills-->
        <div class="views2 rounded-circle">
            <div>
                <img src="https://i.postimg.cc/Kj80PdhR/integrity-2.png" alt="" class="icon1">
               <h5>Skills</h5>
               <a href="/skills">View</a>
            </div>
        </div>
        <!--download resume-->
        <div class="views3 rounded-circle">
            <div>
                <img src="https://i.postimg.cc/MHsqt2c4/cv-2.png" alt="" class="icon1">
               <h5>Resume</h5>
               <a href="https://www.jobseeker.com/d/2Fm7BJP5yUHSbyaS3Bf7PQ/view" target="_blank">Download</a>
            </div>
        </div>
    </section>
    <!--footer-->
    <div class="social">
            <div class="icon">
                <a href="https://github.com/" target="_blank">
                <img src="https://i.postimg.cc/SxMJN8w9/github-1.png" alt="github" class="thumb">
            </a>
            </div>
            <div class="icon">
                <a href="https://www.linkedin.com/" target="_blank">
                <img src="https://i.postimg.cc/15T8QMYP/linkedin-1.png" alt="linkedin" class="thumb">
            </a>
            </div>
            <div class="icon">
                <a href="https://www.facebook.com/" target="_blank">
                <img src="https://i.postimg.cc/CKpdZ5gQ/facebook-1.png" alt="facebook" class="thumb"></a>
            </div>
            <div class="icon">
                <a href="https://twitter.com/" target="_blank">
                <img src="https://i.postimg.cc/YqCB2HmB/twitter.png" alt="twitter" class="thumb">
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
    .about{
        /* display: flex; */
        /* align-items: center;
        justify-content: center;
        gap: 2.5rem;
        max-width: 68.75rem;
        margin: 50px; */
        min-height: 100vh;
        background-image: url(https://i.postimg.cc/6qZmdk4V/bg-gif.gif);
        
        /* margin-block: 50px; */
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
   
    .resume-parts{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        background-color: #AB82AD;
        height: 600px;
        
    }
    h3{
        color: #361B57;
    }
    .text{
        color: #AB82AD;
    }
    img{
        max-width: 300px;
        max-height: 500px;
    }
    .views1{
        background-color:#A491B8;
        height: 300px;
        width: 300px;
        text-align: center;
        padding: 3%;
       

    }
    .views2{
        background-color:#A491B8;
        height: 300px;
        width: 300px;
        text-align: center;
        padding: 3%;

    }
    .views3{
        background-color:#A491B8;
        height: 300px;
        width: 300px;
        text-align: center;
        padding: 3%;

    }

    .icon1 {
        height: 7rem;
        width: 7rem;
        border-radius:51%;
    }

   #title{
    background-color: #AB82AD;
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

    .thumb {
        height: 3rem;
        width: 3rem;
        border-radius: 5rem;
    }
    #title{
        color: #361B57;
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