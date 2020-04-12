<template>
<div>
<b-container class="workout-overlay">
  <b-jumbotron header="welcome to the daily workouts section ">
    <div  class=" row">
      <div  class=" card md-7" >
        <p class="first">TODAYS WORKOUT</p>
        <div class="card-body">
          <p class="card-text"></p>
          <a href="#" class="btn btn-secondary "><router-link to="/todays-workout">GO TO WORKOUT</router-link></a>
        </div>
      </div>
      <div class="card md-6" >
        <p class="yest">YESTERDAYS WORKOUT</p>
        <div class="card-body">
          <p class="card-text"></p>
          <a href="#" class="btn btn-secondary"><router-link to="/yesterdays-workout">GO TO WORKOUT</router-link ></a>
        </div>
      </div>
    </div>
  </b-jumbotron>
</b-container>

<router-link to="/" class="workout-overlay-shadow"></router-link>
</div>
</template>

<script>

export default{
    name: "workouts"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');
div{
  font-family: 'Montserrat', sans-serif;

}
.card{
  margin-right: 20px;
}


.workout-overlay {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 999;
}

.workout-overlay-shadow {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.card-body{
background: #A2D618;
color: aliceblue;

}
.card{
  background: #A2D618;
  margin-bottom: 20px;
  color: ivory;
  margin-left: 0px;
  margin-left: 40px;
}
p{
  padding: 20px;
  font-size: 35px;
}
a{
  color: aliceblue;
  /* font-family: Arial, Helvetica, sans-serif; */
}

</style>