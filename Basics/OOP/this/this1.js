// Console logging the this keyword

// console.log(this); // we get an empty object


//Accessing the this keyword using a function
/* 
function showValue(){
       console.log(this) //Global object
}

showValue() */

/* //EXECUTING THE THIS KEY WORD FROM INSIDE AN OBJECT
let myObj = {
       name: 'Hillary',

       fn : function(){
              console.log(this.name)
       }
}

myObj.fn() */

//Accessing the this key word using a function inside a function

let myObj2 = {
       name : 'Steve',
       fn1 : function(){
              function fn2(){
                     console.log(this)
              }

              fn2()
       }
}

myObj2.fn1()