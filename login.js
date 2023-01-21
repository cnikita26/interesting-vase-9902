let PwshowHide = document.querySelectorAll('.showHidePw')
let pwfileds = document.querySelectorAll('.password')

// hide password & change icon
PwshowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwfileds.forEach(pwfiled =>{
            if(pwfiled.type==="password"){
                pwfiled.type="text"

                PwshowHide.forEach(Icon =>{
                    Icon.classList.replace("uil-eye-slash","uil-eye")
                })
            }else{
                pwfiled.type="password"

                PwshowHide.forEach(Icon =>{
                    Icon.classList.replace("uil-eye","uil-eye-slash")
                })
            }
        })
    })
})

// signup 

let userDetails=JSON.parse(localStorage.getItem("userdata"))||[]
let myform = document.querySelector("#signup_frm")
// let name = document.getElementById("name")
// let lastname = document.getElementById("lname")
// let email = document.getElementById("email")
// let password = document.getElementById("pass")
// let con_email = document.getElementById("c-email")
// let con_pass = document.getElementById("c-pass")
// let birthday_mnt = document.getElementById("month")
myform.addEventListener("submit",function(e){
    e.preventDefault()
    let formdata = {
        name: myform.name.value,
        lastname:myform.lname.value,
        email:myform.email.value,
        password:myform.pass.value,
        con_email:myform.c-email.value,
        con_pass:myform.c-pass.value,
        birthday_mnt:myform.month.value

    }
    if(formdata.name == ""|| formdata.lastname == ""|| formdata.email == "" || formdata.password == ""|| formdata.con_email == ""|| formdata.con_pass == ""){
        alert("Please Fill Given Details!" , " " , "error")
    }
    else{
        userDetails.push(formdata)
        localStorage.setItem("userdata",JSON.stringify(userDetails))
        alert("Signup Succssesfull","Welcome to Catherin.com","success")

        setTimeout(()=>{
            window.location.href="index.html"
        },2000)
    }
})

// login 
let userdata = JSON.parse(localStorage.getItem("userdata"))||[]
let form = document.querySelector("#login_frm")
form.addEventListener("submit",function(e){
    e.preventDefault()
    // let email = document.getElementById("eemail")
    // let password = document.getElementById("epass")

    let inputdata = {
        eemail : form.eemail.value,
        epassword : form.epass.value
    }
    userdata.forEach((element) => {
        
         if(element.email == inputdata.eemail && element.password == inputdata.epassword ){
            alert("Login Succssesfull", "", "success");
            setTimeout(()=>{
                window.location.href="index.html"
            },2000)
            
        
        }
        // else if(element.email == "admin@gmail.com" && element.password == "admin"){
        //     alert("Login Succssesfull", "", "success");
        //     setTimeout(()=>{
        //         window.location.href="index.html"
        //     },2000)
        // }
        
        else{
            
            alert("Something Went Wrong! Please Fill Correct Details", "error")
        }

    });
})