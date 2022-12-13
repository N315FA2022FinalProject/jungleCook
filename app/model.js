var userloggedInInfo = {}; // user information
var newRecipes = []; //user newly made recipes
// recID = "";
var recipes = [{ // all of the recipes to be implemented

    //pizza
    recipeName: "Supreme Pizza",
    description: "Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum",
    timeInterval: "1 hr 24 min",
    servingSize: "4 servings",
    image: "./images/recipe-pizza.jpg",
  },
  {

    //burger
    recipeName: "Classic Burger",
    description: "Sink your teeth into a delicious restaurant-style, hamburger recipe made from lean beef. Skip the prepackaged patties and take the extra time to craft up your own, and that little extra effort will be worth it.",
    timeInterval: "30 min",
    servingSize: "4 servings",
    image: "./images/recipe-burger.jpg",
  },
  {

    //chicken
    recipeName: "Chicken Biryani",
    description: "Chicken Biryani is a bold and flavorful Indian dish with crazy tender bites of chicken with bell peppers in a deliciously spiced and fragrant rice.",
    timeInterval: "1 hr 15 min",
    servingSize: "6 servings",
    image: "./images/recipe-pilaf.jpg",
  },
  {

    //chow mein
    recipeName: "Ch. Chow Mein",
    description: "A great Chow Mein comes down to the sauce - it takes more than just soy sauce and sugar! Jam packed with a surprising amount of hidden vegetables, customize this Chicken Chow Mein recipe using your protein of choice!",
    timeInterval: "20 min",
    servingSize: "4 servings",
    image: "./images/recipe-chowmein.jpg",
  },
];
export function changePage(pageID, callback, callbackTwo) {
    // console.log(pageID);
    if (pageID =="" || pageID == "home") {
      $.get(`pages/home.html`, function (data) {
          // console.log("data" + data);
          $("#app").html(data);

        
      });

      //login page
    } else if (pageID == "login") {
     $.get(`pages/${pageID}.html`, function (data) {
                // console.log("data" + data);
                $("#app").html(data); 
                callback();
                callbackTwo();
            });

    //your recipes page
} else if (pageID == "yourRecipes") {
    $.get(`pages/${pageID}.html`, function (data) {
        // console.log("data" + data);
        $("#app").html(data); 
        let usName = localStorage.getItem("userloggedInInfo");
        $(".rec-header h1").html(
            `Hey ${usName.email}, here are your recipes!`
        );

        $.each(newRecipes, function (idx, recipe){
            $(".foodDivBox").append(`
            <div class="newImg">
            <img src="${recipe.image} alt="" />
            <a href="#viewRecipe">
              <button class="viewBtn">View</button>
            </a>
          </div>
          <div class="textContainer">
            <div class="text-all">
          
              <h2>${recipe.recipeName}</h2>
             
              <p class="text-descrip">
                ${recipe.description}
              </p>
              <!-- div that wraps all the icons -->
              <div class="iconwrap">
                <!-- time icon -->
                <img class="icons" src="../images/time.svg" />
                <p class="text-descrip">${recipe.timeInterval}</p>
              </div>
              <!-- div that wraps all the icons -->
              <div class="iconwrap">
                <!-- servings icon -->
                <img class="icons" src="../images/servings.svg" />
                <p class="text-descrip">${recipe.servingSize}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="edDelBtns">
        <a href="#edit">
          <!-- edit recipe btn -->
          <button class="ed-del" id ="${recipe.id}">Edit Recipe</button>
        </a>
        <!-- delete recipe btn -->
        <button class="ed-del" id ="${rec.id}">Delete</button>
      </div>
            `);
        });



    });
}


     else {
        $.get(`pages/${pageID}.html`, function (data){
            //console.log("data " + data);
            $("#app").html(data);
    });
}
}

//takes the logged in user info and stores it with local storage
export function setUserInfo(userObject) {
    userloggedInInfo = userObject;
   
  }

