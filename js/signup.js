window.addEventListener('DOMContentLoaded', function() {
    

    let regexfirstname = RegExp('^[A-Z]{1}[a-z]{2,}$');
    let regexemail = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    let regexpassword = RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
    let regexmobile = RegExp('^[6-9]{1}[0-9]{9,}$'); 

    const first_name = document.getElementById('first_name');
    const email = document.getElementById('email1');
    const Password = document.getElementById('Password1');
    const mobile = document.getElementById('icon_telephone');

    const button = document.getElementById('ss7');
    const helper = document.querySelector('.helper-text');
    const emailhelper = document.getElementById('mail1');
    const passwordhelper = document.getElementById('pass1');
    const mobilehelper = document.getElementById('mobile1');
    let a ;
    let c;
    let d;
    let f;
    
    first_name.addEventListener('change', function () {
         a = first_name.value;
        console.log(a)        
    })
    email.addEventListener('change', function () {
    c = email.value;
    console.log(c)        
     })
     Password.addEventListener('change', function () {
        d = Password.value;
        console.log(d)        
     })
     mobile.addEventListener('change', function () {
        f = mobile.value;
        console.log(f)        
     })


    button.addEventListener('click', function (e) {
        e.preventDefault();
        let isfirstValid = regexfirstname.test(a)
        let isemailValid  = regexemail.test(c)
        let ispasswordValid = regexpassword.test(d)
        let ismobileValid = regexmobile.test(f)
       console.log(a);
        if(isfirstValid == false || a==undefined) {
            first_name.style.border = "1px solid red"
            helper.style.display = "inline"
        }
        else if (isfirstValid == true) {
            first_name.style.border = "1px solid green"
            helper.style.display = "none"
        }
        if(isemailValid == false || c==undefined) {
            email.style.border = "1px solid red"
            emailhelper.style.display = "inline"
        }
        else if (isemailValid == true) {
            email.style.border = "1px solid green"
            emailhelper.style.display = "none"
        }
        if(ispasswordValid == false || d==undefined) {
            Password.style.border = "1px solid red"
            passwordhelper.style.display = "inline"
        }
        else if (ispasswordValid == true) {
            Password.style.border = "1px solid green"
            passwordhelper.style.display = "none"
        }
        if(ismobileValid == false || f==undefined) {
            mobile.style.border = "1px solid red"
            mobilehelper.style.display = "inline"
        }
        else if (ismobileValid == true) {
            mobile.style.border = "1px solid green"
            mobilehelper.style.display = "none"
        }

        
        
        let obj =
        {
            fullName: a,
            email: c,
            password: d,
            phone: f
        }
        console.log(obj)
        requirejs(['../service/userservice.js'], (methods)=>{
           methods.signup(obj).then(function (response){
             console.log(response)
            //  console.log(response.data.result.id)
             localStorage.setItem('token',response.data.result.accessToken)
            })
        //     .catch(function(error){
        //         console.log(error)
        //   })
   
       });

    

    })

    

})