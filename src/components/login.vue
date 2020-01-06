<template>
    <div class="container-fluid">
      <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationDefault01">email</label>
          <input type="text" class="form-control firstname" id="validationDefault01" value="" required placeholder="firstname" v-model="input.email" />
        </div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault02">Password</label>
          <input type="text" class="form-control lastname" id="validationDefault02" value="" required placeholder="lastname"  v-model="input.password" /> 
        </div>
        
        <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required /> 
          <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <button class="btn btn-primary" type="submit" v-on:click="login()">Submit form</button>
    </form>
  </div>
 
</template>


<script>
export default {
 
        name: 'loginData',
        data() {
            return {
                input: {
                   email: '',                    
                    password: ''
                }
                
            }
        },
        methods: {
            login() {    
                    this.email = email;
                    this.password = pass;
                    const auth = firebase.auth();
                    auth.signInWithEmailAndPassword(email, pass);
                
            },
            submitToStripe(endpoint, body, method) {
              fetch(`localhost:8000/${endpoint}`, {
                body: body,
                method: method,
                  headers: {
                    'Content-Type': 'application/json',
                  },
              })
              .then(data => data.json())
              .then(json => console.log(json))
              .catch(err => {
                console.log(`Error sending to stripe:`)
                console.log(err)
              })

            },
            validUser(){
                if(this.firstname && this.password){}
            }
            
        }
    }

</script>


    

<>
<style>
.container-fluid{
  margin-top: 40px;
}

</style>
