<template>
  <div>
    <div class="text">
      <!--
<p style="text-align:right"> BarterX does allows Hofstra students to trade items of all types with each other. </p> 
      -->

      <img src="https://miro.medium.com/max/5800/1*v7_agl7Ldy4nIHjw-sfvHQ.png" class="body-image" />
      <div class="body-images">
        <br />
        <br />
        <br />
        <h2>BarterX allows Hofstra students to trade items of all types with each other.</h2>
        <br />

        <h2>We provide a money back guarantee if any products are not recieved as advertised.</h2>
        <br />
        <br />
        <h3 id="im">ELECTRONICS</h3>
        <br />

        <img class="myim" src="../assets/macbook.jpg" />
        <br />
        <br />
        <br />
        <br />

        <h3>TEXTBOOKS</h3>
        <br />
        <img src="../assets/coding-book.png" />
        <br />
        <br />
        <br />
        <br />
        <h3>OTHER ITEMS</h3>
        <br />
        <img src="../assets/desk.jpg" />
      </div>
    </div>

    <!-- <section class="contact" id="contact">
      <div class="container">
        <div class="section-heading">
          <h1>Contact</h1>
        </div>
        <form action=" " data-aos="fade-up" data-aos-delay="600">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder=" Please enter your Name " required />
          <label for="phone">Phone Number:</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder=" Please enter your phone number "
            required
          />
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" Please enter your Email "
            required
          />
          <label for="subject">Subject:</label>
          <input type="text" id="subject" name="subject" placeholder=" Subject: " required />
          <label for="message">Message:</label>
          <textarea name="text" id="text" cols="10" rows="10"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>-->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact {
  margin-top: 5%;
  text-align: center;
  margin-left: 25%;
  width: 1200px;
  background-color: #221e3f;
}

h1 {
  margin-bottom: 4%;
  font-size: 3rem;
}

form {
  align-items: center;
  margin: 20px 45px;
}

form label {
  font-size: 1.5rem;
}

input,
select,
textarea {
  width: 100%;
  padding: 1rem;
  margin-bottom: 5px;
  border: none;
  outline-color: #fd57bf;
}

input[type="submit"] {
  width: initial;
  background-color: #fd57bf;
  color: #eee;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  transition: background-color 650ms;
}

input[type="submit"]:hover {
  color: #221e3f;
  background-color: #ffe383;
}

.body-image {
  margin-top: 0%;
  height: 27rem;
  width: 93rem;
}

.text {
  font-size: 25 px;
  text-align: center;
  color: #234e70;
  font-family: "Segoe UI", Tahoma;
  margin-bottom: 250 px;
  background: #fbf8be;
}
h3.text {
  margin-bottom: 50 px;
}
img {
  max-width: 100%;
  height: auto;
}

.myim {
  max-width: 40%;
}
</style>