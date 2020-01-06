<template>
  <div class="nav-row">
    <img src="../assets/KVF_logo.svg" alt="img" class="logo-img">

    <div class="d-flex justify-content-end pillz">
      <button class=""><router-link to="/login"> Login</router-link></button>
      <button class=""><router-link to="/signup"> Sign up</router-link></button>
      <button class="">Pricing</button> 
     

    </div>
  </div>
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

a {
  color: ivory;
}

.nav-row {
  z-index: 999;
  position: fixed;
  width: 100%;
  background: white;
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.2);
}

.blah{
  align-content: center;
  background-color:#A2D618;
  color: ivory
}

.nav-row {
  font-family: 'Montserrat', sans-serif;
  display: flex;
}

.logo-img {
  width: 175px;
  padding: 15px;
}

.pillz {
  margin-left: auto;
}

.pillz button {
  margin: 15px;
  background: #A2D618;
  color: ivory;
  padding: 0 20px;
  transition: opacity 200ms ease;
  width: 125px;
}

.pillz button:hover {
  opacity: 0.7;
}
</style>
