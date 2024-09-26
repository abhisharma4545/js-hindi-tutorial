//  object based getter and setter \
// In javascript programming languages, an underscore (_) in front of a variable name indicates that it's private

const User ={
    _email : "chai@gmail.com",
    _password : "xyz",

    get email(){
     return this._email.toUpperCase()
    },

    set email(value){
        this._email = value

    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }


    
}

const tea = Object.create(User)
console.log(tea.User)