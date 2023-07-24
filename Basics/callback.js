//PASS A FUNCTION INFORM OF AN ARGUMENT INSIDE OF ANOTHER FUNCTION
function printName(name, cb, cb2){
       console.log(name)
       cb('create an impact')
       cb2()
}

printName('Hillary', printTagline, printNumber)


function printTagline(Tagline){
       console.log(Tagline)
}


function printNumber(){
       console.log(Math.random())
}

//CALCULATOR

function Calculator(add , sub, div, mul){
       add(2,3)
       sub(5,3)
       div(6,2)
       mul(9,2)
}

function addition(a,b){
       console.log(a+b)
}

function subtraction(a, b){
       console.log(a-b)
}

function multiplication(a, b){
       console.log(a*b)
}

function division(a, b){
       console.log(a/b)
}

Calculator(addition, subtraction, division, multiplication, )