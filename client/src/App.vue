<template>
  <div id="app">
    <HelloWorld msg="This is our helloWorld"/>
    <SignIn/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SignIn from './components/SignIn.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    SignIn
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
