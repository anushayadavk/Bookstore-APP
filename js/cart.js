window.addEventListener('DOMContentLoaded', function(){ 

  const urlSearchParams = new URLSearchParams(window.location.search);
//   const params = Object.fromEntries(urlSearchParams.entries());

  const userdetails = document.querySelector(".user")
  const list = document.querySelector(".hh7")

  const placeorder = document.querySelector('.z11')
  const adress = document.querySelector('.z14')
  const customerDetails = document.querySelector('.CustomerDetails')
  const placeOrderBtn = document.querySelector('.z11')

  const cart = document.querySelector('.z2')
  const continuee = document.querySelector('.continue11')

  const inAddress = document.querySelector('.inAddress')
  const inCity = document.querySelector('.inCity')
  const inState = document.querySelector('.inState')

  const OrderSum = document.querySelector('.ordersum')
  const OrderSumm = document.querySelector('.ordersum0')

  const counterMinus = document.querySelector('.c2')
  const counterPlus = document.querySelector('.c4')
  let counterDisplay = document.querySelector('.c3')

  const crt = document.querySelector('.orderlists')
  const checkoutbtn1 = document.querySelector('.checkoutbtn1')

  const wishlistab = document.querySelector('.wishlist')
  const booklist = document.querySelector('.myorders')


   let counter = 5;

   continuee.addEventListener('click', function () {
        OrderSum.style.display = 'none';
        OrderSumm.style.display = 'flex';
   
    })
   

    userdetails.addEventListener('click', function () {
      list.style.display = "flex";
    })

    placeorder.addEventListener('click', function () {
        adress.style.display = "none";
        customerDetails.style.display = "flex";
        placeOrderBtn.style.display = "none";
    })   

     let cart01 = [];
     let cart02id;
     let removeBook = "";

    
    let arrayRe;
    let l1;
    let l2;
    let count1;
    let count2;
    
     
    $(document).on('click', '.plus', function (event) {
      let cart02id = event.target.id
    //  counter += 1;/

    l1 = $(`#${cart02id}.display`).html();
        // console.log(x)
        l2 = parseInt(l1)
        // console.log(y);
        l2 = l2 +1;

      let count = {
        //  _id: cart02id,
          quantityToBuy: l2,
      }

      console.log(count.quantityToBuy);

        let obj11 = JSON.stringify(count);
      
        function ajax(url) {
          return new Promise(function (resolve, reject) {
              var xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function () {
                  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                      // console.log(xhr.response, xhr.responseXML);
                      resolve(xhr.response)
                  }
              };
              xhr.open('PUT', url, true);
              xhr.setRequestHeader('x-access-token', localStorage.getItem('token'));
              xhr.setRequestHeader("Content-type", "application/json");

              xhr.onerror = reject;

              xhr.send(obj11);
          });
      }

      function ajaxGet(url) {
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

    ajaxGet(`https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items`)
        .then(function (result) {
            // console.log(result + "hello");
            $(`#${cart02id}.display`).html(count1)
            let Result0 = JSON.parse(result);
            console.log(result)
            console.log(Result0)
            console.log(Result0.result);
            // console.log(JSON.parse(result)); // Code depending on result
            arrayRe = Result0.result.filter(function (book) {
                return book._id == cart02id;
            })

            bookNum = arrayRe.map(function (book4) {
                count1 = book4.quantityToBuy
                console.log(count1)
                // return `<div class="display" id="${book4._id}">${book4.quantityToBuy}</div>`
            });



            console.log(arrayRe)
            ajax(`https://new-bookstore-backend.herokuapp.com/bookstore_user/cart_item_quantity/${cart02id}`)
            .then(function (result) {
            
                console.log(result);
                let j = JSON.parse(result);{
                    console.log(j)
                }

        
            })

            .catch(function (error) {
                console.log(error)
                // An error occurred
            });


        })
        .catch(function (error) {
            console.log(error)
            // An error occurred
        });

      // requirejs(['../service/userservice.js'], function (methods) {
      //     methods.addToCart(count).then(function (response4) {
      //         console.log(response4)
      //       //   location.reload();

      //     })
      // })
     

  });

  $(document).on('click', '.minus', function (event) {
      
        //  counter -= 1;
         cart02id = event.target.id
         l1 = $(`#${cart02id}.display`).html();
         // console.log(x)
         l2 = parseInt(l2)
         // console.log(y);
 
         if (l2 > 0) {
             l2 = l2 - 1;
         }
         else if (l2 == 0) {
             return y;
         }
 
      let count = {
        //  _id: cart02id,
          quantityToBuy: l2,
      }

      console.log(count.quantityToBuy);


        let obj11 = JSON.stringify(count);
        function ajax(url) {
          return new Promise(function (resolve, reject) {
              var xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function () {
                  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                      // console.log(xhr.response, xhr.responseXML);
                      resolve(xhr.response)
                  }
              };
              xhr.open('PUT', url, true);
              xhr.setRequestHeader('x-access-token', localStorage.getItem('token'));
              xhr.setRequestHeader("Content-type", "application/json");

              xhr.onerror = reject;

              xhr.send(obj11);
          });
      }


      function ajaxGet(url) {
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

    ajax(`https://new-bookstore-backend.herokuapp.com/bookstore_user/cart_item_quantity/${cart02id}`)
            .then(function (result) {
                console.log(result);

                ajaxGet(`https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items`)
                    .then(function (result) {
                        // console.log(result + "hello");
                        $(`#${cart02id}.display`).html(count2)
                        let Result0 = JSON.parse(result);
                        console.log(Result0.result);
                        // console.log(Res.result[2].quantityToBuy)
                        // console.log(JSON.parse(result)); // Code depending on result
                        arrayRe = Result0.result.filter(function (book) {
                            return book._id == cart02id;
                        })

                        console.log(arrayRe)
                        bookNum2 = arrayRe.map(function (book4) {
                            console.log(book4.quantityToBuy)
                            count2 = book4.quantityToBuy 

                            // return `<div class="counter-display" id="${book4._id}">${book4.quantityToBuy}</div>`
                        });



                    })
                    .catch(function (error) {
                        console.log(error)
                        // An error occurred
                    });

                // Code depending on result
            })
            .catch(function (error) {
                console.log(error)
                // An error occurred
            });
    
    

      // requirejs(['../service/userservice.js'], function (methods) {
      //     methods.addToCart(count).then(function (response4) {
      //         console.log(response4)
      //       //   location.reload();

      //     })
      // })


  });



  

    
    requirejs(['../service/userservice.js'], (methods) => {
      methods.cartItems().then(function (items) {
          console.log(items.data.result)
          cart01 = items.data.result;
          cart.innerHTML = cart01.map(function (cart00) {
              return `<div class="book1" id="${cart00._id}">
                  <div class="book2" id="${cart00._id}"><img src="/image1/Image 11.png" width="100%" height="100%" id="${cart00._id}"></div>
                  <div class="detail1" id="${cart00._id}"><div class="book3" id="bookName">${cart00.product_id.bookName}</div>
                      <div class="author1" id="author">${cart00.product_id.author}</div>
                      <div class="price1" id="${cart00._id}">
                          <div class="price11" id="${cart00._id}">Rs. ${cart00.product_id.price}</div>
                          <div class="original" id="${cart00._id}"> ${cart00.product_id.price}</div>
                      </div> 
                      <div class="counter11" id="${cart00._id}">
                      <button class="minus" id="${cart00._id}">-</button>
                      <div class="display" id="${cart00._id}">${cart00.quantityToBuy}</div>
                      
                      <button class="plus" id="${cart00._id}">+</button>
                      
                      <div class="remove1" id="${cart00._id}">Remove</div>
                    </div>
                 </div>
              </div>`
          }).join(' ');

      })
  } )


let  remove002;
let cart012 = [];

  $(document).on('click', '.book1', function (event) {
        removeBook = event.target.id
        console.log(removeBook)

        $(document).on('click', '.remove1', function () {
            console.log("hello")
            let removeBok = {
                product_id: removeBook,
            }

            console.log(removeBok)

            let obj22 = JSON.stringify(removeBok);
            function removemCartItem(url) {
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
                    xhr.send(obj22);
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
            removemCartItem(`https://new-bookstore-backend.herokuapp.com/bookstore_user/remove_cart_item/${removeBok.product_id}`)
            .then(function (result) {
               
                console.log(result);

                get(`https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items`)
                .then(function(removResult){
                   remove002 = JSON.parse(removResult);
                    // console.log(wishlist002);
                    cart012 = remove002.result;
                    console.log(cart012)


                    cart.innerHTML = cart012.map(function (cart0012) {
                        return `<div class="book1" id="${cart0012._id}">
                            <div class="book2" id="${cart0012._id}"><img src="/image1/Image 11.png" width="100%" height="100%" id="${cart0012._id}"></div>
                            <div class="detail1" id="${cart0012._id}"><div class="book3" id="bookName">${cart0012.product_id.bookName}</div>
                                <div class="author1" id="author">${cart0012.product_id.author}</div>
                                <div class="price1" id="${cart0012._id}">
                                    <div class="price11" id="${cart0012._id}">Rs. ${cart0012.product_id.price}</div>
                                    <div class="original" id="${cart0012._id}"> ${cart0012.product_id.price}</div>
                                </div> 
                                <div class="counter11" id="${cart0012._id}">
                                <button class="minus" id="${cart0012._id}">-</button>
                                <div class="display" id="${cart0012._id}">${cart0012.quantityToBuy}</div>
                                
                                <button class="plus" id="${cart0012._id}">+</button>
                                
                                <div class="remove1" id="${cart0012._id}">Remove</div>
                              </div>
                           </div>
                        </div>`
                    }).join(' ');
                })

            }).catch(function (error){
                console.log(error);
            })
            // requirejs(['../service/userservice.js'], (methods) => {
            //     methods.cartRemov(removeBok).then(function (response6) {
            //         location.reload();
            //         console.log(response6)

            //     })
            // })
        })



    })

    let city11;
    let state12;
    let address13;
    let ab = "Home";


    inState.addEventListener('change', function () {
        state12 = inState.value;
    })

    inAddress.addEventListener('change', function () {
        address13 = inAddress.value;
    })

    inCity.addEventListener('change', function () {
        city11 = inCity.value
    })
    let regexfirstname = RegExp('^[A-Z]{1}[a-z]{2,}$');
      let regexmobile = RegExp('^[6-9]{1}[0-9]{9,}$'); 
      const first_name = document.querySelector('.inputName');
      const mobile = document.querySelector('.inputNumber');
      const helper = document.querySelector('.helper-text');
      const mobilehelper = document.getElementById('mobile1');
     

    continuee.addEventListener('click', function (e) {

        e.preventDefault();
        let a;
        let f;
      
      first_name.addEventListener('change', function () {
        a = first_name.value;
    //    console.log(a)        
   })
   mobile.addEventListener('change', function () {
    f = mobile.value;
     
 })
        let isfirstValid = regexfirstname.test(a)
        let ismobileValid = regexmobile.test(f)
       console.log(a);
        if(isfirstValid == false || a==undefined) {
            first_name.style.border = "1px solid red";
            helper.style.display = "inline";
        }
        else if (isfirstValid == true) {
            first_name.style.border = "1px solid green";
            helper.style.display = "none";
        }
        if(ismobileValid == false || f==undefined) {
            mobile.style.border = "1px solid red";
            mobilehelper.style.display = "inline";
        }
        else if (ismobileValid == true) {
            mobile.style.border = "1px solid green";
            mobilehelper.style.display = "none";
        }

        let editt = {
            addressType: ab,
            fullAddress: address13,
            city: city11,
            state: state12,
        }

        console.log(editt);

        requirejs(['../service/userservice.js'], (methods) => {
            methods.useredit(editt).then(function (response7) {
                console.log(response7)
                console.log(response7.status)

                if(response7.status === 200){
                    continuee.style.display = 'none';
                    requirejs(['../service/userservice.js'], (methods) => {
                        methods.cartItems().then(function (abc) {
                            console.log(abc.data.result)
                            console.log(abc.data.result[0]._id)
                            cartBookOrders = abc.data.result;
            
                            console.log(cartBookOrders)
            
                            crt.innerHTML = cartBookOrders.map(function (orderlst) {
                                return `<div class="listBook"> <div class="bookListOrders">
                                <div class="image001"><img src="/image1/Image 11.png" width="100%" height="100%" id="${orderlst._id}"></div>
                                <div class="details001">
                                    <div class="orderName0">${orderlst.product_id.bookName}</div>
                                    <div class="orderAuthor">${orderlst.product_id.author} </div>
                                    <div class= "priceList"><div class="priceList1">Rs. ${orderlst.product_id.price}</div>
                                    <div class="priceList2">${orderlst.product_id.price}</div>
                                    </div>
                                </div>
                            </div>
                            </div>`
                            })
            
                        })
                      
                        checkoutbtn1.addEventListener('click', function () {
            
                            console.log('hiii')
            
                            console.log(cartBookOrders)
                            //   console.log(crtBook.product_id.bookName)
                            let bookkk = cartBookOrders.map(function (book) {
                                return {
                                    product_id: `${book._id}`,
                                    product_name: `${book.product_id.bookName}`,
                                    product_quantity: `${book.quantityToBuy}`,
                                    product_price: `${book.product_id.price}`,
                                }
                            })
                            console.log(bookkk);
            
            
                            let obj223 = {
                                orders: bookkk,
                            }
            
                            console.log(obj223)
                            console.log(cartBookOrders)
                            // console.log(crtBook.bookName)
            
                            requirejs(['../service/userservice.js'], (methods) => {
                                console.log('hello');
                                methods.addOrder(obj223).then(function (response11) {
                                    console.log(response11.status);
                                    if (response11.status === 200){
                                        window.location ="http://localhost:5500/html/orderplaced.html"
                                    }
                                    console.log(response11.data.result)
                                    
            
            
                                })
            
                            })
            
                        })
                        
            
            
                    })
            

                }

            })
        });

    // })
    let cartBookOrders = []; 
    
    // continuee.addEventListener('click', function () {
        
        

    })
    
    // checkoutbtn1.addEventListener('click', function () {
    //     window.location = "http://localhost:5500/html/orderplaced.html"

    // })

    wishlistab.addEventListener('click', function () {
        window.location = "http://localhost:5500/html/wishlist.html";
  
      })
    
      booklist.addEventListener('click', function () {
        window.location = "http://localhost:5500/html/Bookstore.html";
  
      })
// let a;
// let f;
//       let regexfirstname = RegExp('^[A-Z]{1}[a-z]{2,}$');
//       let regexmobile = RegExp('^[6-9]{1}[0-9]{9,}$'); 
//       const first_name = document.querySelector('.inputName');
//       const mobile = document.querySelector('.inputNumber');
//       first_name.addEventListener('change', function () {
//         a = first_name.value;
//        console.log(a)        
//    })
//    mobile.addEventListener('change', function () {
//     f = mobile.value;
//     console.log(f)        
//  })

 if(localStorage.getItem('token')!==null){
    console.log('token exist');
}else{
  window.location = "http://localhost:5500/html/login.html";
}

})