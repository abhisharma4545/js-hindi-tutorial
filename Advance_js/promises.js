// first method to complete the promises or create the promises

 const promiseOne = new Promise(function(resolve, reject){
    // do an async task 
    //  it uses in  multiple ways 1. DB calls 2. Cryptography 3. network calls
    setTimeout(function(){
        console.log("Asyn task is complete");
        // to connect the (then) we use (resolve function)
        resolve();
    },1000)

})
promiseOne.then(function(){
    console.log("Promises consume")
})

// second method to create or use the promises 

 new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    },1000);
}).then(function(){
    console.log("Async 2 resolve")
})


// //  we make three promise

const PromiseThree = new  Promise(function(resolve,reject){
     setTimeout( function(){
        resolve({username : "chai" , email : "chai@example.com"})

     },1000)
})

PromiseThree.then(function(user){
    console.log(user)
})


// promises no. 4
const PromiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "hitehs" , password :"1234" })
         }else{
            reject("ERROR : something went wrong ")
        }
            },1000)
    })

//  here we use then if resolve and cathc if got error
//  we use then chaining to resolve the problem 
//  in this one then output is input for other then......
  PromiseFour
  .then(function(user){
    console.log(user);
    return user.username
 })
 .then(function(username){
    console.log(username)
 })
 .catch(function(error){
    console.log(error);
 }).finally(function(){
    console.log("the promise is either resolve and rejected")
 })


//  in this finally always execute

//  Promises no. 5

const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "javascript" , password :"1234" })
         }else{
            reject('ERROR : js went wrong ')
        }
            },1000)
})

// Seond way to handle Promises inplce of then() and  catch()
// using async and await


// async function ConsumePromiseFive() {
//     // here comes resolve or rejected value inside PromidesFive which is store in (response variable)..
    
//     const response = await PromiseFive
//     console.log(response);
    
// }
// ConsumePromiseFive()

//  here we use catch with its parameter....)catch(error)

async function ConsumePromiseFive() {
    try{
        const response = await PromiseFive
        console.log(response);
    }
    catch (error){
        console.log(error);

 }
    }
    ConsumePromiseFive();

    //  here we use fetch() to get the data from any location using ulr.

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // to convert in json format we appened .json()
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:" , error);
        
    }
    
}
getAllUsers();

//  we use another method in place of async nad await

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
  return response.json();
}).then(function(response){
    console.log(response)
}).catch(function(error){
    console.log(error);
})

