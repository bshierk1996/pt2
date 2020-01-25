<template>
    <div>
      <b-jumbotron class="jumbo">
        <h1>COMMUNITY</h1>
        <p>Join a community of women who are also ready to change their lives in the most positive way. We’ll be here to guide you and motivate you on the days when the going gets tough. Motivation isn’t always present so we’ll be there to make sure you’re disciplined! Discipline is a form of self love and you deserve it.</p>
        <b-button class="button"  ><a href="https://www.instagram.com/keishavillarson/?hl=en" target="_blank">JOIN THE COMMUNITY</a></b-button>
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

div {
  color: ivory;
    font-family: 'Montserrat', sans-serif;

    background-image: url('../assets/community-native.jpg');
    height: 100vh; 
    width: 100vw;
    background-repeat: no-repeat; 
    
    background-position-x: center;
    background-position-y: -130px;
    background-size: cover;

    margin: 0;
    
    
}
h1{
  margin-top:17%;
  position: center;
  margin-left: 25%;
  font-size: 80px;
}
.button{
  background-color: #A2D618;
  border-color: #A2D618;
   margin-left: 120px; 
}
p{
  font-family: sans-serif;
   margin-left: 120px;
  margin-right: 120px; 
  font-size: 23px;

}
a{
  text-decoration: none;
}




@media screen and (max-width: 812px) {
 div {
    color: ivory;
    font-family: 'Montserrat', sans-serif;

    background-image: url('../assets/community-mobile.jpg');
    /* height: 100%;  */
    /* width: 100%; */
    background-repeat: no-repeat; 
    
    background-position-x: center;
    background-position-y: -60px;
    background-size: cover;

   
    
    
} 
p{
  font-family: sans-serif;
   margin-left: 140px;
   margin-right: 10px;  
  font-size: 16px;
}
h1{
  margin-top:13%;
  position: center;
  margin-left: 39%;
  font-size: 30px;
}
.button{
  margin-left:140px;
  font-size: 14px;
}
}
</style>