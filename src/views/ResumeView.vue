<template>
  <section id="resume">
    <div class="row justify-content-center" id="blocks">
      <EduComp class="col-lg-6 col-md-6 col-12"/>
      <SkillsComp class="col-lg-6 col-md-6 col-12 my-auto"/> 
  </div>
   <div class="" id="block">
     <LangComp/>
    </div>
  </section>
  <FooterComp/>
</template>
<script>
import EduComp from "@/components/EduComp.vue";
import SkillsComp from "@/components/SkillsComp.vue"
import LangComp from "@/components/LangComp.vue";
import FooterComp from '@/components/FooterComp.vue';
export default {


  components: { EduComp, SkillsComp, LangComp, FooterComp },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');

  #resume{
    background-image: url(https://i.postimg.cc/SxBrRcGT/f1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    font-family: 'Space Mono', monospace;

  }

 
  
</style>