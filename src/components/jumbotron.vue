<template>
    <div>
  <b-jumbotron  class="jumbo">
    <h1 class="header-text">SUMMER BODIES ARE MADE IN THE WINTER!!</h1>
    <p class="p-text">    REACH YOUR FITNESS GOALS WITH A RESULT-DRIVEN WEIGHT LOSS AND TONING PROGRAM</p>
    <b-button  href="#" class="join-button"><router-link to="/signupForm">JOIN NOW</router-link></b-button>
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
    background-repeat: no-repeat;
}

.header-text{
    font-size: 70px;
    margin-top: 24vh;
    margin-bottom: 0vh;
    margin-left:35vh;
    margin-right:70vh; 
}


.p-text{
    font-size: 20px;
    margin-top: 3vh;
    margin-left: 35vh;
    margin-right: 81vh;
    font-family: sans-serif;
    font-weight: 300;
    font-family: 'Montserrat', sans-serif;


}
.join-button{
  align-content: center;
  margin-left: 35vh;
  margin-top: 1vh;
  background-color: #A2D618;
  border-color: #A2D618;
  color:ivory;
}






@media screen and (max-width: 800px) {
  .jumbo {
    height:100vh;
    background-position-x: 0%;
    background-position-y: 0%;
    background-image: url('../assets/bg_mobile-2.jpg') !important;
  }
  .header-text{
    font-size: 30px;
    margin-top: 190px;
    margin-bottom:0px;
    margin-left: 0px;
    margin-right: 0px; 
  }
  .join-button{
    margin-right: 30%;
    margin-left: 0px;
    color:ivory;
  }
  .p-text{
    font-size: 17px;
    margin-top: 40px;
    margin-bottom:0px;
    margin-left: 0px;
    margin-right: 0px; 
    font-family: 'Montserrat', sans-serif;
  
    font-weight: normal

  }
a{
  color: ivory;
}
}

</style>