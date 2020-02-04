<template>
  <div  >
     <b-form-group inline label="these buttons decied as to which workout you will be changing" class="top">
      <b-form-radio v-model="selected" name="some-radios" value="1">workout position 1 </b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="2">workout position 2</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="3">workout position 3</b-form-radio>

    </b-form-group>

    <div class="upload-image mt-3">Selected: <strong>{{ selected }}</strong></div>
        <p class=''>select 3 files for each workout </p>
        <b-form-file
            input type="file"
            @change="onFileSelected"
            class='upload'
            v-model="file"
            multiple=true
            :state="Boolean(file)"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
      ></b-form-file>
    <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>

    <p class="step-2"> insert the text for the workouts</p>
    <b-form-textarea
      class="workout-text"
      id="textarea"
      v-model="text"
      placeholder="workout text field"
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>

    <p>insert the durration/time for each workout</p>

    <b-form-textarea
      id="textarea"
      class='workout-durration'
      v-model="text"
      placeholder="workout durration "
      rows="3"
      max-rows="6"
    >{{text}}</b-form-textarea>

    <pre class="mt-3 mb-0">{{  }}</pre>

  
    <b-button class="submit" v-on:click="complete">upload image</b-button>
  </div>
</template>

<script>
  export default {
    name: 'admin',
    data() {
      return {
        file: null,
        file2: null,
        // position: null,
        selected: null,
        
      }
    },
    methods:{
      complete: function(){
        alert(
          'workouts updated'
        )
        
      },
      // updateWorkout: function(){
      //   this.$emit()
      // },
      onFileSelected: function(event){

      },
    }
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
@media screen and(max-width: 820px) {
  .upload-image{
    width:20px;
  }
}
</style>