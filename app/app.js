import * as MODEL from "./model.js";

function changeRoute () {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace ("#" , "");
    console.log(hashTag + ' ' + pageID);
    if (pageID == "" || pageID == "home") {
      MODEL.changePage(pageID, initSubmitListener);
    } else if (pageID == "books") {
        MODEL.changePage(pageID, buyNow);
    } else {
        MODEL.changePage(pageID);
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


function buyNow () {
    $(".bookInfo button").on("click" , (e) => {
        let bookID = e.currentTarget.id;
        MODEL.addToCart(bookID);
        console.log(bookID);
    });
}

// user information
function initSubmitListener() {
    $("#submit").on("click", function (e){
        console.log("submit");
        let fn = $("#fName").val();
        let ln = $("#lName").val();
        let em = $("#email").val();
        let pw = $("#pw").val();
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
});