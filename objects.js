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

function Admin(...args){
    User.apply(this, args);
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(u){
    users = users.filter(user => user.email !== u.email);
}

var userOne = new User('june@ninjas.com', 'June');
var userTwo = new User('tony@ninjas.com', 'Tony');

var admin = new Admin('stark@ninjas.com', 'Stark');

var users = [userOne, userTwo, admin];

console.log(users);
