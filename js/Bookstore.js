window.addEventListener('DOMContentLoaded', function () {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const bookDetails = document.getElementById("p22")
  const userdetails = document.querySelector(".user")
  const list = document.querySelector(".hh7")
  const wishlistab = document.querySelector('.wishlist')
  const cartPage = document.querySelector(".h6")
  const searchBar = document.querySelector(".searchBar")

  userdetails.addEventListener('click', function () {
    console.log("user")
    list.style.display = "flex";

  })

  $(document).on('click', '.details', function (event) {
    console.log(event.target.id)


    window.location = `http://localhost:5500/html/addbook.html?id=${event.target.id}`
  })

  wishlistab.addEventListener('click', function () {
    window.location = "http://localhost:5500/html/wishlist.html";

  })

  cartPage.addEventListener('click', function () {
    window.location = "http://localhost:5500/html/cart.html"

  })

  searchBar.addEventListener('change', function () {
    let enter = searchBar.value;
    console.log(enter);
    requirejs(['../service/userservice.js'], (methods) => {
      methods.getBooks().then(function (Response2) {
        console.log(Response2)
        //localStorage.setItem('token',getResponse.data.result)

        array = Response2.data.result;
        console.log(Response2)
        console.log(array)

        let searchArry = array.filter(function (search) {
          return search.bookName.match(enter);
        })

        bookDetails.innerHTML = searchArry.map(function (book) {
          return `<div class="details" id=${book._id}>
           <div class="img11" id=${book._id}><div class="imgbook" id=${book._id}></div></div>
           <div class="n0">
           <div class="n1" id=${book._id} >${book.bookName}</div>
           <div class="ab1" id=${book._id}>${book.author}</div>
           <div class="ab22" id=${book._id}>
           <div class="point" id=${book._id}>4.5*</div>
           <div class="r1" id=${book._id}>(20)</div>
           </div>
           <div class="price1" id=${book._id}>Rs. ${book.price}</div>
           </div>
           </div>`;
        }).join('')
      })
    });
  })








  let array = [];
  // console.log(array)

  requirejs(['../service/userservice.js'], (methods) => {
    methods.getBooks().then(function (Response2) {
      console.log(Response2)
      //localStorage.setItem('token',getResponse.data.result)
      let array = Response2.data.result;
      // array = Response2.data.result;
      console.log(Response2)
      console.log(array)
      


      // bookDetails.innerHTML = array.map(function (book) {
      //   return `<div class="details" id=${book._id}>
      //        <div class="img11" id=${book._id}><div class="imgbook" id=${book._id}></div></div>
      //        <div class="n0">
      //        <div class="n1" id=${book._id} >${book.bookName}</div>
      //        <div class="ab1" id=${book._id}>${book.author}</div>
      //        <div class="ab22" id=${book._id}>
      //        <div class="point" id=${book._id}>4.5*</div>
      //        <div class="r1" id=${book._id}>(20)</div>
      //        </div>
      //        <div class="price1" id=${book._id}>Rs. ${book.price}</div>
      //        </div>
      //        </div>`;
      // }).join('')
      var state = {
        'querySet': array,
  
        'page': 1,
        'booksQ': 8,
        'window': 2,
      }
  
      console.log(state.querySet);
      buildTable()

    function pagination(querySet, page, booksQ) {

      var trimStart = (page - 1) * booksQ
      var trimEnd = trimStart + booksQ

      var trimmedData = querySet.slice(trimStart, trimEnd)

      var pages = Math.round(querySet.length / booksQ);

      return {
        'querySet': trimmedData,
        'pages': pages,
      }
    }

    function pageButtons(pages) {
      var wrapper = document.getElementById('pagination-wrapper')

      wrapper.innerHTML = ``
      console.log('Pages:', pages)

      var maxLeft = (state.page - Math.floor(state.window / 2))
      var maxRight = (state.page + Math.floor(state.window / 2))

      if (maxLeft < 1) {
        maxLeft = 1
        maxRight = state.window
      }

      if (maxRight > pages) {
        maxLeft = pages - (state.window - 1)

        if (maxLeft < 1) {
          maxLeft = 1
        }
        maxRight = pages
      }



      for (var page = maxLeft; page <= maxRight; page++) {
        wrapper.innerHTML += `<button value=${page} class="page btn btn-sm btn-info">${page}</button>`
      }

      if (state.page = 1) {
        wrapper.innerHTML = `<button value=${1} class="page btn btn-sm btn-info">&#171; </button>` + wrapper.innerHTML
      }

      if (state.page != pages) {
        wrapper.innerHTML += `<button value=${pages} class="page btn btn-sm btn-info"> &#187;</button>`
      }

      $('.page').on('click', function () {
        $('#p22').empty()

        state.page = Number($(this).val())

        buildTable()
      })

    }


    function buildTable() {
      var table = $('#p22')   
      // `.details`

      var data = pagination(state.querySet, state.page, state.booksQ)
      console.log("Data", data)
      var myList = data.querySet
      console.log(myList)
      // for (var i = 1 in myList) {
      //   //Keep in mind we are using "Template Litterals to create booksQ"
      //   var row = `<div>
      //   <div>${myList[i].bookImage}</div>
      //   <div>${myList[i].bookName}</div>
      //   <div>${myList[i].author}</div>
      //   <div>${myList[i].price}</div>
      //   </div>
      //   `
      //   console.log(row)            
      //   table.append(row)
      // }

      bookDetails.innerHTML = myList.map(function (book) {
        return `<div class="details" id=${book._id}>
             <div class="img11" id=${book._id}><div class="imgbook" id=${book._id}></div></div>
             <div class="n0">
             <div class="n1" id=${book._id} >${book.bookName}</div>
             <div class="ab1" id=${book._id}>${book.author}</div>
             <div class="ab22" id=${book._id}>
             <div class="point" id=${book._id}>4.5*</div>
             <div class="r1" id=${book._id}>(20)</div>
             </div>
             <div class="price1" id=${book._id}>Rs. ${book.price}</div>
             </div>
             </div>`;
      }).join('')

      pageButtons(data.pages)
    }

  });
    })
    

})