// classes

class User {
    constructor(email, name) {
        // object properties
        this.email = email;
        this.name = name;
    }
    // methods
    login(){
        console.log(this.email, 'just logged in');
    }
    logout(){
        console.log(this.email, 'just logged out');
    }
};

var userOne = new User('june@ninjas.com', 'June');
var userTwo = new User('tony@ninjas.com', 'Tony');

userOne.login();
userTwo.logout();