//OBJECTS ARE A COLLECTION OF DATA THAT CONTAINS THE KEY VALUE PAIR

let person = {
       name: 'Hillary',
       age: 22,
}

//using the dot notation to access the property of the an object

console.log(person.name)

//Bracket notation

console.log(person['age'])


let captainAmerica = {
       firstname : "Steve",
       secondname : "Rogers",

       isAvenger : true,
       friends : ['Thor', 'Tony Stark','hulk'],

       age : 10,

       address : {
              state: "New York",
              city: "Brooklyn"
       }
}

console.log(captainAmerica.friends[1])

captainAmerica.movies = ['Age of Ultron','civil war','Endgame']

console.log(captainAmerica)

captainAmerica.isAvenger = false

delete captainAmerica.age

