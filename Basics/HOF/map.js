//Map will loop through every element of your array and will perform specific operations that you have provided

//Map method will always return you a new array


let arr = [1,2,3,4,5]


let squaredArr = arr.map(function(num){
       return num*num
})

console.log(squaredArr)

const transactions = [1000, 3000, 4000, -898, 3800, -4500];
const intoDollar = 80

let transactionsIntoDollar = transactions.map(function(amount){
       return amount/80
})

console.log(transactionsIntoDollar)