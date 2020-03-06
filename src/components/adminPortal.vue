<template>
  <div  >
     <b-form-group inline label="these buttons decied as to which workout you will be changing" class="top">
      <b-form-radio v-model="selected" name="some-radios" value="1">workout position 1 </b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="2">workout position 2</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="3">workout position 3</b-form-radio>

    </b-form-group>

    <!-- <h2>{{ allFiles[1].name }}</h2> -->
    <div class="upload-image mt-3">Selected: <strong>{{ selected }}</strong></div>
        <p class=''>select 3 files for each workout </p>
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
<button v-on:click="updateWorkoutField">console.log workout field</button>
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

        const timestamp = year + "/" + month + "/" + day + '/';


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
        createdAt: new Date()
      }
    },
    methods:{
      onFileSelected(e){
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1; //months from 1-12
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();

        const newdate = year + "/" + month + "/" + day + '/';
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

        const newdate = year + "/" + month + "/" + day + '/';
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
@media screen and(max-width: 820px) {
  .upload-image{
    width:20px;
  }
}
</style>