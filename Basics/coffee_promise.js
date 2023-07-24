function placeOrder(drink){
       return new Promise(function(resolve, reject){
              if(drink ==='coffee'){
                     resolve('Order for coffee received')
              }else{
                     reject('Other orders rejected')
              }
       })
}

function processOrder(order){
       return new Promise (function(resolve){
              console.log('Order is being processed')
              resolve(`${order} and is served`)
       })
}

/* placeOrder('coffee').then(function(orderPlaced){
       console.log(orderPlaced)
       let orderIsProcessed = processOrder(orderPlaced)
       return orderIsProcessed
}).then(function(processedOrder){
       console.log(processedOrder)
})
 */
//CHAINING OF PROMISE


//ASYNC AWAIT WORKS AS PROMISES BUT IT REDUCES THE CHAINING
//Async Await are key words

async function serveOrder(){

       try { 
       let orderPlaced = await placeOrder('coffee')
       console.log(orderPlaced)
       let processedOrder = await processOrder(orderPlaced)
       console.log(processedOrder)

       } catch (error) {
              console.log(error)
       }
}

serveOrder()