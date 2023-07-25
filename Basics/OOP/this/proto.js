let myObj = {}


console.log(myObj)


let person1 = {
       name : 'Hillary',
       age : 22,
}

console.log(person1)

console.log(person1.hasOwnProperty('gender'))


// constructor function
function Person(_name){
       this.name = _name
       this.age = _age
}

let person2 = new Person('Hillary',22)

console.log(person2)