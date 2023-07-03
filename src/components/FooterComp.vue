<template>
    <div class="footer">
        <!--down nav-->
        <nav class="topnav">
            <router-link class="active" to="/">Home</router-link>
            <router-link to="/" class="active">About/Resume</router-link>
            <router-link to="/" class="active">Projects</router-link>
            <router-link to="/" class="active">Testimonials</router-link>
            <router-link to="/" class="active">Contact</router-link>
        </nav>
        <!--social links-->
        <div>
            <div class="icon">
                <a href="https://github.com/">
                <img src="https://i.postimg.cc/SxMJN8w9/github-1.png" alt="github">
            </a>
            </div>
            <div class="icon">
                <a href="https://www.linkedin.com/">
                <img src="https://i.postimg.cc/15T8QMYP/linkedin-1.png" alt="linkedin">
            </a>
            </div>
            <div class="icon">
                <a href="https://www.facebook.com/">
                <img src="https://i.postimg.cc/CKpdZ5gQ/facebook-1.png" alt="facebook"></a>
            </div>
            <div class="icon">
                <a href="https://twitter.com/">
                <img src="https://i.postimg.cc/YqCB2HmB/twitter.png" alt="twitter">
            </a>
            </div>
        </div>
        <!--copyright-->
        <div>
            <p>@Copyrights Reserved by Okuhle Gxotiwe 2023.</p>
        </div>
    </div>
</template>
<script>

export default{

}
</script>
<style>
.footer{
    display: flex;
    flex-direction: column;
}


</style>
