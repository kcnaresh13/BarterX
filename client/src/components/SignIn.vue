<template>
  <main class="main-container">
    <div class="container" :class="{ 'sign-up-active': signUp }">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Welcome Back!</h2>
            <p>Please login with your personal info</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">Sign In</button>
          </div>
          <div class="overlay-right">
            <h2>Welcome to BarterX</h2>
            <p>If you don't have an account, feel free to create one.</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">Sign Up</button>
          </div>
        </div>
      </div>

      <form class="sign-up" action="#">
        <h2>Create login</h2>
        <div>Use your Hofstra email for registration</div>
        <input type="text" placeholder="Username" v-model="username" value="username" />
        <input type="email" placeholder="Email" v-model="email" value="email" />
        <input type="password" placeholder="Password" v-model="password" value="password" />
        <input
          type="password"
          placeholder="Re-type Password"
          v-model="rePassword"
          value="rePassword"
        />
        <button v-on:click="createInfo()">Sign Up</button>
        <label>{{signUpMessage}}</label>
      </form>
      <form class="sign-in" action="#">
        <img src="../assets/logo.png" width="150px" height="100px" alt />
        <h2>Sign In</h2>
        <div>Use your account</div>
        <input type="email" placeholder="Email" v-model="email" value="email" />
        <input type="password" placeholder="Password" v-model="password" value="password" />
        <a href="#">Forgot your password?</a>
        <button v-on:click="signIn()">Sign In</button>
        <label>{{signInMessage}}</label>
      </form>
    </div>

    <!---------------------------Items------------------->
  </main>
</template>

<script>
import InfoService from "../Service/InfoService";
import axios from "axios";

const url = "api/info/";

export default {
  data: () => {
    return {
      signUp: false,
      info: [],
      username: "",
      email: "",
      password: "",
      rePassword: "",
      signInMessage: "",
      signUpMessage: "",
    };
  },
  async created() {
    console.log("created");
  },
  methods: {
    async signIn() {
      await axios.get(url).then((res) => (this.info = res.data));

      for (var i = 0; i < this.info.length; i++) {
        var current = this.info[i];
        if (current.email == this.email && current.password == this.password) {
          this.signInMessage = "Congratulations, you are signed in !!";
          break;
        } else {
          this.signInMessage =
            "Your email or password is incorrect. Please try again !";
        }
      }
    },

    async createInfo() {
      await axios.get(url).then((res) => (this.info = res.data));
      if (this.email && this.username && this.password && this.rePassword) {
        if (this.password == this.rePassword) {
          for (var i = 0; i < this.info.length; i++) {
            var current = this.info[i];
            if (current.email == this.email) {
              this.signUpMessage =
                "Email address already exist. Please sign in using this email";
              break;
            }
          }
          await InfoService.insertInfo(
            this.username,
            this.email,
            this.password
          );
          this.signUpMessage = "You have successfully registered ";
        } else {
          this.signUpMessage = "Password doesnot match";
        }
      } else {
        this.signUpMessage = "Please provide all the info !!";
      }
    },
    async deleteInfo(id) {
      await InfoService.deleteInfo(id);
      this.info = await InfoService.getInfo();
    },
  },
};
</script>

<style lang="scss" >
.container {
  margin-top: 5%;
  display: block;
  margin-bottom: 100%;
  margin-top: 20%;
  position: relative;
  width: 688px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #efefef, #ccc);
  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }
  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background: rgb(186, 153, 45);
    background: rgb(45, 186, 119);
    background: linear-gradient(
      90deg,
      rgba(45, 186, 119, 1) 15%,
      rgba(39, 116, 126, 1) 67%
    );
    color: #fff;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }
  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }
  .overlay-left {
    @include overlays(-20%);
  }
  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}
h2 {
  margin: 0;
}
p {
  margin: 20px 0 30px;
}
a {
  color: #222;
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}
button {
  border-radius: 20px;
  border: 1px solid rgb(37, 49, 214);
  background-color: rgb(37, 49, 214);
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;
  &:active {
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
}
button.invert {
  background-color: transparent;
  border-color: #fff;
}
form {
  img {
    margin-bottom: 10px;
  }
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(50% - 120px);
  height: calc(100% - 180px);
  text-align: center;
  background: linear-gradient(to bottom, #efefef, #ccc);
  transition: all 0.5s ease-in-out;
  div {
    font-size: 1rem;
  }
  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;
    overflow: hidden;
    &:focus {
      outline: none;
      background-color: #fff;
    }
  }
}
.sign-in {
  left: 0;
  z-index: 2;
}
.sign-up {
  left: 0;
  z-index: 1;
  opacity: 0;
}
.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }
  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }
  .overlay-container {
    transform: translateX(-100%);
  }
  .overlay {
    transform: translateX(50%);
  }
  .overlay-left {
    transform: translateX(0);
  }
  .overlay-right {
    transform: translateX(20%);
  }
}
@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
</style>

