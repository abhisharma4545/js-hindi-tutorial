//  here we know about fetch() api ....
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