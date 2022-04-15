// Question 1:
// Alert the user to choose from the following: 1. Deposit Money 2. Withdraw Money 
// let user=prompt('1. Deposit Money or 2. Withdraw Money ')

// Question 2:
// If the user chooses to Deposit Money, Ask the user “How much would you like to deposit?"
// Alert the user ". Your new balance is: [THE BALANCE]".
// If the user chooses to Withdraw Money, Ask the user "How much would you like to withdraw?"

if (user ==="Deposit Money"){
    alert("How much would you like to deposit?")
    alert("Your new balance is: $100,000,000")
}else{
    alert('How much would you like to withdraw?')


// Alert the user ". Your new balance is: [THE BALANCE]"
// Question 3: 
alert("Your new balance is:100,000,500")

// Create a running total for the Balance each time the user chooses to deposit or withdraw money 

let total=  100
user=prompt('1. Deposit Money or 2. Withdraw Money ')

if (user === "Deposit"){
  let newMoney=prompt( "How much would you like to deposit?");
    total=Number(total)+Number(newMoney)
    alert(`New Balance: $${total}`)
}else{
    let noMoney=prompt("How much would you like to withdraw?")
    total=Number(total)-Number(noMoney)
    alert(`New Balance: $${total}`)
}

if (total >= 0){
    alert('You got monnneeeyy!!')
}else if(total < 100){
    alert('Low Funds')
}else{
    alert('You aint got no Money')
}


// If there is a positive balance,  alert the user with message "You got monnneeeyy!!"
// If there is a negative balance, alert the user with the message "Low Funds