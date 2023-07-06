<template>
  <div class="skills">
    <div class="soft rouned-circle">
      <h3 class="text-center">Soft Skills</h3>
      <div id="list">
        <ul>
        <li>Communication</li>
        <li>Team Work</li>
        <li>Flexibility</li>
        <li>Ability to take Criticism</li>
        <li>Time Management</li>
      </ul>
      </div>
     
    </div>
    <div class="languages">
      <h3 class="text-center">Languages</h3>
      <div class="icon">
        <img src="https://i.postimg.cc/R0bDJ1BM/html.png" alt="">
        <img src="https://i.postimg.cc/qM8SDC8L/css.png" alt="">
        <img src="https://i.postimg.cc/pLvbPB24/bootstrap.png" alt="">
      </div>
      <div class="icon">
        <img src="https://i.postimg.cc/vHdSnHp6/java-script.png" alt="">
        <img src="https://i.postimg.cc/C5JDdN37/vue.jpg" alt="">
        <img src="https://i.postimg.cc/137Hv9YB/sql.png" alt="">
      </div>

    </div>
  </div>
 
</template>
<script>
  export default{
    
  }

</script>
<style>
  .skills{
    display: flex;
    flex-direction: row; 
    justify-content: space-evenly;
    align-items: center;
    background-color: #AB82AD;
    height: 600px;
  }
  #list{
    background-color:#A491B8;
    width: 300px;
    text-align: center;
   
  
  }
  h3{
    color: #361B57 ;
  }
  .icon{
    background-color: #A491B8;
  
  }
</style>