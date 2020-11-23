import cookies from "js-cookie";
// import Vue from 'vue';

// export const cookieManager = Vue.observable({
//     isSignedIn: false,
// });
//cookieManager.isSignedIn = isSignedIn();
export function isSignedIn(){
    var cookieVal = cookies.getJSON("sessionCookie")
    return cookieVal!== undefined&&(typeof cookieVal.email) === "string"
    
    

}