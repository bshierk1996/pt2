<template>
  <div>
     <div class="circuit-select">
    <b-form-select @change="onChange($event)" v-model="selectedCircuit" :options="circuitOptions"></b-form-select>
    <div class="mt-3">selectedCircuit: <strong>{{ selectedCircuit }}</strong></div>

    </div>

    <!-- <h2>{{ allFiles[1].name }}</h2> -->
    <div class="upload-image mt-3"></div>
        <p class=''>select an image for each workout </p>
        
<div></div>
<p>circuit description</p>
<b-col lg="6">
<b-form-textarea

      id="textarea"
      class='workout-durration'
      v-model="circuitDescription"
      placeholder="CIRCUIT DISCRIPTION "
      rows="4"
      
      max-rows="6"
      
    >{{text}}</b-form-textarea>
    </b-col>

    <p>workout1</p> <b-form-file
            @change="onFileSelected"
            input 
            v-bind:multiple="true"
            type="file"
            class='upload'
            v-model="workoutImgUrl"
            :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
      ></b-form-file>
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

    <p>workout2</p> <b-form-file
            @change="onFileSelected"
            input 
            v-bind:multiple="true"
            type="file"
            class='upload'
            v-model="workoutImgUrl1"
            :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
      ></b-form-file>
    <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="workoutName1"
      placeholder="workout name "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="description1"
      placeholder="workout description "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="sets1"
      placeholder="workout-sets "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="seconds1"
      placeholder="workout-seconds "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="rest1"
      placeholder="workout-rest durration "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>

    <p>workout3</p>
     <b-form-file
            @change="onFileSelected"
            input 
            v-bind:multiple="true"
            type="file"
            class='upload'
            v-model="workoutImgUrl2"
            :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
      ></b-form-file>
    <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="workoutName2"
      placeholder="workout name "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="description2"
      placeholder="workout description "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="sets2"
      placeholder="workout-sets "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="seconds2"
      placeholder="workout-seconds "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
     <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="rest2"
      placeholder="workout-rest durration "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>
    
<button v-on:click="update">console.log workout field</button>
<router-link class="linky" to="/todays-workout">Admin here</router-link>
  
<b-button class="submit" v-on:click="showfile">upload image</b-button> 
    <img :v-if="this.workoutImgUrl
     ==! ''" :src="this.workoutImgUrl
    " alt=""> 
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
        text: '',
        workoutImgUrl: '',
        workoutImgUrl1: '',
        workoutImgUrl2: '',
        sendImg: '',
        db: firebase.firestore(),
        circuitDescription: '',
        rest: '',
        seconds: '',
        sets: '',
        description: '',
        workoutName:'',

        rest1: '',
        seconds1: '',
        sets1: '',
        description1: '',
        workoutName1:'',
        rest2: '',
        seconds2: '',
        sets2: '',
        description2: '',
        workoutName2:'',
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
            { id: 3, value: 'workout3', text: 'workout 3' },
            { id: 4, value: 'workout4', text: 'workout 4' },
            { id: 5, value: 'workout5', text: 'workout 5' },
            { id: 6, value: 'workout6', text: 'workout 6' },
            { id: 7, value: 'workout7', text: 'workout 7' },
            { id: 8, value: 'workout8', text: 'workout 8' },
            { id: 9, value: 'workout9', text: 'workout 9' },
              
          ]

        timestamp: timestamp,
        createdAt: new Date()

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


        const newdate = year + "/" + month + "/" + day + '/';

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
        var imageRef = firebase.storage().ref(`${newdate}${this.workoutImgUrl[0].name}`).getDownloadURL()
        // imageRef.getDownloadURL()
        .then((url) => {
          this.workoutImgUrl = url
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

      update(){
         const dateObj = new Date();
        const month = dateObj.getMonth() + 1; //months from 1-12
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        const newdate = year + "-" + month + "-" + day;
          const newCircuit = this.db.collection(`circuits`).doc(`${newdate}-${this.selectedCircuit}`)
          .set({"timestamp":newdate ,"circuitDescription":`${this.circuitDescription}`,"circuitName":`${this.circuitOptions}`,workout:
     [{workoutName: `${this.workoutName}`,
     sets: `${this.sets}`,
     seconds:`${this.seconds}`,
     rests:`${this.rest}`,
     description:`${this.description}`,
     createdAt:Date(),
     url: `${this.workoutImgUrl[0].name}`,
      },
      {workoutName: `${this.workoutName}`,
     sets: `${this.sets1}`,
     seconds:`${this.seconds1}`,
     rests:`${this.rest1}`,     
     description:`${this.description1}`,
     createdAt:Date(),
     url: `${this.workoutImgUrl1[0].name}`,
      },
      {workoutName: `${this.workoutName2}`,
     sets: `${this.sets2}`,
     seconds:`${this.seconds2}`,
     rests:`${this.rest2}`,     
     description:`${this.description2}`,
     createdAt:Date(),
     url: `${this.workoutImgUrl2[0].name}`,
      }
      
        ]   },{merge:true} )

      updateWorkoutField(){
        const workoutData = {
          rest: this.rest,
          seconds: this.seconds,
          sets:this.sets,
          description: this.description,
          workoutName:this.workoutName,
          timestamp:this.timestamp,
          createdAt: new Date()
          
        }
        console.log(workoutData)
        this.db.collection('fitness-images').add({
          rest: this.rest,
          seconds: this.seconds,
          sets:this.sets,
          description: this.description,
          workoutName:this.workoutName,
          timestamp: this.timestamp,
          createdAt: new Date()

           
        })

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