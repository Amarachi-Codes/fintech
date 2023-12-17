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
    const avalableBal = document.getElementById("avalableBal")
    let Bal = 20000; 
    
    if(enteredAmount === ""){
        alert("Enter a valid amount")
    }else if(!isNaN(enteredAmount) && enteredAmount <= Bal){
       Bal -= enteredAmount
       avalableBal.value = Bal

       alert("Transactions successful")

       //clear the entered amount field after transaction is done
       document.getElementById("enteredAmount").value = ""

    }else {
        alert("insufficient funds")
    }
    }

    //Toggle available balance on the index page
    const balance = document.getElementById("balance");
    const show = document.getElementById("show");
    const showBalance = document.querySelector(".showBalance")
    // balance.value = Bal i want to make the balance gotten from the form to show on the home page show balance field
    show.addEventListener("click",()=>{
        if(balance.style.display =="none"){
             balance.style.display= "block";
             showBalance.textContent = 'Hide Balance'
        }
         else{
             balance.style.display="none"
             showBalance.textContent = 'Show Balance'
         }
        
    })

    //trim username on login page
    const username = document.getElementById("user").value.trim();

    //password validation on login page
const password =document.getElementById("userpass");
const checkbox = document.getElementById("hide_show")



// toggle password on login page
checkbox.addEventListener("click",()=>{
    if(password.type == "password"){
        password.type ="text"
    }else{
        password.type="password"
    }
})


// function password(){

// }
