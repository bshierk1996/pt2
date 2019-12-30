<template>

  <div id="app">
    <!-- <Nav /> -->
    <router-view></router-view>
    <!-- <signup /> -->
  </div>
</template>

<script>

export default {
  name: 'app',
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
