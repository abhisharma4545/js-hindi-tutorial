//  Staic keyword

class User{
    constructor(username){
        this .username = username;
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
      static createdId(){
        return `123`
     }
}

const hitesh = new User("hitesh")
//  static function are not directly access by object name
// console.log(hitesh.creatId())

class Teacher extends User {
    constructor(username, ewmail){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone" , "i@phone.com",)