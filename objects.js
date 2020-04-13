// user object
var userOne = {
    email: 'june@ninjas.com',
    name: 'June',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.name);