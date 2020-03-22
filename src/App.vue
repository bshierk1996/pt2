<template>

  <div id="app">
    <HelloWorld />
    
    <!-- <h1>Active user is {{ activeUser.name }}</h1> -->
    <router-view></router-view>
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'

// import * as firebase from 'firebase/app';
import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

export default {
  name: 'app',
  props:{
    
  },
  
  components: { HelloWorld },
  mounted() {
    this.initFirebase();
  },
  data() {
    // $props
    //  firebase config 
    return {
      fbConfig: {
        apiKey: "AIzaSyAmtuksKKkhZlWGl57BbAwjNgViH2p0xfA",
        authDomain: "keisha-fitness.firebaseapp.com",
        databaseURL: "https://keisha-fitness.firebaseio.com",
        projectId: "keisha-fitness",
        storageBucket: "keisha-fitness.appspot.com",
        messagingSenderId: "665776943970",
        appId: "1:665776943970:web:baa2597e8b5f2cc360f23b",
        measurementId: "G-MWYYGCRG0M"
      },
      project: null,
      activeUser: {},
      // stripe : Stripe('pk_test_XuQQEmqPkMv0o5KoXpYzmZuy00wf7pyLXu');

      // Stripe.setP
    }
  },
  methods: {
    initFirebase() {
      // Initialize Firebase
      firebase.analytics();
  
      //const ref = firebase.database().ref('users/brentman');
      //ref.once('value').then((snapshot) => {
        //this.activeUser.name = snapshot.child("name").val()
        //this.activeUser.email = snapshot.child("email").val()
      },
      
    },
}

</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}
body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
   background-color: #fff;
}

@media screen and (max-width: 800px) {
  .nav-row {
    display: '/components/mobileNav' ;
  }
}
  @media screen and (max-width: 799px) {
  .mobile-nav-row {
    display: contents;
  }

}
</style>
