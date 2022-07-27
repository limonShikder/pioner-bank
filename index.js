// login button even hanglar

const Loginbtn = document.getElementById('Login');
Loginbtn.addEventListener('click', function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("Transaction-area");
    transactionArea.style.display = "block";
})

// deposit button even hanglar

const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click', function(){
  const depositNumber = getInputNumber("depositAmount")

//    const currentDeposit = document.getElementById("currentDeposit").innerText;
//    const currentDepositNumber = parseFloat(currentDeposit);
//    const totalDEposit = depositNumber + currentDepositNumber;
   

//    document.getElementById("currentDeposit").innerText = totalDEposit;

//    const currentBalance = document.getElementById('currentBalance').innerText;
//    const currentBalanceNumber = parseFloat(currentBalance);
//    const totalBalance = depositNumber + currentBalanceNumber;
//    document.getElementById("currentBalance").innerText = totalBalance;

updateSpanText("currentDeposit", depositNumber);
updateSpanText("currentBalance", depositNumber);


   document.getElementById("depositAmount").value = '';

})

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}



   // withdraw button handler

   const withdrawBtn = document.getElementById("addWithdraw");
   withdrawBtn.addEventListener('click', function(){
     const withdrawNumber = getInputNumber("withdrawAmount")
     

    updateSpanText("currentWithdraw", withdrawNumber) ;
    updateSpanText("currentBalance", -1 * withdrawNumber);


    document.getElementById("withdrawAmount").value = '';
   })

   function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
   }

   
