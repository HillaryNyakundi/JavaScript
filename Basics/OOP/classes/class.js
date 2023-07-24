// we can create a class with properties and then from there create objects
/* let car1 = {
       name : 'Bugatti',
       color : 'red',
       topSpped : '350km/hr'
} */

 //class Car{
       //instance properties

       // name, color, brand, topSpeed

       //instance methods
       // drive()
       //speedUp()
       //slowDown()
 //} 

class Car {
       constructor(_name, _color,_topSpeed){ // constructor method actuall creates the object
              this.name = _name
              this.color = _color
              this.topSpeed =_topSpeed
       }

       drive(){
              console.log(`I am driving at ${this.topSpeed}`)
       }
}

let car1 = new Car("Ferrari","Red","450km/hr")

let car2 = new Car("Audi R8",'Grey',"500km/hr")
/* 
console.log(car1)
console.log(car2 )*/
car2.drive
