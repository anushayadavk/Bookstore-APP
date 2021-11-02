window.addEventListener('DOMContentLoaded', function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const counterMinus = document.querySelector('.c2')
  const counterPlus = document.querySelector('.c4')
  let counterDisplay = document.querySelector('.c3')
  const wishlistab = document.querySelector('.wishlist')
  const wishlist1 = document.querySelector('.b2')
  const addedWish = document.getElementById('b33')

//   let counter = 1;
//   let con =[]
//   let bookOd=""
  let p;
  let q;

  $(document).on('click', '.c4', function () {

    // let cart02id = event.target.id
    console.log("hi")
    p = $(`.c3`).html();
    console.log(p)
    q = parseInt(p)
    console.log(q);

    q = q + 1;

    
    let count = {
      // _id: params.id,
      quantityToBuy: q,
    }

    console.log(count)
        console.log(count.quantityToBuy);

        let obj11 = JSON.stringify(count);
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
            // console.log(result);




            function ajax(url) {
                return new Promise(function (resolve, reject) {
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                            // console.log(xhr.response, xhr.responseXML);
                            resolve(xhr.responseText)
                        }
                    };
                    xhr.open('PUT', url, true);
                    xhr.setRequestHeader('x-access-token', localStorage.getItem('token'));
                    xhr.setRequestHeader("Content-type", "application/json");

                    xhr.onerror = reject;

                    xhr.send(obj11);
                });
            }


            // console.log(JSON.parse(result.result))
            let a = JSON.parse(result)
            console.log(a.result)

            let resultArray = a.result

            let b = resultArray.filter(function (books11) {
                console.log(books11)
                if (books11.product_id._id == params.id) {
                    return books11


                }

            })
            console.log(b)
            let cartId03 = b[0]._id;
            console.log(cartId03)

            ajax(`https://new-bookstore-backend.herokuapp.com/bookstore_user/cart_item_quantity/${cartId03}`)
                .then(function (result) {
                    console.log(result)
                    let a = JSON.parse(result)
                    console.log(a)

                    let b = a.result
                    // console.log(b)



                    ajaxGet(`https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items`)
                        .then(function (result) {

                            console.log(result)
                            let a = JSON.parse(result)
                            console.log(a)

                            let b = a.result
                            console.log(b)

                            let filtArr = b.filter(function (book13) {
                                if (book13._id == cartId03) {
                                    return book13
                                }

                            })
                            console.log(filtArr[0].quantityToBuy)


                            $('.c3').html(filtArr[0].quantityToBuy)
                        })

                })

        })
        .catch(function (error) {
            console.log(error)
            // An error occurred
        });

    

    // requirejs(['../service/userservice.js'], function (methods) {
    //   methods.addToCart(count).then(function (response4) {
    //     console.log(response4)
        
    //   })
    // })
    
  })

  $(document).on('click', '.c2', function (event) {

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
    cart02id = event.target.id
    //  counter -= 1
    // counterDisplay.innerHTML = counter;

       p = $(`.c3`).html();
        console.log(p)
        q = parseInt(p)
        console.log(p);
        q = q - 1;

    
    let count = {
      // _id: params.id,
      quantityToBuy: q
    }

    
    console.log(count)
    console.log(count.quantityToBuy);

    let obj11 = JSON.stringify(count);

    ajaxGet(`https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items`)
            .then(function (result) {
                // console.log(result);




                function ajax(url) {
                    return new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                                // console.log(xhr.response, xhr.responseXML);
                                resolve(xhr.responseText)
                            }
                        };
                        xhr.open('PUT', url, true);
                        xhr.setRequestHeader('x-access-token', localStorage.getItem('token'));
                        xhr.setRequestHeader("Content-type", "application/json");

                        xhr.onerror = reject;

                        xhr.send(obj11);
                    });
                }


                // console.log(JSON.parse(result.result))
                let a = JSON.parse(result)
                console.log(a.result)

                let resultArray = a.result

                let b = resultArray.filter(function (books12) {
                    console.log(books12)
                    if (books12.product_id._id == params.id) {
                        return books12


                    }

                })
                console.log(b)
                let cartId04 = b[0]._id;
                console.log(cartId04)

                ajax(`https://new-bookstore-backend.herokuapp.com/bookstore_user/cart_item_quantity/${cartId04}`)
                    .then(function (result) {
                        console.log(result)
                        let a = JSON.parse(result)
                        console.log(a)

                        let b = a.result
                        console.log(b)



                        ajaxGet(`https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items`)
                            .then(function (result) {

                                console.log(result)
                                let a = JSON.parse(result)
                                console.log(a)

                                let b = a.result
                                console.log(b)

                                let filtArr = b.filter(function (book13) {
                                    if (book13._id == cartId04) {
                                        return book13
                                    }

                                })
                                console.log(filtArr[0].quantityToBuy)


                                $('.c3').html(filtArr[0].quantityToBuy)
                            })

                    })

            })
            .catch(function (error) {
                console.log(error)
                // An error occurred
            });


    // requirejs(['../service/userservice'], function (methods) {
    //   methods.addToCart(count).then(function (response4) {
    //     console.log(response4)
    //   })
    // })

  })

  let quant;
    let filterArry3;


    function ajaxGet1(url) {
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

    ajaxGet1(`https://new-bookstore-backend.herokuapp.com/bookstore_user/get_cart_items`)
        .then(function (result) {

            let Res = JSON.parse(result);
            // console.log(Res.result);
            let bookNum3 = Res.result
            console.log(bookNum3);
            // console.log(bookNum3.quantityToBuy)


            filterArry3 = bookNum3.filter(function (book) {
                return book.product_id._id == params.id;
                // quant = filterArry3.quantityToBuy

            })
            console.log(filterArry3)

            quant = filterArry3.map(function (book) {
                if (book.quantityToBuy > 0) {
                    
                    
                    addtobag.style.display = 'none'
                    button.style.display = "flex"
                    addedWish.style.display ="block";
                         wishlist.style.display ="none";

                }
                console.log(book.quantityToBuy)
                return book.quantityToBuy



            })

            counterDisplay.innerHTML = quant[0]
            console.log(quant)
          
        })
        .catch(function (error) {
            console.log(error)
            // An error occurred
        });


        let quant1;
    let filterArry4;

        function ajaxGet2(url) {
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

        ajaxGet2(`https://new-bookstore-backend.herokuapp.com/bookstore_user/get_wishlist_items`)
        .then(function (result31) {

            let Res9 = JSON.parse(result31);
            // console.log(Res.result);
            let bookNum4 = Res9.result
            console.log(bookNum4);
            // console.log(bookNum3.quantityToBuy)


            filterArry4 = bookNum4.filter(function (wh) {
                return wh.product_id._id == params.id;
                // quant = filterArry3.quantityToBuy

            })
            console.log(filterArry4)

            quant1 = filterArry4.map(function (boo) {
                // if (boo._id > 0) {
                    
                    
                    // addtobag.style.display = 'none'
                    // button.style.display = "flex"
                    addedWish.style.display ="block";
                         wishlist.style.display ="none";

                // }
                console.log(boo._id)
                return boo._id



            })

            counterDisplay.innerHTML = quant[0]
            console.log(quant1)
          
        })
        .catch(function (error) {
            console.log(error)
            // An error occurred
        });


  console.log(params.id);
  const addBook = document.querySelector("#q33")
  const addtobag = document.querySelector("#b11")
  const wishlist = document.querySelector("#b22")
  const button = document.querySelector(".c1")
  const userdetails = document.querySelector(".user")
  const list = document.querySelector(".hh7")
  const cartPage = document.querySelector(".h6")

  userdetails.addEventListener('click', function () {
    console.log("user")
    list.style.display = "flex";

  })

  wishlist1.addEventListener('click', function () {
    let wishlst = {
       product_id: params.id,
    }
    addedWish.style.display ="flex";
    wishlist.style.display ="none";
    console.log(wishlst);

    requirejs(['../service/userservice.js'], function (methods){
        methods.wish_list(wishlst).then(function(response8){
            console.log(response8)
            // if(response8.status===200){
            //     addedWish.style.display ="flex";
            //              wishlist1.style.display ="none";
            // }
        })
        
    })

  })


  requirejs(['../service/userservice.js'], (methods) => {
    methods.getBooks().then(function (Response2) {
      console.log(Response2)
      let arr = Response2.data.result;
      let Response3 = arr.filter(function (book) {
        return book._id == params.id;
      })
      addBook.innerHTML = Response3.map(function (book) {
        return `
        <div class="x3">
        <div class="d1" id=${book._id}>${book.bookName}</div>
        <div class="d2" id=${book._id}>${book.author}</div>
        <div class="ab22" >
           <div class="point" >4.5*</div>
           <div class="r1" >(20)</div>
        </div>
        <div class="ab23" >
            <div class="price1" id=${book._id} >Rs. ${book.price}</div>
             <div class="price2" >Rs. 2000</div>
        </div>
      </div>
      <div class="x4">
        <div class="d4" >Book details</div>
        <div class="d5" id=${book._id}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint neque reprehenderit inventore, ab libero rep <br>
        cupiditate voluptatem ex eum quos incidunt assumenda dolorum maxime quas, quam ea laudantium ad? <br> Quisquam!
        </div>
      </div> `

      }).join('')
    });
  })

  

//   function ajaxGet4(url) {
//     return new Promise(function (resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === xhr.DONE && xhr.status === 200) {
//                 // console.log(xhr.response, xhr.responseXML);
//                 resolve(xhr.response)
//             }
//         };
//         xhr.open('GET', url, true);
//         xhr.setRequestHeader('x-access-token', localStorage.getItem('token'));
//         xhr.setRequestHeader("Content-type", "application/json");

//         xhr.onerror = reject;

//         xhr.send();
//     });
// }
// let filterArry4;
// ajaxGet4(`https://new-bookstore-backend.herokuapp.com/bookstore_user/get_wishlist_items`)
//             .then(function (result) {
    
//                 let Res4 = JSON.parse(result);
//                 // console.log(Res.result);
//                 let bookNum4 = Res4.result
//                 console.log(bookNum4);
//                 console.log(bookNum4.quantityToBuy)
    
//                 filterArry4 = bookNum4.filter(function (book) {
//                     // console.log(book)
//                     if(book.product_id._id == params.id){
                        
//                         addedWish.style.display ="block";
//                          wishlist.style.display ="none";
//                     }
                   

    
//                 })
             
//             })
//             .catch(function (error) {
//                 console.log(error)
//                 // An error occurred
//             });



  addtobag.addEventListener('click', function (event) {
    console.log('abc')
    counterDisplay.innerHTML=1;
    addtobag.style.display = 'none'
    button.style.display = "flex"
    

    let data = {
      product_id: params.id,
      // quantityToBuy: counter
    }
    console.log(data)

    requirejs(['../service/userservice.js'], function (methods) {
      methods.addToBook(data).then(function (response3) {

            console.log(response3)
           
          })

        })

  })



      cartPage.addEventListener('click', function () {
        window.location = "http://localhost:5500/html/cart.html"

      })

      wishlistab.addEventListener('click', function (event) {
        console.log(event.target.id)
        window.location = `http://localhost:5500/html/wishlist.html?id=${event.target.id}`;
        // addedWish.style.display ="flex";
        //                  wishlist1.style.display ="none";
        // window.location = "http://localhost:5500/html/wishlist.html";
  
      })

      if(localStorage.getItem('token')!==null){
        console.log('token exist');
    }else{
      window.location = "http://localhost:5500/html/login.html";
    }

    })
  