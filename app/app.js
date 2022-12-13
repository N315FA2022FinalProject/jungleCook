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
    }  else if (pageID =="yourRecipes") {
        MODEL.changePage(pageID, )

    }else {
        MODEL.changePage(pageID);
    }
}

var ingredCnt = 3;
var instructCnt = 3;
//add button in create recipes page for ingredient/instruction
function initAddListener() {

    $(".addIngredientBtn").on("click", (e) => {
        $(".createRecipePage .recipeIngredientForm").append(`<input type="text" id="ingredient${ingredCnt}"
        class="Ingredient${ingredCnt}" placeHolder="Ingredient #${ingredCnt + 1}" />`  
        );
        console.log("click");
        
        //need to append after added
        ingredCnt++;
    });

    $(".addInstructionBtn").on("click", (e) => {
        //console.log("click");
        $(".recipeInstructionForm").append(`<input type="text" id="instruction${instructCnt}"
        placeHolder="Instruction #${instructCnt + 1}" />`  
        );
        //need to append after added
        instructCnt++;
    });

    $("#submitBtn").on("click", (e) => {
        let recipeObj = {
            description: "",
            steps: [

            ],
            ingredients: []
        };
        e.preventDefault();
        //console.log("submit");
        $(".createRecipePage .recipeIngredientForm input").each((idx, step) => {
            //console.log(step.value);
            recipeObj.steps.push({step: step.value});
        });
        $(".createRecipePage .recipeInstructionForm input").each((idx, ingred) => {
            //console.log(ingred.value);
            recipeObj.ingredients.push({ingred: ingred.value});
        });
    });
}
//logging in function
function initLogInListener() {
    $("#logBtn").on("click", function (e) {
      let em = $("#em").val();
      let pw = $("#pw").val();
  
      if (em == "") {
        Swal.fire("Please enter a valid email address.");
      } else if (pw == "") {
        Swal.fire("Please enter your password.");
      } else {
        let loggedUser = {
          email: em,
          password: pw,
        };
        MODEL.setUserInfo(loggedUser);
  
        Swal.fire(`Hello ${loggedUser.email}! You're now logged in.`);
        // window.location.replace("#logout");
  
        //Change props for viewing as logged in user
        $("#em").val("");
        $("#pw").val("");    
      }
    });
  }
  
  //signn up function
  function initSignUpListener() {
    $("#subBtn").on("click", function (e) {
      let fn = $("#fn").val();
      let ln = $("#ln").val();
      let em = $("#sem").val();
      let pw = $("#spw").val();
  
      if (fn == "") {
        Swal.fire("Please enter your first name.");
      } else if (ln == "") {
        Swal.fire("Please enter your last name.");
      } else if (em == "") {
        Swal.fire("Please enter an email address.");
      } else if (pw == "") {
        Swal.fire("Please create a password.");
      } else {
        let signedUser = {
          firstname: fn,
          lastname: ln,
          email: sem,
          password: spw,
        };
  
        MODEL.setUserInfo(signedUser);
        Swal.fire(`${signedUser.firstname}, thank you for creating an account.`);
  
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
    initAddListener();
    initURLListener();
});