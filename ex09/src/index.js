// Lodash
const _ = require('lodash');

// Only change code below this line 
const users = [
    {
        id:1,
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        id:2,
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        id:3,
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        id:4,
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];
// users nested array with four objects ends here 
// getUser function - list of users starts here 
function getUser() {
    var output = "";
    for (let i = 0; i < users.length; i++) {
        output += (`${users[i].id} - ${users[i].firstName} is ${users[i].age}, ${users[i].gender} \n \n`);
    }
    return output;
}


// getUser function - list of users ends here 

// findUser(id) function starts here 
function findUserById(id) {
    try {
    
      
    } catch (error) {
        return "Cannot read property 'id'"
        console.log();
    }}


// findUserByID(id) function ends here 
// Only change code above this line 
getUsers();
findUserById();

module.exports = findUserById;
