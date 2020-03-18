<template>
  <div>
     <div class="circuit-select">
    <b-form-select @change="onChange($event)" v-model="selectedCircuit" :options="circuitOptions"></b-form-select>
    <b-form-select @change="onChange($event)" v-model="selectedWorkout" :options="workoutOptions" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">selectedCircuit: <strong>{{ selectedCircuit }}</strong></div>
        <div class="mt-3">selectedWorkout: <strong>{{ selectedWorkout }}</strong></div>

    </div>

    <!-- <h2>{{ allFiles[1].name }}</h2> -->
    <div class="upload-image mt-3">Selected: <strong>{{ selected }}</strong></div>
        <p class=''>select an image for each workout </p>
        <b-form-file
            @change="onFileSelected"
            input 
            v-bind:multiple="true"
            type="file"
            class='upload'
            v-model="file"
            :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
      ></b-form-file>
<div></div>
<b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="workoutName"
      placeholder="CIRCUIT DISCRIPTION "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
    <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="workoutName"
      placeholder="workout name "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="description"
      placeholder="workout description "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="sets"
      placeholder="workout-sets "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="seconds"
      placeholder="workout-seconds "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="rest"
      placeholder="workout-rest durration "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
<button v-on:click="update">console.log workout field</button>
<router-link class="linky" to="/todays-workout">Admin here</router-link>
  
<b-button class="submit" v-on:click="showfile">upload image</b-button> 
    <img :v-if="this.imgToShow ==! ''" :src="this.imgToShow" alt=""> 
    </div>
</template>

<script>
import firebase, { storage } from 'firebase';
import {mapGetters, mapActions} from 'vuex'
// import {mapState} from 'vuex'
//import fbConfig from './App.vue';

        const dateObj = new Date();
        const month = dateObj.getMonth() + 1; //months from 1-12
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();

        const timestamp = year + "-" + month + "-" + day + '-';


  export default {
    name: 'admin',

    data() {
      return {
        file: {},
        file2: null,
        // position: null,
        selected: null,
        text: 'hi',
        imgToShow: '',
        sendImg: '',
        db: firebase.firestore(),
        rest: '',
        seconds: '',
        sets: '',
        description: '',
        workoutName:'',
        timestamp: timestamp,
        circuit: Number,
        selectedCircuit: null,
          circuitOptions: [
            { value: null, text: 'Please select the circuit' },
            { id: 1, value: 'circuit1', text: 'circuit 1' },
            { id: 2, value: 'circuit2', text: 'circuit 2' },
            { id: 3, value: 'circuit3', text: 'circuit 3' }
              
          ],
        selectedWorkout: null,
          workoutOptions: [
            { value: null, text: 'Please select the workout' },
            { id: 1, value: 'workout1', text: 'workout 1' },
            { id: 2, value: 'workout2', text: 'workout 2' },
            { id: 3, value: 'workout3', text: 'workout 3' }
              
          ]




      }
    },
    methods:{
      onChange(e){
       console.log(event.target.value)
      },

      onFileSelected(e){
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1; //months from 1-12
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();

        const newdate = year + "-" + month + "-" + day + '-';
        this.timestamp =newdate
       console.log(newdate)
        this.file = e.target.files[0];
        this.addFile(this.file)
          // console.log('this file is currently being shown')
         var storageRef = firebase.storage().ref(`${newdate}${this.file.name}`)

        let uploadFile = storageRef.put(this.file)
        

        setTimeout(() => {
          console.log(this.allFiles)
        }, 1200)
        
        
      },
      showfile(e){
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1; //months from 1-12
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();

        const newdate = year + "-" + month + "-" + day + '-';
        //   let image = e.target.files[0]

        var imageRef = firebase.storage().ref(`${newdate}${this.file[0].name}`).getDownloadURL()
        // imageRef.getDownloadURL()
        .then((url) => {
          this.imgToShow = url

        }).catch((error) => {
          console.log(error)

         })
        //  this.allFiles.map(item =>{ 
        //   const storage = firebase.storage();
        //   const pathReference = storage.ref(this.allFiles.name);
        //   console.log(item.name)
        //   const imgref = pathReference.child(item.name);
        //   imgref.getDownloadURL().then(function(url){
        //     console.log(url)
        //   })
        // })
      },
      updateWorkoutField(){
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1; //months from 1-12
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        const newdate = year + "-" + month + "-" + day + '-';

        const workoutData = {
          rest: this.rest,
          seconds: this.seconds,
          sets:this.sets,
          description: this.description,
          workoutName:this.workoutName,
          timestamp:this.timestamp
          
        }
        console.log(workoutData)
        // this.db.collection('circuits').add({
        //   rest: this.rest,
        //   seconds: this.seconds,
        //   sets:this.sets,
        //   description: this.description,
        //   workoutName:this.workoutName,
        //   timestamp: this.timestamp,
        //   createdAt: Date()
        // })

    //  const write = this.db.collection(`circuits`).doc(`${newdate}-${this.selectedCircuit}`).set({
    //     description: this.description,
    //     timestamp: this.timestamp,
    //     createdAt: Date()
    //   }).then(

    //   this.db.collection('circuits')
    //   .doc(`${newdate}-${this.selectedCircuit}`)
    //   .collection(`${this.selectedWorkout}`).add({
    //     rest: this.rest,
    //     seconds: this.seconds,
    //     sets:this.sets,
    //     description: this.description,
    //     workoutName:this.workoutName,
    //     timestamp: this.timestamp,
    //     createdAt: Date()
    //   })
    //   )
    const selectedCircuitOption = this.selectedCircuit;
    const write = this.db.collection(`circuits`).doc(`${newdate}-${this.selectedCircuit}`).add({
     selectedCircuitOption : 
     [{workoutName: `${this.workoutName}`,
     sets: `${this.sets}`,
     seconds: `${this.seconds}`,
     rests: `${this.rests}`,
     timestamp: `${this.timestamp}`,
     createdAt: `${this.createdAt}`,
     description: `${this.description}`,
     createdAt: Date()
      }]
    })


      },update(){
         const dateObj = new Date();
        const month = dateObj.getMonth() + 1; //months from 1-12
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        const newdate = year + "-" + month + "-" + day + '-';
          const selectedCircuitOption = this.selectedCircuit;
          const updateArray = this.db.collection(`test-circuit`).doc(`${newdate}-${this.selectedCircuit}`)
          .set({
            selectedCircuitOption : 
     [{workoutName: `${this.workoutName}`,
     sets: `${this.sets}`,
     seconds:`${this.seconds}`,
     rests:`${this.rests}`,
     timestamp:`${this.timestamp}`,
     createdAt:`${this.createdAt}`,
     description:`${this.description}`,
     createdAt:Date()
      }]
          },{merge: true})


      },
      ...mapActions(['addFile'])
      
    },
    computed: {
         ...mapGetters(['allFiles']),
    },
  }
    
  
  
</script>

<style scoped>
div{
    margin-top: 3%;
}
.submit{
  background-color: #A2D618;
  border-color: #A2D618;
  margin-top: 30px;
}
.workout-text{
  width: 500px;
}
.workout-durration{
  width: 300px;
  height: 20px;
}
.upload{
  width: 800px;
}
.linky {
  color: black;
}
.circuit-select{
  padding-top: 100px;
}
@media screen and(max-width: 820px) {
  .upload-image{
    width:20px;
  }
}
</style>