<template>
    <div class="daily-workouts-container">
<!--        
         <div v-for="file in allFiles" :key="file.name">
            <h1>{{file.name}}</h1>
            <h1>{{file.name}}</h1>
            <div v-if="sendImg ==! '' "  class="urls">
                <img :src="sendImg" alt="">
            </div>
           <h1 class="workout-title"></h1>
        </div>  -->

    <h1 class="workout-title"></h1>

            <div v-for="(url, index) in receivedImgs" :key="`${index}`">

            

                <img :src="url" alt="">
            </div> -->

      <div 
        v-for="(circuit, index) in retrievedData"
        :key="`circuit-${index}`"
        class="daily-circuit"
    >
    
        <b-card class="circuit-info">
            <h3 class="circuitName">{{circuit.circuitName }}</h3>
            <p class="workoutDesc">{{ circuit.circuitDescription }}</p>
            <p>{{ circuit.desc }}</p>
        </b-card>

        <b-card class="workouts">
            <b-row no-gutters class="workoutCards">
                <b-col
                    v-for="(workout, index2) in circuit.workout"
                    :key="`workout-${index2}`"
                    md="4"
                    
                >
                <div class="workout-name">
                        <span>{{ index2 + 1 }}</span>
                        <h3>{{ workout.workoutName }}</h3>
                        
                    </div>
                    <img class="workout-gif" :src="workout.url">
                    
                    
                    <p><span class="bolded">{{workout.sets}}</span> sets - <span class="bolded">{{workout.seconds}}</span> seconds - <span class="bolded">{{workout.rests}}</span> rest</p>
                </b-col>
            </b-row>
        </b-card>
      </div>
     
      

        <!-- <img v-if="receivedImgs !== ''" :src="getImgUrl" alt=""  /> -->
    </div>
</template>

<script>
import  firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import {mapGetters} from 'vuex';
import sendImg from './adminPortal';
const dateObj = new Date();
        const month = dateObj.getMonth() + 1; //months from 1-12
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        const todaysTimeStamp = year + "-" + month + "-" + day + '-';
        console.log(todaysTimeStamp)
export default {
    //  computed: mapGetters(['sendImg']),
    props: ['circuitsProp', 'title'],
    name: 'DailyWorkouts',
    data() {
        return {
            receivedImgs: [],
            testImg: '',
            url: '',
            db: firebase.firestore(),
            retrievedData: [],
            circuit: []
            
            
        }
    },
    mounted() {
       this.displayWorkout(),
    //    this.downloadURL(),
       this.renderimg()
       
    },
    computed: {
         ...mapGetters(['allFiles']),
    },
    methods:{
        fbGet(){
            const dateObj = new Date();
            const month = dateObj.getMonth() + 1; //months from 1-12
            const day = dateObj.getDate();
            const year = dateObj.getFullYear();
            const newdate = year + "/" + month + "/" + day + '/';
            
          const  fbstorage = firebase.storage()
          const storageRef = fbstorage.ref()
             const listRef = storageRef.child(newdate)
            //  const pathReference = storage.ref(newdate);
            listRef.listAll().then((res) => {
                console.log('top level')
                console.log(res)
                res.prefixes.forEach((folderRef) => {
                    console.log('folder ref')
                    console.log(folderRef)
                });
                res.items.forEach((itemRef) => {
                    console.log('item ref')
                    console.log(itemRef)
                    const url = `https://firebasestorage.googleapis.com/v0/b/keisha-fitness.appspot.com/o/${year}%2F${month}%2F${day}%2F${itemRef.name}?alt=media&token=b3818a3a-3924-4f44-bab0-a168cf2a0d0c`
                   const url2 =  `https://firebasestorage.googleapis.com/v0/b/keisha-fitness.appspot.com/o/${newdate}${this.retrievedData.circuit[1].workout.url}?alt=media&token=444844ea-6978-4f15-9081-f07a738ee6b0`
                    this.receivedImgs = [ ...this.receivedImgs, url2 ]
                    // console.log(storageRef)
                    console.log(this.receivedImgs)
                });
            }).catch((error) => {
                console.log(error)
            });
        },
        downloadURL(){
            console.log('data:',this.circuit)
            // Create a reference to the file we want to download
const imageRef = this.db.child("2020/"`${this.circuit.workout.url}`);

// Get the download URL
imageRef.getDownloadURL().then(function(url) {
  // Insert url into an <img> tag to "download"
}).catch(function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/object-not-found':
      // File doesn't exist
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    

    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});
           
        },
        displayWorkout(){
            const dateObj = new Date();
            const month = dateObj.getMonth() + 1; //months from 1-12
            const day = dateObj.getDate();
            const year = dateObj.getFullYear();
            const newdate = year + "-" + month + "-" + day + '-';
           
            const circutsCollection = this.db.collection('circuits');
            const workoutSubCollection = circutsCollection.doc(`${newdate}-circuit1`);
            const workoutDoc = workoutSubCollection.collection('workout1').where('timestamp', '==', newdate)
            
            this.db.collection("circuits")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                console.log('retrieving')
                console.log(doc.data().workout);
                this.retrievedData = [ ...this.retrievedData, doc.data()];
                this.circuit = [...this.retrievedData,doc.data().workout];
                console.log('workouts----',this.circuit);
                
            });
            })
            .catch((error) => {
            console.log("Error getting documents: ", error);
             });
    },
    renderimg(){
        for(workout in this.receivevedData){
            console.log('this is a workout')
        }

    },
       
        }
        
    }
</script>

<style lang="css" >
@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

@media screen and(min-width: 700px) and (max-width: 810px) {
    .circuitName{
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            font-size: 25px;


    }
    .workoutDesc{
        font-size: 1px;
    }
    .workout-name h3{
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;
    background-color: #94f215;
    padding-block: 20px;
    margin-left: 100px;
    margin-right: 100px;
    padding-top:20px;
    padding-bottom:20px;
    font-size:20px;
    padding: 0 10px;
    }
    
}
body {
    background: #f5f5f5;
    background-image: url('../assets/circle.svg'); 
    height: 100vh;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size:220% 140%; 
    background-position-x: 20%;
    background-position-y: 5%;
    font-family: 'Montserrat', sans-serif;



}
.daily-workouts-container {
    margin: 0 50px;
    padding-top: 100px;
}
.daily-circuit {
    margin-bottom: 20px;
    font-style: bold;
}
.workouts {
    border-radius: 0;
    text-align: center;
    background-color:transparent;
    border-color: transparent;
    
}
.bolded {
    font-weight: 600;
    color: black;
}
.workout-title {
    margin-bottom: 40px;
    color: black;
}
.circuit-info {
    border-radius: 0px;
    margin-bottom: 10px;
    background-color: transparent;
    border-color: transparent;
}
.workout-gif {
    margin-bottom: 20px;
}
.workout-name {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;
    background-color: #94f215;
    padding-block: 20px;
    margin-left: 100px;
    margin-right: 100px;
    padding-top:20px;
    padding-bottom:20px;
    font-size:20px;
    padding: 0 10px;

}
.workout-name span {
    font-size: 20px;
    padding: 0 10px;
    margin-right: 15px;
    background: #94f215;
    
}
.workout-name h3 {
    margin-bottom: 0;
}


</style>
