<template>
<div>
 <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <NavBar /> -->
    <Jumbo />
    <b-container>
    <Lcard />
    <b-row center>
    <mealcard />
    <timecard />
    <dailycard /> 
      <!-- <card
        v-for="item in cardInfo"
        :key="item.title"
        :title="item.title"
        :image="item.image"
      /> -->
      </b-row>
      
      <router-view></router-view>

    </b-container>
    <community />
    <!-- <signup /> -->
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
import Jumbo from './jumbotron'
import Lcard from './card_large'
import dailycard from './mealcard'
import timecard from './realtime'
import mealcard from './dailycard'
import community from './community'
export default {
    name: 'Home',
    components: {
    HelloWorld,
    Jumbo,
    Lcard,
    dailycard,
     mealcard,
    timecard,
    community,
    // signup,
    // card,
  },
  data() {
    return {
      cardInfo: [
        {
          title: 'Daily workouts',
          images:'../assets/img1.jpg'
        },
        {
          title: 'Meal Plans',
          images: '../assets/img1.jpg'
        },
        {
          title: 'Real time workouts',
          images: '../assets/img3.jpg'
        },
      ]
    }
  }
}
</script>