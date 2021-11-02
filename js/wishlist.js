window.addEventListener('DOMContentLoaded', function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const cartPage = document.querySelector(".h6")
  const userdetails = document.querySelector(".user")
  const list = document.querySelector(".hh7")
  const wishlistContent = document.querySelector('.wishlistContent')
  const booklist = document.querySelector('.myorders')

  cartPage.addEventListener('click', function () {
    window.location = "http://localhost:5500/html/cart.html"

  })

  booklist.addEventListener('click', function () {
    window.location = "http://localhost:5500/html/Bookstore.html";

  })
  userdetails.addEventListener('click', function () {
    console.log("user")
    list.style.display = "flex";

  })

  let wishlist002;
    let wishlistArray = [];
   
  requirejs(['../service/userservice.js'], (methods) => {
    methods.get_wishlist_items().then(function (wishItems) {
        console.log(wishItems.data.result)
        let wishlist001 = wishItems.data.result;
        console.log(wishlist001)

        wishlistContent.innerHTML = wishlist001.map(function (res) {
            return `<div class="wishcont" id="${res.product_id._id}">
            <div class="imagecont" id="${res.product_id._id}"><img src="../image1/Image 11.png" width="100%" height="100%"></div>
            <div class="bookDetails" id="${res.product_id._id}">
                <div class="name01" id="${res.product_id._id}">${res.product_id.bookName}</div>
                <div class="author01" id="${res.product_id._id}">${res.product_id.author}</div>
                <div class="bookPrice" id="${res.product_id._id}">
                    <div class="bookPrice01" id="${res.product_id._id}">Rs. ${res.product_id.price}</div>
                    <div class="bookPrice02" id="${res.product_id._id}"> ${res.product_id.price}</div>
                </div> 
                <div class ="shoppingCart221">
                <div class ="shoppingCart" id="${res.product_id._id}"><i class="material-icons" id="${res.product_id._id}">shopping_cart</i></div> 
                <div class= "delete01" id="${res.product_id._id}"><i class="material-icons" id="${res.product_id._id}">delete</i></div>
                </div> 
            </div>
        </div>`
        }).join(' ');

      })
    })

   
  $(document).on('click', '.wishcont', function (event) {
     let ab = event.target.id

      $(document).on('click', '.delete01', function () {
          let wishlistDelete = {
              product_id: ab,
          }

          console.log(wishlistDelete)

          let obj12 = JSON.stringify(wishlistDelete);
         
          function removemWishlist(url) {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                        // console.log(xhr.response, xhr.responseXML);
                        resolve(xhr.response)
                    }
                };
                xhr.open('DELETE', url, true);
                xhr.setRequestHeader('x-access-token', localStorage.getItem('token'));
                xhr.setRequestHeader("Content-type", "application/json");

                xhr.onerror = reject;
                xhr.send(obj12);
            });
        }
        function get(url){
          return new Promise(function (resolve, reject) {
              var xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function () {
                  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                      // console.log(xhr.response, xhr.responseXML);
                      resolve(xhr.response)
                  }
              };
              xhr.open('GET', url, true);
              xhr.setRequestHeader('x-access-token', localStorage.getItem('token'));
              xhr.setRequestHeader("Content-type", "application/json");

              xhr.onerror = reject;

              xhr.send();
          });

      }

      removemWishlist(`https://new-bookstore-backend.herokuapp.com/bookstore_user/remove_wishlist_item/${wishlistDelete.product_id}`)
            .then(function (result) {
               
                console.log(result);

                get(`https://new-bookstore-backend.herokuapp.com/bookstore_user/get_wishlist_items`)
                .then(function(wisResult){
                   wishlist002 = JSON.parse(wisResult);
                    // console.log(wishlist002);
                   wishlistArray = wishlist002.result;
                    console.log(wishlistArray)


                    wishlistContent.innerHTML = wishlistArray.map(function(res1){
                      return `<div class="wishcont" id="${res1.product_id._id}">
                      <div class="imagecont" id="${res1.product_id._id}"><img src="../image1/Image 11.png" width="100%" height="100%"></div>
                      <div class="bookDetails" id="${res1.product_id._id}">
                          <div class="name01" id="${res1.product_id._id}">${res1.product_id.bookName}</div>
                          <div class="author01" id="${res1.product_id._id}">${res1.product_id.author}</div>
                          <div class="bookPrice" id="${res1.product_id._id}">
                              <div class="bookPrice01" id="${res1.product_id._id}">Rs. ${res1.product_id.price}</div>
                              <div class="bookPrice02" id="${res1.product_id._id}"> ${res1.product_id.price}</div>
                          </div> 
                          <div class ="shoppingCart221">
                          <div class ="shoppingCart" id="${res1.product_id._id}"><i class="material-icons" id="${res1.product_id._id}">shopping_cart</i></div> 
                          <div class= "delete01" id="${res1.product_id._id}"><i class="material-icons" id="${res1.product_id._id}">delete</i></div>
                          </div> 
                      </div>
                  </div>`
                    }).join(' ');
                })

            }).catch(function (error){
                console.log(error);
            })

          // requirejs(['../service/userservice.js'], (methods) => {
          //     methods.remove_wishlist_item(wishlistDelete).then(function (response10) {
          //         location.reload();
          //         console.log(response10)
          //     })

          // })
      })



      $(document).on('click', '.shoppingCart', function () {
        console.log('abc')
        //addtobag.style.display = 'none'
        //button.style.display = "flex"
    
        let data = {
          product_id: ab,
        }
        console.log(data)
    
        requirejs(['../service/userservice.js'], function (methods) {
          methods.addToBook(data).then(function (response3) {
    
                console.log(response3)
              })
    
            })
      })
  })

  if(localStorage.getItem('token')!==null){
    console.log('token exist');
}else{
  window.location = "http://localhost:5500/html/login.html";
}
    
})  