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
    } else if (pageID == "createrecipes") {
        MODEL.currentPage("createrecipes", initAddListener);
    }else {
        MODEL.currentPage(pageID);
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
    initAddListener();
    initURLListener();
});