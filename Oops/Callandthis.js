// call and this in javascript

function SetUSername(username){
    this.username = username
}

function createUser(username, email,password){
    email = email
    this.password = password
    // here we use call me example 
    //  call method used to call the explicitly method using (.call) keyword
     SetUSername.call(this,username)

}

//  Note = if a function has inner funtion then it is not call direclty by its name bcz it refer to global ec
//  To call that funtion we have to call(this, val) method and this hold val

const chai = new createUser("chai", "chai@gmail.com", "123");
console.log(chai) 