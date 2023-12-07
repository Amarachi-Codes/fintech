document.addEventListener("DOMContentLoaded",()=>{
    const proceed = document.getElementById("proceed"); 
    const form = document.getElementById("transferform")
 
form.addEventListener("submit",(event) =>{
    event.preventDefault();
    proceed.addEventListener("click", ()=>{
        withdrawal()
    });
});


})

//withdrawal
function withdrawal(){ 
    const enteredAmount = parseFloat(document.getElementById("enteredAmount").value.trim());
    let availableBal = 20000; 

    if(!isNaN(enteredAmount) && enteredAmount <= availableBal){
       availableBal -= enteredAmount
       alert("Transactions successful")
    }else{
        alert("insufficient funds")
    }
    }