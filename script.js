


const  check = () =>{


let arr = document.querySelectorAll(".form-inp")

for(a of arr){


if(a.value == ""){ 


a.classList.add("skew")

  alert(`${a.previousElementSibling.innerText } ne peut pas etre vide ?`) ; return false

}


    
}
return true

}


let mail = document.getElementById("email")

mail.addEventListener("focusout", myFunction);

function myFunction() {
    
  if( mail.value != "" &&  ! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value) ){

   

mail.style.borderColor = "red"

mail.value = ""

    mail.focus()

    alert('email format not valid')

    return false

  }  


}



let pass = document.getElementById("pass")

pass.addEventListener("focusout", verifPass);


function  verifPass(){

  let pwd =  /\S*(\S*([a-zA-Z]\S*[0-9])|([0-9]\S*[a-zA-Z]))\S*/g
if (pass.value != ""){

    if(pass.value.length <8 )
    {
        pass.style.borderColor = "red" 

        pass.value = ""
        
         pass.focus()

        alert("password must be more than 8  char")

        return false
    }else if(!pwd.test(pass.value) || /[0-9]/.test(pass.value.slice(-1) )  ){


alert("le mot de passe doit contient de num et de char !")


    }

  }

}
