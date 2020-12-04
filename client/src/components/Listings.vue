<template>
  <main class="page-name">
    <title>{{title}}</title>
    <!-- <div class="container"> -->
    <div class="single-items" v-for="(obj,index) in result" :key="index">
      <div class="items">
        <div class="item-title">
          <h1 class="author-title">{{obj.title}}</h1>
        </div>
        <div class="item-image">
          <a href="#">
            <img src="../assets/coding-book.png" width="100px" height="150px" class="img-fluid" />
          </a>
        </div>
        <p>By: {{obj.author}}</p>
        <p>ISBN: {{obj.isbnnum}}</p>
        <p>Price: ${{obj.price}}</p>
        <p>Description: {{obj.descript}}</p>
        <p>Seller: {{obj.name}}</p>
      </div>
      <hr />
    </div>
    <!-- </div> -->

    <!--------------------Items-------------------->
    <!-- <div class="single-items">
      <div class="items">
        <div class="item-title">
          <h1 class="author-title">2020 Macbook Pro</h1>
        </div>
        <div class="item-image">
          <a href="#">
            <img src="../assets/macbook.jpg" width="100px" height="150px" class="img-fluid" />
          </a>
        </div>
        <p>Price: $1800</p>
        <p>Branch new Macbook Pro, core i7, 16gb RAM</p>
        <p>Seller: {{this.name}}</p>
      </div>
      <hr />
    </div>-->

    <!--------------------Items-------------------->

    <!-- <div class="single-items">
      <div class="items">
        <div class="item-title">
          <h1 class="author-title">Desk</h1>
        </div>
        <div class="item-image">
          <a href="#">
            <img src="../assets/desk.jpg" width="100px" height="150px" class="img-fluid" />
          </a>
        </div>
        <p>Price: $100</p>
        <p>small desk for bedroom</p>
        <p>Seller: {{this.name}}</p>
      </div>
    </div>-->
  </main>
</template>

<script>
//import InfoService from "../Service/InfoService";
import axios from "axios";

const url = "api/info/";
export default {
  data: function () {
    return {
      info: [],
      id: "5f67e3c5597b0a0e53982fd2",
      result: "",
      title: "",
      mytitle: "",
      author: "",
      seller: "unknown",
      name: "",
      isbnnum: "",
      price: "",
      descript: "",
    };
  },
  methods: {
    async onClickButton() {
      await axios.get(`${url}`).then((res) => (this.result = res.data));
      console.log(this.result);
      // this.info =  InfoService.getInfo1(this.id);
      // console.log(this.info)
      // this.id = this.info.id;
      // this.author = this.info.author;
      // console.log(this.info.username);
      // this.mytitle = this.info.title;
      // this.name = this.info.name;
      // this.isbnnum = this.info.isbnnum;
      // this.price = this.info.price;
      // this.descript = this.info.descript;
    },
  },
  created() {
    this.onClickButton();
  },
};
</script>

<style>
.page-name {
  background-color: #fbf8be;
  width: 500px;
  align-items: center;
  text-align: center;
}

.items {
  display: block;
}
</style>