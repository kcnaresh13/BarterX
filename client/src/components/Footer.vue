<template>
  <footer>
    <p v-html="footerText"></p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerText:
        "<p>&copy: 2020  BarterX  |  Kevin Claros | Naresh KC | Aaron Walsdorf | John Cho.",
    };
  },
};
</script>

<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color:  #234e70;
  color: #fbf8be;
  text-align: center;

}
p {
  font-size: 1.4rem;
}
</style>
