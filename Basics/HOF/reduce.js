//REDUCES ALL THE ELEMENTS IN AN ARRAY INTO A SINGLE VALUE

let arr = [1, 2, 3, 4, 5, 6]



let addition = arr.reduce(function(acc, value){
       let updatedSum = acc + value
       return updatedSum
},0)


let multiplication = arr.reduce(function(acc, value){
       let updatedProduct = acc * value
       return updatedProduct
},1)

console.log(addition)
console.log(multiplication)
