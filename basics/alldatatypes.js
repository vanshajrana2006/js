
// 1. STRING


const name = "Vanshaj";

console.log(name);
console.log(typeof name); // string


// 2. NUMBER


const age = 20;
const price = 99.99;

console.log(age);
console.log(typeof age); // number

console.log(price);
console.log(typeof price); // number


// 3. BOOLEAN


const isLoggedIn = true;
const isAdmin = false;

console.log(isLoggedIn);
console.log(typeof isLoggedIn); // boolean



// 4. NULL


const outsideTemp = null;

console.log(outsideTemp);
console.log(typeof outsideTemp); // object



// 5. UNDEFINED


let email;

console.log(email);
console.log(typeof email); // undefined


// 6. SYMBOL


const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id);
console.log(anotherId);

console.log(id === anotherId); // false

console.log(typeof id); // symbol



// 7. BIGINT


const bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);





// 8. OBJECT


const student = {
    name: "Vanshaj",
    age: 20,
    branch: "Textile"
};

console.log(student);
console.log(typeof student); // object



// 9. ARRAY

const subjects = ["JavaScript", "DSA", "Python"];

console.log(subjects);
console.log(typeof subjects); 




function greet() {
    console.log("Hello!");
}

greet();

console.log(typeof greet); // function