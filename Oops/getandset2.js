//  using function  and property based 

function User(email, password) {
    this._passwordpassword = password;
    this._email = email;


    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    })

}

const chai = new User("chai@gmail.com","chai")
console.log(chai.email)



//  object b