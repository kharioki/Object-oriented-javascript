// construcors (under the hood)
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}

var userOne = new User('june@ninjas.com', 'June');
var userTwo = new User('tony@ninjas.com', 'Tony');

console.log(userOne);
userTwo.login();