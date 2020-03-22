<template>

   <div>
  <b-card
  h-100
     border-variant="light"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 mr-2 ml-2"
  >
    <b-card>
      <img src="../assets/img2.jpg" alt="">
    </b-card>

    <b-card-text>
      Nutrition is the hardest part and I’ve created an easy to follow nutrition guide with different recipes tailored to your fitness goals. Whether you’re on a pescatarian, standard or plant based diet you’ll have access to delicious guilt free meals. You’ll also have insight on what foods to avoid.
      <br>
      <br>
      <br>
    </b-card-text>

    <b-button class="go-btn" href="#" ><router-link to="/mealplan"> Go somewhe</router-link></b-button>
  </b-card>
</div>
</template>



<script>
export default {
    name: 'mealcard'
}
</script>



<style>
.go-btn{
  background: #A2D618;
  color: ivory;
border: #A2D618;

}
a{
  color: ivory;
}

</style>