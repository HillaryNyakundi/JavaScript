class Person{
       constructor(_name, _age, _gender){
              this.name = _name
              this.age = _age
              this.gender = _gender
       }
}

class Student extends Person{
       constructor(_name, _age, _gender,_marks){
              super(_name, _age, _gender) // super method gets the properties fro the parent class
              this.marks = _marks
       }
}

class Teacher{
       constructor(_strength){
              studentStrength = _strength
       }
}


let Student1 = new Student('Hillary', 22, "M", 70)

console.log(Student1)