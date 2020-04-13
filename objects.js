// classes

class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
};

var userOne = new User('june@ninjas.com', 'June');
var userTwo = new User('tony@ninjas.com', 'Tony');

console.log(userOne);
console.log(userTwo);