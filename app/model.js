var userloggedInInfo = {};

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
}

  /* This is a function that is called when the pageID is not empty or home. It is getting the pageID
  and then adding it to the pages folder. */
     else {
        $.get(`pages/${pageID}.html`, function (data){
            console.log("data " + data);
            $("#app").html(data);
    });
}
}

//Create User Object
export function setUserInfo(userObject) {
    userloggedInInfo = userObject;
    return localStorage.setItem("userloggedInInfo", JSON.stringify(userloggedInInfo));
  }

