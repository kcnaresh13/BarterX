<template>
  <header class="navigation">
    <div class="logo">
      <img src="../assets/logo.png" width="180px" height="130px" alt />
    </div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/list">Buy</router-link>
        </li>
        <li>
          <router-link to="/post">Sell</router-link>
        </li>
        <li>
          <router-link to="/profile">Profile</router-link>
        </li>
        <li v-if="showSignInLink">
          <router-link to="/signin">Sign In</router-link>
        </li>
        <li v-if="showLogOutLink">
          <a href="#" @click="onlogout_click()">Log out</a>
        </li>
      </ul> 
    </nav>
    <div class="search">
      <input
        type="text"
        v-model="search"
        placeholder="Search for books, notes, school supplies ....."
        @keyup.enter="showSearchPage()"
      />

      <div v-for="inf in info" :key="inf.id" class="single-item">
        <!-- <h1>{{filteredItems}}</h1> -->
      </div>
    </div>
  </header>
</template>

<script>
import cookies from "js-cookie";
import { isSignedIn } from "../util";
import axios from "axios";
const url = "api/info/";
export default {
  data: function () {
    return {
      info: [],
      id: "5f67e3c5597b0a0e53982fd2",
      result: "",
      title: "",
      author: "",
      mytitle: "",
      show: false,
      search: "",
    };
  },

  computed: {
    showSignInLink() {
      return !isSignedIn();
    },
    showLogOutLink() {
      return isSignedIn();
    },
  },
  methods: {
    onlogout_click() {
      cookies.remove("sessionCookie");
      window.location.reload();
    },
    onClickButton(event) {
      if (event != "login") this.$emit("clicked", "login");
      else {
        this.$emit("clicked", "home");
      }
    },
    async onClickButton2() {
      await axios.get(`${url}${this.id}`).then((res) => (this.info = res.data));
      this.id = this.info.id;
      console.log(this.in);
      this.author = this.info.author;
      this.mytitle = this.info.title;
      console.log("Click");
    },
    showSearchPage() {
      if (this.search != "")
        this.$router.push({
          name: "search",
          params: { searchText: this.search },
        });
    },
  },
  created() {
    axios.get(`${url}${this.id}`).then((res) => (this.info = res.data));
    this.id = this.info.id;
    console.log(this.in);
    this.author = this.info.author;
    this.mytitle = this.info.title;
    console.log("Click");
  },
};
</script>

<style lang="scss" scoped>
header {
  a {
    width: 100%;
    color: #fbf8be;
    text-align: center;
    font-weight: bold;
  }
  .logo {
    margin-right: 80px;
    margin-left: 20px;
  }
  nav {
    margin-top: 40px;
  }
  display: flex;
  width: 100%;
  clear: both;
  position: sticky;
  margin-top: 0%;
  top: 0;
  left: 0;
  background-color: #234e70;
  padding: 1rem 0;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;
    li {
      color: red;
      font-size: 1.5rem;
      padding: 2px 10px;
      cursor: pointer;
      &:hover {
        color: #7ca971;
      }
    }
  }

  .search {
    margin: 0 0 0 16%;
    position: relative;
    width: 100%;
    max-width: 400px;
    padding-top: 34px;
    input {
      border: none;
      outline: none;
      width: calc(100% - 80px);
      padding: 15px 60px 15px 20px;
      margin: 0;
      border-radius: 20px;
      background-color: #fbf8be;
      font-family: "Segoe UI", Tahoma;
      font-size: 1rem;
      color: #234e70;
    }
  }

  .icons {
    margin-left: 3%;
    cursor: pointer;
    #shopping {
      &:hover {
        color: rgb(207, 209, 61);
      }
    }
    #user {
      margin-left: 20px;
      &:hover {
        color: rgb(39, 117, 153);
      }
    }
  }
}
</style>
