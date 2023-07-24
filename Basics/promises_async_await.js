//HOW TO PRODUCE A PROMISE

let myPromise = new Promise(function(resolve, reject){
       const a = 8
       const b = 9

       setTimeout(()=>{
              if(a===b){
                     resolve('The values are equal')
              }else{
                     reject('The values are not equal')
              }
       },2000)
})

//PENDING STATE

// console.log(myPromise)

//FULFILLED STATE
//CONSUMING YOUR PROMISES
myPromise.then((result)=>{ //USE THE THEN METHOD TO RESOLVE A PROMISE
       console.log(result)
})

//REJECTED STATE
myPromise.catch((failedResult)=>{
       console.log(failedResult)
})

//YOUR PROMISE WILL GET SETTLED AT LAST