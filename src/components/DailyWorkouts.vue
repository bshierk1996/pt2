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
    <h1 class="workout-title"></h1>
            <img v-if="receivedImgs !==null " :src="receivedImgs[0]" alt=""  />

      <div 
        v-for="(circuit, index) in circuitsProp"
        :key="`circuit-${index}`"
        class="daily-circuit"
    >
        <b-card class="circuit-info">
            <h1>{{ circuit.name }}</h1>
            <p>{{ circuit.desc }}</p>
        </b-card>

        <b-card class="workouts">
            <b-row no-gutters>
                <b-col
                    v-for="(workout, index2) in circuit.workouts"
                    :key="`workout-${index2}`"
                    md="4"
                >
                    <img class="workout-gif" :src="workout.img">
                    
                    <div class="workout-name">
                        <span>{{ index2 + 1 }}</span>
                        <h3>{{ workout.workoutName }}</h3>
                    </div>
                    <p><span class="bolded">{{workout.sets}}</span> sets - <span class="bolded">{{workout.seconds}}</span> seconds - <span class="bolded">{{workout.rest}}s</span> rest</p>
                </b-col>
            </b-row>
        </b-card>
      </div>
      <h1>{{}}</h1>
        <!-- <img v-if="receivedImgs !== ''" :src="getImgUrl" alt=""  /> -->
    </div>
</template>

<script>
import firebase, { storage } from 'firebase';
import {mapGetters} from 'vuex';
import sendImg from './adminPortal';


export default {
    //  computed: mapGetters(['sendImg']),
    props: ['circuitsProp', 'title'],
    name: 'DailyWorkouts',
    data() {
        return {
            receivedImgs: [],
            testImg: '',
            
        }
    },
    mounted() {
        setTimeout(() => {
            console.log(this.allFiles)
        }, 1500)

    },
    computed: {
         ...mapGetters(['allFiles']),
    },
    methods:{
        fbGet(){
             const storage = firebase.storage();
             const pathReference = storage.ref(this.allFiles.name);
            // for( File in this.allFiles){
            // console.log('found this file:'+ this.allFiles.name)
            //  }  
            this.allFiles.map(item => {
                const storage = firebase.storage();
                const pathReference = storage.ref(this.allFiles.name);
                console.log(item.name)
                const imgref = pathReference.child(item.name);
                imgref.getDownloadURL().then(function(url){
                    console.log(url)
                })
            })
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