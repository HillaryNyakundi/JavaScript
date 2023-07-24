let numArr = [1,2,3,4,5,6]

//write the function that will take this array as an argument and will return the square of each element

/* function square(array){
       for(let i = 0; i<array.length; i++){
              console.log(array[i]*array[i])
       }
}
square(numArr) */

//HIGHER ORDER FUNCTIONS ARE FUNCTIONS THAT OPERATES ON ANOTHER FUNCTION

//forEach

numArr.forEach(function(num){ //FOREACH OPERATES ON THE CALL BACK FUNCTION,THE ELEMENTS ARE PASSED TO THE FUNCTION ARGUMENT NUM
       console.log(num*num)

})
