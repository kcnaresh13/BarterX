import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import ProfilePage from "./components/ProfilePage.vue";
import HomepageBody from "./components/HomepageBody.vue";
import PostPage from "./components/PostPage.vue";
import SignIn from "./components/SignIn.vue";
import Listings from "./components/Listings.vue";

library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(VueRouter)
const routes = [
    {path: '/', component: HomepageBody},
    {path: '/profile', component: ProfilePage},
    {path: '/post', component: PostPage},
    {path: '/signin', component: SignIn},
    {path: '/list', component: Listings}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});



new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");

global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;