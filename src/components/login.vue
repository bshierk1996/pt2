<template>
    <div class="container-fluid">
      <form @submit.prevent="login">
        <div class="form-row">
          <div class="col-md-4 mb-3">
            <label for="validationDefault01">email</label>
            <input type="email" class="form-control email" id="validationDefault01" value="" required placeholder="Email" v-model="email" />
        </div>
          </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault02">Password</label>
          <input type="password" class="form-control password" id="validationDefault02" value="" required placeholder="Password"  v-model="password" /> 
        </div>
          <button class="btn btn-primary" type="submit" >Submit form</button>
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
          async login(){
              if (this.email == 'test@test.com' && this.password == 'test11') {
                await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                this.$store.commit('authstatus',true);
                this.$router.replace({path: '/admin'});
                
              }else{
                await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
                this.$store.commit('authstatus',false);
                this.$router.replace({path: '/'});
              }

          //   try{
          //   const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          //   console.log(val);
          //   this.$router.replace({path:'/admin'})
          // }catch(err){
          //   console.log(err)
          // }
          // }
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
