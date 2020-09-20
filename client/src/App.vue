<template>
  <div id="app">
    <Header />
    <!-- <HomepageBody /> -->
    <SignIn />
    <!-- <Listings /> -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import HomepageBody from "./components/HomepageBody.vue";
import SignIn from "./components/SignIn.vue";
// import Listings from "./components/Listings.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    // HomepageBody,
    SignIn,
    // Listings,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100%;
  min-width: 100%;
  background: rgb(39, 116, 126);
  background: linear-gradient(
    90deg,
    rgba(39, 116, 126, 1) 23%,
    rgba(22, 46, 128, 1) 100%
  );
  background-size: cover;
}

#app {
  flex-direction: column;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
