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

//withdrawal
function withdrawal(){ 
    const enteredAmount = document.getElementById("enteredAmount").value.trim();
    let avalableBal = document.getElementById("avalableBal")
    let Bal = 20000; 

    if(!isNaN(enteredAmount) && enteredAmount <= Bal){
       Bal -= enteredAmount
       avalableBal.value = Bal
        alert("Transactions successful")
    }else{
        alert("insufficient funds")
    }
    }

    //Toggle available balance
    const balance = document.getElementById("balance");
    const show = document.getElementById("show");

    // balance.value = Bal
    show.addEventListener("click",()=>{
        if(balance.style.display =="none"){
             balance.style.display= "block";
        }
         else{
             balance.style.display="none"
         }
        
    })