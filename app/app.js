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
    $("#submit").on("click", function (e){
        console.log("submit");
        let fn = $("#fn").val();
        let ln = $("#ln").val();
        let em = $("#sem").val();
        let pw = $("#spw").val();
        if (fn == "") {
            alert("enter data");

        }else if (ln == "") {
            alert("enter data");

        }else if (em == "") {
            alert("enter data");

        }else if (pw == "") {
            alert("enter data");

        } else {
            let userObj = {
                FirstName: fn,
                lastName: ln,
                email: em,
                password: pw,
            };

            MODEL.setUserInfo(userObj);
        }
        // console.log(`${fn} ${ln} ${em} ${pw} `);

    });
}

$(document).ready(function (){
    initURLListener();
    initSubmitListener();
});