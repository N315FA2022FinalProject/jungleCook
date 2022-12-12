var userInfo = {};


export function currentPage(pageID, callback) {
    console.log(pageID);
    if (pageID =="" || pageID == "home") {
      $.get(`pages/home.html`, function (data) {
          // console.log("data" + data);
          $("#app").html(data);

          callback();
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

export function setUserInfo(userObject){
    userInfo = userObject;
    console.log(userInfo);
}

export function addToCart (bookIdx) {
  cart.push(bookIdx);
  $("#cartCount").html(cart.length.toString());
}