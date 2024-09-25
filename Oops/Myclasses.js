//  we use all js after ES6

// class constructor and static

//  class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptPassword(){
//         return  `${this.password}abc`
//     }
//  }


//  const chai = new User("chai","chai@gmail.com","122")

//  console.log(chai.encryptPassword());

//  behind the scene
  function User(username ,email, password){
      this.username = username;
      this.email = email;
      this.password = password;
  }

  User.prototype.encryptPassword = function(){
    return `${this.password}abc`
  }
  User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`

  }

  const tea = new User("tea", "tea@gmail.com","123")
  console.log(tea.encryptPassword());
  console.log(tea.changeUsername);