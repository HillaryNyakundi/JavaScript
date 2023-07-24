//filter returns a new array, it will return all those elements that matches the specific condition
//if the condition is true it will return the element for that condition and if it is false it will not retun that element


let numbers = [2, 5,7,8,10,4,43,56]

let evenArray = numbers.filter(function(num){
       return num%2===0
})

console.log(evenArray)