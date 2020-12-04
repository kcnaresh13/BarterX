<template>
    <div id="appa">
        <button class="button" @click="showModal = true">Show Modal</button>
        <transition name="fade" appear>
            <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
        </transition>
        <transition name="slide" appear>
            <div class="modal" v-if="showModal">
                 <h1>{{this.mytitle}}</h1>
                 <div class="row">
                     <div class="column1">
                         <img src="../assets/coding-book.png" width="100px" height="150px" class="img-fluid" />
                     </div>
                     <div class="column2">
                         <h3 style="margin-top:0">Title: {{this.mytitle}}</h3>
                         <p>By: {{this.author}}</p>
                         <p>ISBN: {{this.isbnnum}}</p>
                         <p>Price: ${{this.price}}</p>
                     </div>
                     <div class="column3">
                         <p>Description: {{this.descript}} </p>
                     </div>
                    
                 </div>
                 <button onclick="location.href='mailto:name@example.com';">Contact Seller</button>
                 <button class="button" @click="showModal = false">Close</button>
            </div>
        </transition> 
    </div>
</template>

<style>
    #appa {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        min-height: 100vh;
    }
    .buttion {
        position: center;
        padding: 15px 25px;
        border-radius: 8px;
        transition: 0.4s ease-out;
    }

    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        
        width: 100%;
        max-width: 750px;
        background-color: #FFF;
        border-radius: 16px;
        
        padding: 25px;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: transform .5s;
    }

    .slide-enter,
    .slide-leave-to {
        transform: translateY(-50%) translateX(100vw);
    }

    .column1 {
        float: left;
        width: 25%;
        padding: 1px;
    }

    .column2 {
        float: right;
        width: 73%;
        padding: 1px;
    }

    .column3 {
        float: right;
        width: 100%;
        padding: 1px;
    }

    .row:after {
        content: "";
        display: table;
        clear: both;
    }
</style>

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
        showModal: false,
    };
  },
  methods: {
    async onClickButton() {
      await axios.get(`${url}${this.id}`).then((res) => (this.info = res.data));
      // this.info =  InfoService.getInfo1(this.id);
      // console.log(this.info)
      this.id = this.info.id;
      this.author = this.info.author;
      console.log(this.info.username);
      this.mytitle = this.info.title;
      this.name = this.info.name;
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