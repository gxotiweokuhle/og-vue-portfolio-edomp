<template>
   
    <nav class="navbar navbar-dark bg-dark sticky-top" id="topnav">
         <div class="container-fluid">
                    <h5 class="navbar-brand" href="#" id="logo">O.G</h5>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                 </button>
             <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">O.G</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
             </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link" href="/about">About Me</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link" href="/about">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/testimonials">Testimonials</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link" href="/">Contact</a>
                        </li>
                    </ul>
        
                </div>

            </div>
            </div>
    </nav>
</template>
<script>

export default{

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

    #logo{
        font-family: 'Dancing Script', cursive;
        font-style: normal;
        font-weight: 600;
        color: #AB82AD;
    }
    
</style>