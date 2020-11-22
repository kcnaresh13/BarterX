import cookies from "js-cookie";
export  function isSignedIn(){
    var cookieVal = cookies.getJSON("sessionCookie")
    return cookieVal!== undefined&&(typeof cookieVal.email) === "string"
    
    

}