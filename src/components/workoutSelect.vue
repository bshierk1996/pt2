<template>
  <div>
  
        <p class=todaysWorkout>
          TODAYS WORKOUT
        </p>
        <H4 class="workoutNameText">CORE X FULL BODY WORKOUT</H4>
    <b-container class="buttonContainer">
            <b-button squared="" class="buttons">WORKOUT AT HOME</b-button> 
            <b-button squared="" class="buttons">WORKOUT AT GYM</b-button>
    </b-container>

   
  </div>
</template>

<script>
  export default {
      name: 'workoutSelect',
    data() {
      return {
        slide: 0,
        sliding: null,
        workoutNameText: 'CORE X LOWER BODY'
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');

div{
background-image: url('../assets/circle.svg');
height: 100vh;
background-repeat: no-repeat;
background-position: center;
background-attachment: fixed;
background-size:190% 140%; 
background-position-x: -15%;
background-position-y: 5%;

overflow: hidden;



}
.todaysWorkout{
padding-top: 120px;
text-align: center;

}
.workoutNameText{
text-align: center;
color: #94f215;
font-family: 'Montserrat', sans-serif;

   
}
.buttons{
    margin-top: 40px;
   justify-items: center;
   margin-left:4%;
   background-color: #94f215;
   border-color: #94f215;
   font-family: 'Montserrat', sans-serif;
   font-size: 12px;


}
.buttonContainer{
    margin-left: 2%


}



</style>