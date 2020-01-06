<template>
    <div class="container-fluid">
      <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationDefault01">First name</label>
          <input type="text" class="form-control firstname" id="validationDefault01" value="" required placeholder="firstname" v-model="input.firstname" />
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault02">Last name</label>
          <input type="text" class="form-control lastname" id="validationDefault02" value="" required placeholder="lastname"  v-model="input.lastname" /> 
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault01">Email Adrress</label>
          <input type="text" class="form-control firstname" id="validationDefault01" value="" required placeholder="firstname" v-model="input.email" />
        </div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault01">Password</label>
          <input type="text" class="form-control firstname" id="validationDefault01" value="" required placeholder="firstname" v-model="input.password" />
        </div>
        <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationDefault03">address</label>
          <input type="text" class="form-control" id="validationDefault03" required v-model="input.address"/>
        </div>
        </div>
        <div class="form-row">
        <div class="col-md-3 mb-3">
          <label for="validationDefault03">City</label>
          <input type="text" class="form-control" id="validationDefault03" required v-model="input.city"/>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault04">State</label>
          <input type="text" class="form-control"  required v-model="input.state"/>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault05">Zip</label>
          <input type="text" class="form-control" id="validationDefault05" required v-model="input.zip"/>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault05">credit card</label>
          <input type="text" class="form-control" id="validationDefault05" required v-model="input.credit"/>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault05">cvc</label>
          <input type="text" class="form-control" id="validationDefault05" required v-model="input.cvc"/>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault05">expiration date</label>
          <input type="text" class="form-control" id="validationDefault05" required v-model="input.expiration"/>
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
export default {
 
        name: 'signupData',
        data() {
            return {
                input: {
                   firstname: '',
                    lastname: '',
                    city: '',
                    state: '',
                    zip: '',
                    credit: '',
                    cvc: '',
                    expiration: '',
                    password: '',
                }
                
            }
        },
        methods: {
            submitUser() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        // Send to stripe
                        this.submitData('charge', this.input, 'POST');
                        this.$router.replace({ name: "secure" });
                    } else {
                        // console.log("The username and / or password is incorrect");
                    }
                } else {
                    // console.log("A username and password must be present");
                }
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
