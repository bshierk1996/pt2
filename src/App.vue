<template>

  <div id="app">
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
import HelloWorld from './components/HelloWorld.vue'
import Jumbo from './components/jumbotron'
import Lcard from './components/card_large'
import dailycard from './components/mealcard'
import timecard from './components/realtime'
import mealcard from './components/dailycard'
import community from './components/community'
//import card from './components/card'
// import signup from './components/signupForm'
// import signUp from './components/newSignUp'

export default {
  name: 'app',
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

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}
body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4
}
</style>
