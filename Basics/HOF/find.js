//FIND RETURNS THE FIRST ELEMENT OF AN ARRAY THAT SATISFY THE CONDITION

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];


let firstWithdrawal = transactions.find(function(amount){
       return amount < 0
})

console.log(firstWithdrawal)