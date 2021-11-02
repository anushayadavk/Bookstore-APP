window.addEventListener('DOMContentLoaded', function(){ 
    const urlSearchParams = new URLSearchParams(window.location.search);
    const login = document.getElementById("loginn")
    const signup = document.getElementById("signupp")
    const signup2 = document.getElementById("hd")
    const login2 = document.getElementById("dh")
    const bookstore = document.getElementById("l44")
    // const signupfirstname = document.getElementById("ss2")
    //const page = document.getElementById("h33")

    // page.addEventListener('click',function(){
    //     signup2.style.display = 'block';
    //     // login.style.display = 'block';
    //     // ssignup.style.display = 'none';
    // })

    login.addEventListener('click', function(){
        login2.style.display = 'block';
        signup2.style.display = 'none';
        // signup2.style.display = 'none';
    })

    signup.addEventListener('click', function(){
        login2.style.display = 'none';
        signup2.style.display = 'block';
        // signup2.style.display = 'block';
    })

    let regexemail = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    let regexpassword = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    
    const email = document.getElementById('email');
    const Password = document.getElementById('Password');

    const loginbutton = document.getElementById('l44');
    const emailhelper = document.getElementById('mail');
    const passwordhelper = document.getElementById('pass');
    
    let a1;
    let b1;
    
    email.addEventListener('change', function () {
    a1 = email.value;
    console.log(a1)        
     })
     Password.addEventListener('change', function () {
        b1 = Password.value;
        console.log(b1)        
     })


    loginbutton.addEventListener('click', function (e) {
        e.preventDefault();
        let isemailValid  = regexemail.test(a1)
        let ispasswordValid = regexpassword.test(b1)
        
        if(isemailValid == false || a1==undefined) {
            email.style.border = "1px solid red"
            emailhelper.style.display = "inline"
        }
        else if (isemailValid == true) {
            email.style.border = "1px solid green"
            emailhelper.style.display = "none"
        }
        if(ispasswordValid == false || b1==undefined) {
            Password.style.border = "1px solid red"
            passwordhelper.style.display = "inline"
        }
        else if (ispasswordValid == true) {
            Password.style.border = "1px solid green"
            passwordhelper.style.display = "none"
        }
        
        
        let obj1 =
        {
            email: a1,
            password : b1
        }
        console.log(obj1)
        requirejs(['../service/userservice.js'], (methods)=>{
           methods.login(obj1).then(function (response1){
             console.log(response1)
            //  console.log(response1.data.result.accessToken);
             localStorage.setItem('token',response1.data.result.accessToken);
              console.log(response1.data.result.accessToken);
            })
        //     .catch(function(error){
        //         console.log(error)                  
        //   })
   
       });
    

    })

    // bookstore.addEventListener('click', function () {
    //     window.location = "http://localhost:5500/html/Bookstore.html";
  
    //   })

})