window.addEventListener('DOMContentLoaded', function(){ 
    const urlSearchParams = new URLSearchParams(window.location.search);
    const userdetails = document.querySelector(".user")
    const list = document.querySelector(".hh7")
    const wishlistab = document.querySelector('.wishlist')

    userdetails.addEventListener('click', function () {
        console.log("user")
        list.style.display = "flex";
  
    })

    wishlistab.addEventListener('click', function () {
        window.location = "http://localhost:5500/html/wishlist.html";
  
      })
})    