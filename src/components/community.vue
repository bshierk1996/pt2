<template>
    <div>
  <b-jumbotron   class="jumbo">
    <h1>COMMUNITY</h1>
    <p>Join a community of women who are also ready to change their lives in the most positive way. We’ll be here to guide you and motivate you on the days when the going gets tough. Motivation isn’t always present so we’ll be there to make sure you’re disciplined! Discipline is a form of self love and you deserve it.</p>
    <b-button class="button" variant="primary" href="#">JOIN THE COMMUNITY</b-button>
  </b-jumbotron>
</div>
</template>

<script>
export default {
    name: 'community'
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');

div{
  color: ivory;
    font-family: 'Montserrat', sans-serif;

    background-image: url('../assets/community.jpg');
    height: 100vh; 
    width: 100vw;
    background-repeat: no-repeat; 
    
    background-position-x: center;
    background-position-y: -25vh;

    margin: 0;
    
}
h1{
  margin-left: 70vh;
  margin-top: 25vh;
}
.button{
  background-color: #A2D618;
  border-color: #A2D618;
  margin-left: 75vh;
}
p{
  font-family: sans-serif;
  margin-left: 60vh;
  margin-right: 60vh;
}
</style>