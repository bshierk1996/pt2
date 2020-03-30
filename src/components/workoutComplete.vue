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
<b-button squared class="dismiss">DISMISS</b-button>
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
date: ''


    }
},methods:{
    newDate(){
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1; //months from 1-12
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        const newdate = year + "/" + month + "/" + day;
        newdate = this.date
    }
},
mounted(){
    this.newDate()
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
    margin-top: -1px;
    font-weight: bold;
        margin-right: 75px;


}
.subtext{
  
}
.secondaryText{
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    margin-top: -18px;
    font-weight: bold;
    margin-right: 75px;
    font-size: 16px;
    /* margin-left: 15px; */
            font-size: 12px;

}
.secondaryText-date{
    color: black;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    margin-top: -18px;
    font-weight: bold;
    margin-left: 40px;
    font-size: 12px;
}
.workoutName{}
.dismiss{
    background-color:#94f215;
    border-color: #94f215;
    font-style: italic;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 4px;
    padding-bottom: 4px;
    margin-top: 30px;

}

</style>