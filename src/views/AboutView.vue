<template>
    <!--bio section-->
    <div class="about">
        <div id="image">
            <img src="https://i.postimg.cc/D0QqX7KF/C12-Okuhle-Gwotiwe-1.jpg" alt="myphoto">
        </div>
        <div id="bio" class="mt-5 text-white">
            <h3>About Me</h3>
            <p> I am passionate and a go-getter.I enjoy learning new technologies and upskilling myself via online courses . Reading books, drawing are what I enjoy doing on my spare time and full-time I am coding while listening to music.</p>
        </div>
    </div>
    <!--resume section-->
    <section class="resume-parts">
        <!--education-->
        <div class="views1">
            
            <div class="icon-img">
                <img src="https://i.postimg.cc/TY8BccW1/education.png" alt="edu-logo">
                <h3>Education</h3>
               <a href="../views/EducationView.vue">View</a>

            </div>
           <!----<div>
               <h3>Education</h3>
               <a href="../views/EducationView.vue">View</a>
            </div>--->
        </div>
        <!--skills-->
        <div class="views2">
            <div class="icon-img">
                <img src="https://i.postimg.cc/7LpNyK4T/soft-skills.png" alt="skills-logo">
            </div>
            <div>
               <h3>Skills</h3>
               <a href="/skills">View</a>
            </div>
        </div>
        <!--download resume-->
        <div class="views3">
            <div class="icon-img">
                <img src="https://i.postimg.cc/0NMs3JbW/online-resume-1.png" alt="res-logo">
            </div>
            <div>
               <h3>Resume</h3>
               <a href="">Download</a>
            </div>
        </div>
    </section>
</template>
<script>
 export default{
    
 }
</script>
<style>
    .about{
        display: flex;
        flex-direction: row;
        background-color:  #421C52;

    }
    .resume-parts{
        display: flex;
        flex-direction: row;
        background-color: #AB82AD;
        height: 600px;
    }
    h3{
        color: #361B57;
    }
    img{
        max-width: 300px;
    }
    .views1{
        background-color:#A491B8;
        height: 400px;
        
    }
    
</style>