<template>

<b-container>
    
       <b-jumbotron header="welcome to the daily workouts section ">
           <div class="row">
               <div class="card" style="width: 18rem;">
  <img src="../assets/img1.jpg" class="card-img-top" alt="">
  <div class="card-body">
    <p class="card-text">todays workout</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>

  </div>
</div>
<div class="card" style="width: 18rem;">
  <img src="../assets/img2.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">yesterdays workout</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>

  </div>
</div>
            </div>
    
       </b-jumbotron>
   
</b-container>

</template>

<script>
export default{
    name: "workouts"
}
</script>

<style scoped>
.today{
    margin-right: 20px;
}
.card-body{
background: #A2D618;
color: aliceblue;
}

</style>