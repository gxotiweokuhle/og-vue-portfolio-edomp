<template>
    <Contact/>
    <FooterComp/>
</template>
<script>
    import Contact from '@/components/Contact.vue';
    
    import FooterComp from '@/components/FooterComp.vue';
    export default{
        components: {Contact, FooterComp}
    }
</script>
<style scoped>
    .contact-container{
    background-image: url(https://i.postimg.cc/SxBrRcGT/f1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Space Mono', monospace;
    height: 600px;
    }
</style>