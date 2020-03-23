<template>
    <div class="daily-workouts-container">
        <h2>{{ allFiles }}</h2>
        <img v-if="url" :src="url" alt="">
        <!-- <div v-for="file in allFiles" :key="file.name">
            <h1>{{file.name}}</h1>
            <h1>{{file.name}}</h1>
            <div v-if="sendImg ==! '' "  class="urls">
                <img :src="sendImg" alt="">
            </div>

           <h1 class="workout-title"></h1>
        </div> -->
        <button @click="fbGet">fbget</button>
        <button @click="downloadURL">show url</button>
        <button @click="displayWorkout">wokout</button>

    <h1 class="workout-title"></h1>
            <!-- <img v-if="receivedImgs !==null " :src="receivedImgs[0]" alt=""  /> -->
            <div v-for="(url, index) in receivedImgs" :key="`${index}`">
                <img :src="url" alt="">
            </div>

      <div 
        v-for="(circuit, index) in retrievedData"
        :key="`circuit-${index}`"
        class="daily-circuit"
    >
    
        <b-card class="circuit-info">
            <h1>{{ circuit.circuitDescription }}</h1>
            <p>{{ circuit.desc }}</p>
        </b-card>

        <b-card class="workouts">
            <b-row no-gutters>
                <b-col
                    v-for="(workout, index2) in circuit.workout"
                    :key="`workout-${index2}`"
                    md="4"
                >
                    <img class="workout-gif" :src="workout.url">
                    
                    <div class="workout-name">
                        <span>{{ index2 + 1 }}</span>
                        <h3>{{ workout.workoutName }}</h3>
                    </div>
                    <p><span class="bolded">{{workout.sets}}</span> sets - <span class="bolded">{{workout.seconds}}</span> seconds - <span class="bolded">{{workout.rests}}</span> rest</p>
                </b-col>
            </b-row>
        </b-card>
      </div>
      <h1>{{}}</h1>
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
            
            
        }
    },
    mounted() {
        setTimeout(() => {
            console.log(this.allFiles)
        }, 1500)
        this.fbGet()
        // this.downloadURL()

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
                    
                    this.receivedImgs = [ ...this.receivedImgs, url ]
                    // console.log(storageRef)
                });
            }).catch((error) => {
                console.log(error)
            });
        },


        downloadURL(){
            const dateObj = new Date();
            const month = dateObj.getMonth() + 1; 
            const day = dateObj.getDate();
            const year = dateObj.getFullYear();
            const newdate = year + "-" + month + "-" + day + '-';
        

             const storage = firebase.storage();
             const pathReference = storage.ref(this.allFiles.name)

            this.allFiles.map(item => {
                const storage = firebase.storage();
                const pathReference = storage.ref(this.allFiles.name);
                console.log(item.name)
                const imgref = pathReference.child(item.name);
                imgref.getDownloadURL().then(function(url){
                    console.log(url)
                })
            })
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
                console.log(doc.data());
                this.retrievedData = [ ...this.retrievedData, doc.data()]
            });
            })
            .catch((error) => {
            console.log("Error getting documents: ", error);
             });

    }
       
        }
        
    }




</script>

<style>
body {
    background: #f5f5f5;
}
.daily-workouts-container {
    margin: 0 50px;
    padding-top: 100px;
}

.daily-circuit {
    margin-bottom: 20px;
}

.workouts {
    border-radius: 0;
    text-align: center;
}

.bolded {
    font-weight: 600;
}

.workout-title {
    margin-bottom: 40px;
}

.circuit-info {
    border-bottom: 5px solid #A2D618;
    border-radius: 0px;
    margin-bottom: 10px;
}

.workout-gif {
    margin-bottom: 20px;
}

.workout-name {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;
}

.workout-name span {
    font-size: 20px;
    padding: 0 10px;
    margin-right: 15px;
    background: #A2D618;
}

.workout-name h3 {
    margin-bottom: 0;
}
</style>