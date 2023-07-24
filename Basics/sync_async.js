const fs = require('fs')

console.log('before')



/* let data = fs.readFileSync('./basics/f1.txt')

console.log('The data from file 1 ->' + data)

let data2 = fs.readFileSync('./basics/f2.txt')

console.log('file 2 data is ->' + data2) */

fs.readFile('./basics/f1.txt', cb1)

function cb1(error, data){
       if(error){
              console.log(error)
       }else{
       console.log('Data of file 1 ->' + data)
       }
}

fs.readFile('./basics/f2.txt', cb2)

function cb2(error, data){
       if(error){
              console.log(error)
       }else{
              console.log('Data of file 2 ->' + data)
       }
}

console.log('After')