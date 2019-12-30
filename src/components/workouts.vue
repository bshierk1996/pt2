<template>
<div>
<b-container class="workout-overlay">
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

<router-link to="/" class="workout-overlay-shadow"></router-link>
</div>
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

</style>