// A FUNCTIO IS A PIECE OF CODE THAT RUNS WHEN YOU CALL IT, CA TAKE INPUT AND GIVE A SPECIFIC OUTPUT ON HOW YOU WANT IT.

function greet(){
       console.log("Hello from Nyakundi")
}

greet() //function call or function invocation



function add(a, b){// a and b are parameters of a function
       console.log(a+b)
}

add(2,3)

//FUNCTION EXPRESSION
let sub = function(c,d){
       console.log(c-d)
}

sub(3,1)

//IEEF (IMMEDIATELY INVOKED FUNCTION EXPRESSION)

let multiply = (function(a,b){
       console.log(a*b)
})(2,3)
