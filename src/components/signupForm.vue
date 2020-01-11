<template>
    <div class="container-fluid">
      <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationDefault01">First name</label>
          <input type="text" class="form-control firstname"  value="" required placeholder="firstname" v-model="firstname" />
        </div>
        <div class="col-md-4 mb-3">
          <label >Last name</label>
          <input type="text" class="form-control lastname"  value="" required placeholder="lastname"  v-model="lastname" /> 
        </div>
        <div class="col-md-4 mb-3">
          <label >Email Adrress</label>
          <input type="text" class="form-control email"  value="" required placeholder="firstname" v-model="email" />
        </div>
        </div>
        <div class="col-md-4 mb-3">
          <label >Password</label>
          <input type="text" class="form-control password" value="" required placeholder="password" v-model="password" />
        </div>
        <div class="form-row">
        <div class="col-md-6 mb-3">
          <label >address</label>
          <input type="text" class="form-control"  required v-model="address"/>
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-3 mb-3">
          <label >City</label>
          <input type="text" class="form-control"  required v-model="city"/>
        </div>
        <div class="col-md-3 mb-3">
          <label >State</label>
          <input type="text" class="form-control"  required v-model="state"/>
        </div>
        <div class="col-md-3 mb-3">
          <label >Zip</label>
          <input type="text" class="form-control" required v-model="zip"/>
        </div>
        <div class="col-md-3 mb-3">
          <label >credit card</label>
          <input type="text" class="form-control" required v-model="credit"/>
        </div>
        <div class="col-md-3 mb-3">
          <label >cvc</label>
          <input type="text" class="form-control"  required v-model="cvc"/>
        </div>
        <div class="col-md-3 mb-3">
          <label >expiration date</label>
          <input type="text" class="form-control" required v-model="expiration"/>
        </div>
        </div>
        <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required /> 
          <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <button class="btn btn-primary" type="submit" v-on:click="submitUser()">Submit form</button>
    </form>
  </div>
 
</template>


<script>
import  firebase from 'firebase';

export default {
 
        name: 'signupData',
        data() {
            return {
                
                   firstname: '',
                    lastname: '',
                    city: '',
                    state: '',
                    zip: '',
                    credit: '',
                    cvc: '',
                    expiration: '',
                    password: '',
                    email:'',
                    address:'',
                };
        },
        methods: {
            submitUser:function(e) {
              firebase.auth().
              createUserWithEmailAndPassword(this.email, this.password).then(
                users => {
                  alert(`account created`);
                  
                }
              )

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
