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
import Search from "./components/Search.vue";
import Buyone from "./components/Buyone.vue";
import { isSignedIn } from './util';
import cookies from 'js-cookie';

library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;


const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};


Vue.use(VueRouter)
const routes = [
    { path: '/', component: HomepageBody },
    { path: '/profile', component: ProfilePage },
    { path: '/post', component: PostPage },
    { path: '/signin', component: SignIn },
    { path: '/list', component: Listings },
    { path: '/search', name: 'search', component: Search, props: true },
    { path: '/buyone', name: 'buyone', component: Buyone, props: true }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

const hook = function(intendedDestination, from, next) {

    console.log(intendedDestination.path)

    if (!isSignedIn() && intendedDestination.path === "/profile") {
        next('/signin')
        setTimeout(() => {
            alert("Please sign in")
        }, (100));



    } else if (intendedDestination.path === "/logout") {
        cookies.remove("sessionCookie");
        //cookieManager.isSignedIn = false;
        console.log("logout")
        next("/signin")
    } else {
        next()
    }

    if (!isSignedIn() && intendedDestination.path === "/post") {
        next('/signin')
        setTimeout(() => {
            alert("Please sign in")
        }, (200));



    } else if (intendedDestination.path === "/logout") {
        cookies.remove("sessionCookie");
        //cookieManager.isSignedIn = false;
        console.log("logout")
        next("/signin")
    } else {
        next()
    }



}


router.beforeEach(hook)

new Vue({
    render: (h) => h(App),
    router,
}).$mount("#app");

global.jQuery = require("jquery");
var $ = global.jQuery;
window.$ = $;