// construcors (under the hood)
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }
}

var userOne = new User('june@ninjas.com', 'June');
var userTwo = new User('tony@ninjas.com', 'Tony');

console.log(userOne);
userTwo.login();