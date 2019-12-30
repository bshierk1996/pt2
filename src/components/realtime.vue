<template>

   <div>
  <b-card
    
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-img src="../assets/img1.jpg">
      <!-- <img src="../assets/img1.jpg" alt=""> -->
    </b-card-img>

    <b-card-text>
       For when you want to get fit and be in the comfort of your own home. I’ve programmed live workout outs that you can follow and cast on your TV screen. I’ll be instructing you throughout the entire workout ensuring proper form! You’ll have access to a workout library filled with full body high intensity workouts that burns more calories in less time.

    </b-card-text>

    <b-button href="#" variant="primary"><router-link to="/realtime">Go somewhere</router-link></b-button>
  </b-card>
</div>
</template>



<script>
export default {
    name: 'mealcard'
}
</script>



<style>

</style>