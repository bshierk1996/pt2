<template>
    <div>
  <b-jumbotron  class="jumbo">
    <h1 class="header-text">SUMMER BODIES ARE MADE IN THE WINTER!!</h1>
    <p class="header-text lead">Reach your fitness goals with a result-driven weight loss and toning program!</p>
    <b-button variant="primary" href="#" class="join-button">JOIN NOW</b-button>
  </b-jumbotron>
</div>
</template>

<script>
export default {
    name: 'Jumbo'
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');
.jumbo{
  font-family: 'Montserrat', sans-serif;

}

.jumbo {
    background-image: url('../assets/bg_desktop.jpg');
    height: 100vh;  
    color: ivory;
    background-position-x: -45vh;
    background-position-y: -10vh;
    border-radius: 0;
    
}
.header-text{
    font-size: 70px;
    margin-top: 24vh;
    margin-bottom: 0vh;
    margin-left:35vh;
    margin-right:70vh;
}
.lead{
    font-size: 20px;
    margin-top: 3vh;
    margin-left: 35vh;
    margin-right: 81vh;
    font-family: sans-serif;
    font-weight: 300;


}
.join-button{
  align-content: center;
  margin-left: 35vh;
  margin-top: 1vh;
  background-color: #A2D618;
  border-color: #A2D618;
}

</style>