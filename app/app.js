import * as MODEL from "./model.js";

function changeRoute () {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace ("#" , "");
    // console.log(hashTag + ' ' + pageID);

    //route different pages
    if (pageID == "" || pageID == "home") { //if pageID is empty 
      MODEL.changePage("home");//the default page to go to is home
    }
    else if (pageID == "login") {//if you are in the login page
    MODEL.changePage(pageID, initSignUpListener, initLogInListener);//initiate the two functions
    } else {
        MODEL.changePage(pageID);
    }
}

//log in functionality 
function initLogInListener() {
    $("#logBtn").on("click", function (e) {
      let loggedem = $("#em").val();
      let loggedpw = $("#pw").val();
  
      if (loggedem == "") {
        Swal.fire("Please enter a valid email address.");
      } else if (loggedpw == "") {
        Swal.fire("Please enter the correct password.");
      } else {
        let loggednUser = {
          email: loggedem,
          password: loggedpw,
        };
        MODEL.setUserInfo(loggednUser);
  
        Swal.fire(`Hello ${loggednUser.email}! You're now logged in.`);
  
        $("#em").val("");
        $("#pw").val("");    
      }
    });
  }

  //sign up functionality
  function initSignUpListener() {
    
    $("#subBtn").on("click", function (e){
        let fn = $("#fn").val();
        let ln = $("#ln").val();
        let signem = $("#sem").val();
        let signpw = $("#spw").val();

        if (fn == ""){
            Swal.fire("Please enter your first name.");
        } else if (ln == "") {
            Swal.fire("Please enter your last name.");
        } else if (signem == "") {
            Swal.fire("Please enter your email address.");
        } else if (signpw == ""){
            Swal.fire("Please enter a password.");
        } else {
            let signedUser = {
                firstName: fn,
                lastName: ln,
                signedEmail: signem,
                signedPW: signpw
            };
            MODEL.setUserInfo(signedUser);
            Swal.fire("Thank you for creating an account.");

            $("#fn").val("");
            $("#ln").val("");
            $("#sem").val("");
            $("#spw").val("");
        }
    });
  }


function initURLListener () {
    $(window).on("hashchange", changeRoute);
    console.log
    changeRoute();
}






$(document).ready(function (){
    initURLListener();
});