<template>
  <div>
    <b-container class="textContainer">
        <h2>HOORAY!</h2>
        <h2>WORKOUT COMPLETE.</h2>
        <p class="workoutName">{{workoutName}}</p>
        <b-container class="subText">
            <b-row>
        <p class="normalText">{{workoutTime}}</p>
        <p class="normalText">{{date}}</p> 
        </b-row>
        <b-row>
            <p class="secondaryText">Total Time</p>
            <p class="secondaryText-date" >Date</p>
        </b-row>
        </b-container>

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
date: '2/2/20'


    }
}
}
</script>


<style scoped>



@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');


div{
    font-family: 'Montserrat', sans-serif;
   

}
.textContainer{
        font-family: 'Montserrat', sans-serif;

    padding-top: 17%;
    color: #94f215;
    font-weight: 900;
    font-style: italic;
}

p{
    font-size: 20px;
    margin-top: 15px;

}
.normalText{
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    margin-top: -18px;
    font-weight: bold;
        margin-right: 15px;


}
.subtext{
  
}
.secondaryText{
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    margin-top: -18px;
    font-weight: bold;
    margin-right: 15px;
    font-size: 16px;
}
.secondaryText-date{
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    margin-top: -18px;
    font-weight: bold;
    margin-left: 20px;
    font-size: 16px;
}
.workoutName{}

</style>