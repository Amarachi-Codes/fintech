document.addEventListener("DOMContentLoaded",()=>{
    const proceed = document.getElementById("proceed"); 
    const form = document.getElementById("transferform")
 
form.addEventListener("submit",(event) =>{
    event.preventDefault();
    withdrawal();
});
proceed.addEventListener("click", ()=>{
    withdrawal();
});

})

//withdrawal on transferform page
function withdrawal(){ 
    const enteredAmount = document.getElementById("enteredAmount").value.trim();
    let avalableBal = document.getElementById("avalableBal")
    let Bal = 20000; 

    if(!isNaN(enteredAmount) && enteredAmount <= Bal){
       Bal -= enteredAmount
       avalableBal.value = Bal
    //    enteredAmount= "" i want to clear the entered amount value from showing after the form submits
        alert("Transactions successful")
    }else{
        alert("insufficient funds")
    }
    }

    //Toggle available balance on the index page
    const balance = document.getElementById("balance");
    const show = document.getElementById("show");

    // balance.value = Bal i want to make the balance gotten from the form to show on the home page show balance field
    show.addEventListener("click",()=>{
        if(balance.style.display =="none"){
             balance.style.display= "block";
        }
         else{
             balance.style.display="none"
         }
        
    })

    //trim username on login page
    const username = document.getElementById("user").value.trim();

    //password validation on login page
const password =document.getElementById("userpass");
const checkbox = document.getElementById("hide_show")
// function password(){

// }

// toggle password on login page
checkbox.addEventListener("click",()=>{
    if(password.type == "password"){
        password.type ="text"
    }else{
        password.type="password"
    }
})

