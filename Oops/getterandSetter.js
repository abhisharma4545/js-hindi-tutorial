class User{
    constructor(email,password){
        this.email =email
        this.password =password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    get password(){
        return `${this._password}hitesh`
    }
    set password(value){
        return this._password = value
    }

}

const hitesh = new User("h@hitesh.ai", "123")
console.log(hitesh.password);

//   HOW TO DEFINE GETTER NAD SETTER THROW PROPERTIES....

// ON NEXT FILE getandset2.js