<template>
  <header class="navigation">
    <div class="logo">
      <img src="../assets/logo.png" width="180px" height="130px" alt />
    </div>
    <nav>
      <ul>
        <li>Home</li>
        <li>Buy</li>
        <li>Sell</li>
        <li>Barter</li>
        <li>About</li>
      </ul>
    </nav>
    <div class="search">
      <input type="text" placeholder="Search for books, notes, school supplies ....." />
    </div>
    <div class="icons">
      <v-icon style="font-size: 2.6rem;" class="fas fa-shopping-cart" id="shopping"></v-icon>
      <v-btn style="font-size: 2.6rem;" slot="badge" @click="show = !show">
        <v-icon style="font-size: 2.6rem;" class="fas fa-user" id="user"></v-icon>
      </v-btn>
      <div class="form-popup" v-show="show" id="signin-logout">
        <button type="submit" class="btn">Login</button>
        <button type="button" class="btn cancel">Log Out</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      show: false,
    };
  },
};
</script>

<style lang="scss" scoped>
header {
  #signin-logout {
    display: block;
    margin-left: 32%;
    button {
      &:hover {
        color: #7ca971;
      }
      width: 80px;
      height: 20px;
      color: #2c3e50;
      font-size: 1rem;
    }
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
  margin-bottom: 50px;
  clear: both;
  position: sticky;
  top: 0;
  left: 0px;
  background-color: #16162d;
  padding: 1rem 0;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;
    li {
      color: #2c3e50;
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
    input {
      border: none;
      outline: none;
      width: calc(100% - 80px);
      padding: 15px 60px 15px 20px;
      margin: 0;
      border-radius: 20px;
      background-color: #efefef;
      font-family: "Segoe UI", Tahoma;
      font-size: 1rem;
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
