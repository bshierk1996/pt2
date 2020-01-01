<template>

  <div id="app">
    <HelloWorld />
    <router-view></router-view>
    <!-- <signup /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import * as firebase from 'firebase';

export default {
  name: 'app',
  components: { HelloWorld },
  mounted() {
    this.initFirebase();
  },
  data() {
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
      }
    }
  },
  methods: {
    initFirebase() {
      // Initialize Firebase
      firebase.initializeApp(this.fbConfig);
      firebase.analytics();
    }
  }
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
  line-height: 1.4
}
</style>
