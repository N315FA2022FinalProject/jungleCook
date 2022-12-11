var userInfo = {};

var cart = [];

var bookList= [ //booklist for all the books in the page that are shown to add to cart
  // this is the booklist for the first section
    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "Twilight Book Series Box Set",
        bookAuthor: "Stephenie Meyer",
       bookPrice: "$99.99",
        bookImg: "books/twilight-box-set.jpg",

    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "Harry Potter Book Series Box Set",
        bookAuthor: "J. K. Rowling",
       bookPrice: "$100",
        bookImg: "books/hp-box-set.jpg",
    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "A Song of Ice and Fire Book Series Box Set",
        bookAuthor: "George R. R. Martin",
       bookPrice: "$100",
        bookImg: "books/got-box-set.jpg", 
    }, 
    // this is the booklist for the second section
   {
  
        
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "Finding Me",
        bookAuthor: "Viola Davis",
        bookPrice: "$27.99",
         bookImg: "books/finding-me.jpg",

    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "The Autobiography of Martin Luther King Jr.",
        bookAuthor: "Clayborne Carson",
        bookPrice: "$19.99",
         bookImg: "books/mlk-biography.jpg",
    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "Autobiography",
        bookAuthor: "Eleanor Roosevelt",
        bookPrice: "$17.99",
         bookImg: "books/elenor-roosevelt-biography.jpg",
    },
    // this is the booklist for the third section
    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "Misery",
        bookAuthor: "Stephen King",
        bookPrice: "$19.99",
         bookImg: "books/misery.jpg",
    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "Frankenstein",
        bookAuthor: "Mary Shelley",
        bookPrice: "$15.99",
         bookImg: "books/frankenstein.jpg",
    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "Phantoms",
        bookAuthor: "Dean Koontz",
        bookPrice: "$19.99",
         bookImg: "books/phantoms.jpg",
    },
     // this is the booklist for the fourth section
    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "The Complete Tails of Winnie the Pooh",
        bookPrice: "$19.99",
        bookAuthor: "A. A. Milne",
         bookImg: "books/winnie-the-pooh.jpg",
    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "The Cat and The Hat",
        bookAuthor: "Dr. Seuss",
        bookPrice: "$15.99",
         bookImg: "books/cat-and-the-hat.jpg",
    },

    {
        bookInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac.",
        bookTitle: "Fun Facts About Space",
        bookAuthor: "Baby Professor",
        bookPrice: "$7.99",
         bookImg: "books/fun-facts-about-space.jpg",
    },
  // this is the booklist for the home page
  {
    bookInfo: " 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis veleros.",
    bookAuthor: "Harper Lee",
    bookPrice: "$15.99",
     bookImg: "home/to-kill-a-mockingbird.png",
},

{
  bookInfo: " 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis veleros.",
  bookAuthor: "Michelle Obama",
  bookPrice: "$25.99",
   bookImg: "home/becoming.png",
},

{
  bookInfo: " 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' Urna nunc id cursus metus aliquam eleifend mi. Massa vitae tortor condimentum lacinia quis veleros.",
  bookAuthor: "Stephen King",
  bookPrice: "$19.99",
   bookImg: "home/firestarter.png",
}

]

export function changePage(pageID, callback) {
    console.log(pageID);
    if (pageID =="" || pageID == "home") {
      $.get(`pages/home.html`, function (data) {
          // console.log("data" + data);
          $("#app").html(data);
          //this is what will inject when someone is in the books page 
          $.each(bookList, function(idx, book){ // first set of books
            if (idx >= 12) {
               $(".home-books").append(`<div class="home-shop">
                <img src="images/${book.bookImg}" alt="" />
                <p class = "homeBook-texting">${book.bookInfo}</p>
                <p class = "pricing">${book.bookPrice}</p>
                <button id="${idx}"><a href="javascript:void(0);">ADD TO CART</a></button>
            </div>
          </div>`);
            }      
});
          callback();
      });

    }else if (pageID == "books"){
        $.get(`pages/${pageID}.html`, function (data){
            // console.log("data " + data);
            $("#app").html(data);
            //this is what will inject when someone is in the books page 
            $.each(bookList, function(idx, book){ // first set of books
              if (idx <=2) {
                 $(".bookPages").append(`<div class="book">
                <div class="bookImage">
                  <img src="images/${book.bookImg}" alt="" />
                </div>
                <div class="bookInfo">
                  <p class = "infoText">${book.bookInfo}</p>
                  <p class = "price">${book.bookPrice}</p>
                  <button id="${idx}"><a href="javascript:void(0);">ADD TO CART</a></button>
                </div>
              </div>
            </div>`);
              }      
});

            $.each(bookList, function(idx, book){ // second set of books
              if (idx >= 3 && idx < 6) {
              $(".bookPagesTwo").append(`<div class="book">
              <div class="bookImage">
                <img src="images/${book.bookImg}" alt="" />
              </div>
              <div class="bookInfo">
                <p class = "infoText">${book.bookInfo}</p>
                <p class = "price">${book.bookPrice}</p>
                <button id="${idx}"><a href="javascript:void(0);">ADD TO CART</a></button>
              </div>
            </div>
            </div>`);
              }
            });
            $.each(bookList, function(idx, book){ // third set of books
              if (idx >= 6 && idx < 9) {
              $(".bookPagesThree").append(`<div class="book">
              <div class="bookImage">
                <img src="images/${book.bookImg}" alt="" />
              </div>
              <div class="bookInfo">
                <p class = "infoText">${book.bookInfo}</p>
                <p class = "price">${book.bookPrice}</p>
                <button id="${idx}"><a href="javascript:void(0);">ADD TO CART</a></button>
              </div>
            </div>
            </div>`);
              }
            });
            $.each(bookList, function(idx, book){ // fourth set of books
              if (idx >= 9 && idx < 12) {
              $(".bookPagesFour").append(`<div class="book">
              <div class="bookImage">
                <img src="images/${book.bookImg}" alt="" />
              </div>
              <div class="bookInfo">
                <p class = "infoText">${book.bookInfo}</p>
                <p class = "price">${book.bookPrice}</p>
                <button id="${idx}"><a href="javascript:void(0);">ADD TO CART</a></button>
              </div>
            </div>
            </div>`);
              }
            });
 callback();
});

    }
    // cart
     else {
        $.get(`pages/${pageID}.html`, function (data){
            console.log("data " + data);
            $("#app").html(data);
            //CART PAGE HTML
      $.each(cart, function (idx, cartItem) {
        console.log(bookList[cartItem]);
        let book = bookList[cartItem];
        $(".items").append(`<div class="book">
        <div class="bookcover">
            <img src="images/${book.bookImg}" alt="">
        </div>
        <div class="bookinfo">
        <p class = "cart-book-title">${book.bookTitle} by ${book.bookAuthor}</p>
        <p class = "cartPrice>Price: ${book.price}</p>
        <p class= "stock-stats">In Stock</p>
        <div class = "change">
        <p class = "qt">  Qty: ${idx}</p>
        <a href="#books">change</a>
        <span>||</span>
        <a href="#books">delete</a>
        </div>
    </div>
    </div>`);
          })
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