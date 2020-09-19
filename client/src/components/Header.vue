<template>
  <header class="navigation">
    <ul>
      <li>Home</li>
      <li>Buy</li>
      <li>Sell</li>
      <li>Barter</li>
      <li>About</li>
      <li>Other</li>
    </ul>
    <div class="search">
      <input type="text" placeholder="Search for articles, people or magazines" />
    </div>
    <div class="icons">
      <v-icon style="font-size: 2.6rem;" class="fas fa-shopping-cart" id="shopping"></v-icon>
      <v-btn style="font-size: 2.6rem;" slot="badge" @click="show = !show">
        <v-icon style="font-size: 2.6rem;" class="fas fa-user" id="user"></v-icon>
      </v-btn>
      <div class="form-popup" v-show="show" id="signIn-SignUp">
        <div class="menu">
          <button type="submit" class="btn">Login</button>
          <button type="button" class="btn cancel">Close</button>
        </div>
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
  #signIn-SignUp {
    display: block;
    right: 15px;
    border: 3px solid #f1f1f1;
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
    margin: 0 0 0 25%;
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
