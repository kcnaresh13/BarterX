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
        "<p>&copy: 2020 Kevin Claros | Naresh KC | Aaron Walsdorf | John Cho.",
    };
  },
};
</script>

<style scoped>
footer {
  width: 100%;
  text-align: center;
  clear: both;
  background-color: #16162d;
  /* padding: 2rem 0; */
  margin-top: 63%;
    position: absolute;

}
/* #footer {
  position: relative;
  margin-top: -180px;
   negative value of footer height 
  height: 180px;
  clear: both;
  background-color: red;
} */

p {
  font-size: 1.4rem;
}
</style>
