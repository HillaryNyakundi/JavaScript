// Has all the properties of a constructor method(used to create an object with its properties)
function Car(_name,_color,_topSpeed){
       this.name = _name
       this.color = _color
       this.topSpeed = _topSpeed

       this.drive = function(){
              console.log(`I am driving at &{topSpeed}`)
       }
}

let car1 = new Car('Ferrari', 'red', '450km/hr')

cconsole.log(car1)