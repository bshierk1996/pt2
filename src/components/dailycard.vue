<template>

   <div>
  <b-card
    
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 mr-2 ml-2"
  >
    <b-card src="../assets/img3.jpg">
      <img src="../assets/img3.jpg" alt="">
    </b-card>

    <b-card-text>
      These workouts are programmed to aid you in your journey of losing weight and toning in the convenience of your own home or at the gym. Each workout is designed for you to build muscle, speed your metabolism, lose fat and keep it off! This subscription gives you access to full, upper, lower body workouts alongside cardio and restorative circuits.
    </b-card-text>

    <b-button href="#" variant="primary" class='button'><router-link to="/workouts"> Subsribe Now</router-link></b-button>
  </b-card>
</div>
</template>



<script>
export default {
    name: 'mealcard'
}
</script>



<style>
.button{
color:#A2D618;
border-color: #A2D618;
 
}
</style>