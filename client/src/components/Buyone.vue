<template>
  <main>
    <title>{{title}}</title>
    <div class="single-items">
      <div class="items">
        <h1 class="author-title">{{this.mytitle}}</h1>
        <img src="../assets/coding-book.png" width="100px" height="150px" class="img-fluid" />
        <p>By: {{this.author}}</p>
        <p>ISBN: {{this.isbnnum}}</p>
        <p>Price: ${{this.price}}</p>
        <p>Description: {{this.descript}}</p>
        <p>Seller:</p>
        <hr />
      </div>

      <!--------------------Items-------------------->
    </div>

    <!--------------------Items-------------------->
  </main>
</template>

<script>
import axios from "axios";
const url = "api/info/";
export default {
  props: {
    id: String,
  },
  data: function () {
    return {
      info: [],
      // id: "5f67e3c5597b0a0e53982fd2",
      result: "",
      title: "",
      mytitle: "",
      author: "",
      isbnnum: "",
      price: "",
      descript: "",
    };
  },
  methods: {
    async onClickButton() {
      await axios.get(`${url}${this.id}`).then((res) => (this.info = res.data));
      this.id = this.info.id;
      this.author = this.info.author;
      this.mytitle = this.info.title;
      this.isbnnum = this.info.isbnnum;
      this.price = this.info.price;
      this.descript = this.info.descript;
    },
  },
  created() {
    this.onClickButton();
  },
};
</script>

<style>
p {
  bottom: 0;
}
.page-name {
  padding: 15%;
  font-size: 2rem;
}

.single-items {
  /*margin-bottom: 50%;*/
  display: block;
}
</style>