<template>
  
<div class="mobile-nav-row" >
<b-navbar toggleable="lg" >
      <router-link to="/"> <img src="../assets/KVF_logo.svg" alt="img" class="logo-img"></router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="butts ml-auto">
        

        
          <b-button squared href="#"><router-link to="/login"> LOGIN</router-link></b-button>
          <b-button squared href="#"><router-link to="/signupForm"> SIGNUP</router-link></b-button>
          <b-button squared href="#"><router-link to="/pricing"> PRICING</router-link></b-button>
          <b-button squared href="#"><router-link to="/login"> YOUTUBE</router-link></b-button>
        

        
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <!-- <div class="d-flex justify-content-end pillz"> -->
      <!-- <button class=""><router-link to="/login"> Login</router-link></button> -->
      <!-- <button class=""><router-link to="/signupForm"> Sign up</router-link></button> -->
      <!-- <button class=""><router-link to="/pricing">Pricing</router-link></button>  -->
     
</div>
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap');
.mobile-nav-row{
  font-family: 'Montserrat', sans-serif;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}


.mobile-nav-row {
  z-index: 999;
  position: fixed;
  width: 100%;
  background: #f5f5f5;
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.2);
  max-height: 75px;
  
}

.pillz{
  align-content: center;
  
  color: #f5f5f5;
  margin-left: 1%
}

.nav-row {
  font-family: 'Montserrat', sans-serif;
  display: flex;
}

.logo-img {
  width: 175px;
  padding: 15px;
}


.butts{
  margin-left: 20px;
  background-color: #f5f5f5;
  color: #A2D618

}
a{
  color: #A2D618;
  background-color: #f5f5f5;
  border-color:#f5f5f5;

}



</style>

