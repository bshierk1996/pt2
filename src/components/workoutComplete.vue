<template>
  <div>
    <b-container class="textContainer">
        <h2>HOORAY!</h2>
        <h2>WORKOUT COMPLETE.</h2>
        <p>{{workoutName}}</p>
    </b-container>
    <b-container class="dynamicResult">    

    </b-container>



  </div>
</template>

<script>
export default {
    name:'workoutComplete',
data(){
    return{
workoutName:'CORE X LOWER BODY',
workoutTime: '00:44 min',
date: '3/24/20'


    }
}
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');
div{
    font-family: 'Montserrat', sans-serif;
   

}
.textContainer{
    padding-top: 17%;
    color: #94f215;
}
p{
    font-size: 20px;
    margin-top: 15px;
}


</style>