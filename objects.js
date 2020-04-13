// classes

class User {
    constructor(email, name) {
        // object properties
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    // methods
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'Score is now, ', this.score);
        return this;
    }
};

var userOne = new User('june@ninjas.com', 'June');
var userTwo = new User('tony@ninjas.com', 'Tony');

userOne.login();
userTwo.logout();

userOne.updateScore().updateScore().logout();