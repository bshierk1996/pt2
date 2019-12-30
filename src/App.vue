<template>

  <div id="app">
     <HelloWorld />
    <router-view></router-view>
    <!-- <signup /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: { HelloWorld }
}
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}
body{
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4
}
</style>
