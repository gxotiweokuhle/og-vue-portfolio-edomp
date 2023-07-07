<template>
    <section class="contact-container py-3">
        <div class="contact-text text-white mt-5 pt-5">
            <h3>Let's get in Touch</h3>
   
            <div>
                <img src="https://i.postimg.cc/wMYFD0bd/region.png" alt="">
                <h5>Khayelitsha, Cape Town</h5>
            </div>
            <div>
                <img src="https://i.postimg.cc/Fz0W62JR/mail.png" alt="">
                <h5>gxotiweokuhle@gmail.com</h5>
            </div>

        </div>
        <div class="contact text-dark text-center">
            <form
     action="https://formspree.io/f/xjvqvgzb"
     method="POST"
     >
        <div class= "panels form-info">
          <div class="mt-5">
           <div class="form-floating mb-3">
              <input type="name" class="form-control m-auto" placeholder="Enter Your Fullname" style="width: 290px;" id="username" required>
              <label for="floatingTextareaDisabled">Fullname:</label>
              <div class="error"></div>
            </div>

            <div class="form-floating mb-3">
              <input type="number" class="form-control m-auto" placeholder="Enter Your Phone Number" style="width: 290px;" id="usernumber" required>
              <label for="floatingTextareaDisabled">Cellphone:</label>
              <div class="error"></div>
            </div>
            
            <div class="form-floating mb-3">
              <input type="email" class="form-control m-auto" id="usermail" placeholder="name@example.com" aria-describedby="emailHelp" style="width: 290px;" required>
              <label for="floatingInputDisabled">Email address:</label>
              <div class="error"></div>
            </div>

            <div class="form-floating mb-3">
              <input type="text" class="form-control m-auto" placeholder="eg. Western Cape" name="location" style="width: 290px;" id="location" required>
              <label for="floatingTextareaDisabled">Location:</label>
              <div class="error"></div>
           
            </div>

            <div>
              <button class="btn" type="submit" id="btn">Submit</button>
            </div>
          </div>
        </div>
    </form>
        </div>
    </section>
</template>
<script>
export default{

}

</script>
<style scoped>
    img{
        max-width:30px;
    }
    .contact-container{
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: space-evenly;
        
    }
    h3, h5{
      animation: flipInX;
      animation-duration: 3s;
    }
    .btn{
    background-color: blueviolet;
    }
    .btn:hover{
        color:white
    }
    @media screen and (max-width: 500px){
      .contact-container{
        display: flex;
        flex-direction: column;
      }
      .btn{
        margin-bottom: 120px;
      }
      .context-text{
        margin-top: 200px;
      }
    }
   
</style>