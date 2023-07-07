<template>
   
    <nav class="navbar navbar-dark  sticky-top" id="topnav">
         <div class="container-fluid">
                    <h5 class="navbar-brand" href="#" id="logo">O.G</h5>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                 </button>
             <div class="offcanvas offcanvas-end text-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">O.G</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
             </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link text-white" href="/about">About Me</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link text-white" href="/resume">Resume</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="/testimonials">Testimonials</a>
                        </li>
                        <li class="nav-item">
                             <a class="nav-link text-white" href="/contact">Contact</a>
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
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap');
    #logo{
        font-family: 'Space Mono', monospace;
        font-style: normal;
        font-weight: 600;
        color: blueviolet;
    }
    .nav-item{
        font-family: 'Space Mono', monospace;
    }
    .nav-item :hover{
        background-color: #A491B8;
        
    }
#offcanvasDarkNavbar{
    background-color: blueviolet;
}
h5{
    color: white;
    font-family: 'Space Mono', monospace;

}
</style>