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

class Admin extends User {
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
};

var userOne = new User('june@ninjas.com', 'June');
var userTwo = new User('tony@ninjas.com', 'Tony');

var admin = new Admin('stark@ninjas.com', 'Stark');

var users = [userOne, userTwo, admin];

admin.deleteUser(userTwo);

console.log(users);