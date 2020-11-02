<template>
  <header class="navigation">
    <div class="logo">
      <img src="../assets/logo.png" width="180px" height="130px" alt />
    </div>
    <nav>
      <ul>
        <li><router-link to = "/"> Home</router-link></li>
        <li><router-link to = "/list"> Buy</router-link></li>
        <li><router-link to = "/post"> Sell</router-link></li>
        <li><router-link to = "/profile"> Profile</router-link></li>
        <li><router-link to = "/signin"> Sign In</router-link></li>
        <li><router-link to = "/"> Log out</router-link></li>

      </ul>
    </nav>
    <div class="search">
      <input type="text" placeholder="Search for books, notes, school supplies ....." />
    </div>
    <!-- <div  @click="onClickButton()" class="icons">
      <v-icon style="font-size: 2.6rem;" class="fas fa-shopping-cart" id="shopping"></v-icon>
      <v-btn style="font-size: 2.6rem;" slot="badge" @click="show = !show">
        <v-icon style="font-size: 2.6rem;" class="fas fa-user" id="user"></v-icon>
      </v-btn>
      <div class="form-popup" v-show="show" id="signin-logout">
        <button type="submit" class="btn"><router-link to = "signin">Login</router-link></button>
        <button type="button" class="btn cancel"><router-link to = "/"> LogOut </router-link></button>
      </div>
    </div> -->
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      show: false,
    };
  },
     methods: {
     onClickButton (event) {
        if(event != 'login')
        this.$emit('clicked', 'login')
        else{
            this.$emit('clicked', 'home')

        }
     }
   }
};
</script>

<style lang="scss" scoped>
header {
  // #signin-logout {
  //   display: block;
  //   margin-left: 32%;
  //   margin-bottom: 12%;
  //   color: yellow;
  //   button {
  //     &:hover {
  //       color: #7ca971;
  //     }
  //     width: 80px;
  //     height: 20px;
  //     color: #2c3e50;
  //     font-size: 1rem;
  //   }
  // }
  a{
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
  top: 0;
  left: 0px;
  background-color: #234e70;
  padding: 1rem 0;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;
    li {
      color:red;
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
    padding-top:34px;
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
      color: #234e70
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
