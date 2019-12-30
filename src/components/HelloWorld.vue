<template>
  <div class="hello " >
    <b-navbar-brand href="#">
    <img src="../assets/KVF_logo.svg" alt="img" class="logo-img row">
    </b-navbar-brand >

    <b-nav pills class="d-flex justify-content-end row">
    <b-nav-item class="btn btn-primary">Pricing</b-nav-item > 
    <b-nav-item class="btn btn-primary"><router-link to="/signupForm"> Join now</router-link></b-nav-item>
  
    </b-nav>
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
.hello{
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
a {
  color: ivory;
}

.blah{
  align-content: center;
  background-color:#A2D618;
  color: ivory
}
.logo-img{
  
 
}

</style>
