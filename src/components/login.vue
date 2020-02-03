<template>
    <div class="container-fluid">
      <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationDefault01">email</label>
          <input type="text" class="form-control email" id="validationDefault01" value="" required placeholder="Email" v-model="email" />
        </div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault02">Password</label>
          <input type="text" class="form-control lastname" id="validationDefault02" value="" required placeholder="Password"  v-model="password" /> 
        </div>
          <button class="btn btn-primary" type="submit" v-on:click="admin()">Submit form</button>
    </form>
  </div>
 
</template>


<script>
import firebase from 'firebase';
export default {
        name: 'loginData',
        data() {
            return {
                
                   email: '',                    
                    password: ''
                
                
            }
        },
        methods: {
            login() {    
                    
                    const auth = firebase.auth();
                    //const promise = auth.createUserWithEmailAndPassword(this.email,this.password)
                    auth.signInWithEmailAndPassword(this.email, this.password);
                    
                    promise.catch(e => console.log(e.message));
                    
                    
                    
                
                
            },
            userState(){
              firebase.auth().onAuthStateChanged(firebaseUser =>{
                if(firebaseUser){
                  console.log(firebaseUser)
                }else{
                  console.log('an error has occured ')
                }
              })
            },
            adminAuth(){
              if (this.email == 'admin@gmail.com' && this.password =='admin') {
                this.$store.commit("setAuthentication", true);
                this.$router.replace({name:"admin"})
                alert(`admin logged in`)
              }else{
                console.log('admin has logged failed')
              }
            }
            
            
        }
    }

</script>


    

<>
<style>
.container-fluid{
  margin-top: 40px;
}
form{
  padding-top: 6%;
}

</style>
