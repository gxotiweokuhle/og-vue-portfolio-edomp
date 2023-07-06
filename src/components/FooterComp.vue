<template>
    <div class="footer">
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
    </div>
</template>
<script>

    export default{
        
    }
</script>
<style>

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