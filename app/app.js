import * as MODEL from "./model.js";

function changeRoute () {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace ("#" , "");
    // console.log(hashTag + ' ' + pageID);

    //route different pages
    if (pageID == "" || pageID == "home") {
      MODEL.currentPage("home");
    } else if (pageID == "login") {
        MODEL.currentPage("login", initSubmitListener);
    } else {
        MODEL.currentPage(pageID);
    }
}

 //     
    // } else if (pageID == "blog") {
    //     MODEL.changePage(pageID, buyNow);
    // } else if (pageID == "account") {
    //     MODEL.changePage(pageID, buyNow);
    // } else if (pageID == "about") {
    //     MODEL.changePage(pageID, buyNow);
    // }}

function initURLListener () {
    $(window).on("hashchange", changeRoute);
    console.log
    changeRoute();
}



// user information
function initSubmitListener() {
    $("#login").on("click", function (e) {
        e.preventDefault();
        let email = $("#em").val();
        let password = $("#pw").val();
    
        if (email == "") {
            alert("Enter your email");
        } else if (password == "") {
            alert("You need to enter your password");
        } else {
            alert("yay");
    
            $("#em").val("");
            $("#pw").val("");
    
        }
        
    });
    
    }

$(document).ready(function (){
    initURLListener();
});