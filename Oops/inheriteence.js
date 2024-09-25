//  inheritence


class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        this.email = email;
        // here directly super class constructor call by super()
          super(username)
          this.password = password;
    }
    AddCourse(){
         console.log(`A new Course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@gmail.com","123")

chai.AddCourse()
const masalaChai = new User("masalaChai")

masalaChai.AddCourse()