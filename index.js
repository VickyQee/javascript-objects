 const address = {
    street: "17 simeon Street",
    city: "okota-Lagos",
    zip: 100126,
};

function showAddress(parameter) {
    for (let address in parameter) {
        console.log(address + " : " + parameter[address]);
    }
}

 // Assignment 2
// Factory Function//
function createAddress() {
    return {
    street: "17 Simeon Street",
    city: "okota-Lagos",
    zip: 100126,
    };
}
console.log(address);

// Constructor Function
function CreateAddress() {
    this.street = "17 simeon Street";
    this.city = "okota-Lagos";
    this.zip = 100126;
}
const addressHome = createAddress(address);
console.log(addressHome);


// Assignment 3
let address1 = new CreateAddress();
let address2 = new CreateAddress();

function areEqual(obj1, obj2) {
    if (obj1 === obj2) console.log(true); 
    else console.log(false);
}

function areSame(obj1, obj2) {
    if (obj1 === address1 && obj2 === address2)
    console.log(true); 
    else console.log(false);
}
 // Assignment 5
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

programming.languages.push("Go");

programming.difficulty = 7;

delete programming.jokes;

Object.assign(programming, { isFun: true })

for (let language of programming.languages) {
    console.log(language);
}

for (let programme in programming) {
    console.log(programme);
}

for (let val in programming) {
    console.log(programming[val]);
}