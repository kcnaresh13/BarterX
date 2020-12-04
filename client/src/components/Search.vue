<template>
  <main>
    <title>{{title}}</title>
    <h1 class="author-title">Searched by "{{this.searchText}}"</h1>
    <div class="single-items" v-for="(obj,index) in result" :key="index">
      <div class="items">
        <h2 class="author-title">Title: {{obj.title}}</h2>
        <!-- <img src="../assets/coding-book.png" width="100px" height="150px" class="img-fluid" /> -->
        <p>By: {{obj.author}}</p>
        <p>ISBN: {{obj.isbnnum}}</p>
        <p>Price: ${{obj.price}}</p>
        <p>Description: {{obj.descript}}</p>
        <p>Seller:</p>
        <h3 class="buylink" @click="gotoBuyPage(obj._id)">Buy it!</h3>
        <hr />
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
const url = "api/info/search/";
export default {
  props: {
    searchText: String,
  },
  data: function () {
    return {
      info: [],
      id: "5f67e3c5597b0a0e53982fd2",
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
    async getSearchResult() {
      var arr = [];
      await axios
        .get(`${url}${this.searchText}`)
        .then((res) => (arr = res.data));
      var newarr = [];
      for (var x in arr) {
        if (
          (arr[x]["title"] && arr[x]["title"].includes(this.searchText)) ||
          (arr[x]["author"] && arr[x]["author"].includes(this.searchText)) ||
          (arr[x]["isbnnum"] && arr[x]["isbnnum"].includes(this.searchText)) ||
          (arr[x]["descript"] && arr[x]["descript"].includes(this.searchText))
        ) {
          newarr.push(arr[x]);
        }
      }
      this.result = newarr;
      console.log(this.result);
    },
    gotoBuyPage: function (id) {
      this.$router.push({ name: "buyone", params: { id: id } });
    },
  },
  created() {
    if (!this.searchText) this.searchText = "";
    this.getSearchResult();
  },
};
</script>

<style>
.buylink {
  color: rgb(90, 113, 161);
  cursor: pointer;
}
p {
  bottom: 0;
}
.page-name {
  padding: 15%;
  font-size: 2rem;
}

.single-items {
  margin-bottom: 30%;
  display: block;
}
</style>