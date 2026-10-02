// ==========================================
// JAVASCRIPT OBJECTS — COMPLETE CHEAT SHEET
// ==========================================


// 1. CREATE AN OBJECT

const user = {
    name: "Vanshaj",
    age: 20,
    branch: "Textile Technology"
};

console.log(user);

// OUTPUT:
// { name: 'Vanshaj', age: 20, branch: 'Textile Technology' }


// ==========================================
// 2. ACCESSING PROPERTIES
// ==========================================

console.log(user.name);
// OUTPUT:
// Vanshaj

console.log(user.age);
// OUTPUT:
// 20

console.log(user["name"]);
// OUTPUT:
// Vanshaj

console.log(user["age"]);
// OUTPUT:
// 20


// ==========================================
// 3. CHANGING PROPERTY
// ==========================================

user.age = 21;

console.log(user.age);

// OUTPUT:
// 21


// ==========================================
// 4. ADDING PROPERTY
// ==========================================

user.city = "Amritsar";

console.log(user);

// OUTPUT:
// {
//   name: 'Vanshaj',
//   age: 21,
//   branch: 'Textile Technology',
//   city: 'Amritsar'
// }


// ==========================================
// 5. DELETING PROPERTY
// ==========================================

delete user.city;

console.log(user);

// OUTPUT:
// {
//   name: 'Vanshaj',
//   age: 21,
//   branch: 'Textile Technology'
// }


// ==========================================
// 6. DIFFERENT DATA TYPES
// ==========================================

const student = {
    name: "Vanshaj",
    age: 20,
    cgpa: 8.03,
    isStudent: true,
    skills: ["C++", "Python", "JavaScript"],
    address: {
        city: "Amritsar",
        state: "Punjab"
    }
};

console.log(student);

// OUTPUT:
// {
//   name: 'Vanshaj',
//   age: 20,
//   cgpa: 8.03,
//   isStudent: true,
//   skills: [ 'C++', 'Python', 'JavaScript' ],
//   address: { city: 'Amritsar', state: 'Punjab' }
// }


// ==========================================
// 7. NESTED OBJECT
// ==========================================

console.log(student.address.city);

// OUTPUT:
// Amritsar

console.log(student.address.state);

// OUTPUT:
// Punjab


// ==========================================
// 8. ARRAY INSIDE OBJECT
// ==========================================

console.log(student.skills);

// OUTPUT:
// [ 'C++', 'Python', 'JavaScript' ]

console.log(student.skills[0]);

// OUTPUT:
// C++


// ==========================================
// 9. OBJECT INSIDE ARRAY
// ==========================================

const users = [
    {
        name: "Vanshaj",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    }
];

console.log(users[0]);

// OUTPUT:
// { name: 'Vanshaj', age: 20 }

console.log(users[0].name);

// OUTPUT:
// Vanshaj

console.log(users[1].name);

// OUTPUT:
// Rahul


// ==========================================
// 10. OBJECT METHOD
// ==========================================

const person = {
    name: "Vanshaj",

    greet() {
        console.log("Hello");
    }
};

person.greet();

// OUTPUT:
// Hello


// ==========================================
// 11. THIS KEYWORD
// ==========================================

const person2 = {
    name: "Vanshaj",

    greet() {
        console.log("Hello " + this.name);
    }
};

person2.greet();

// OUTPUT:
// Hello Vanshaj


// ==========================================
// 12. PROPERTY SHORTHAND
// ==========================================

const name2 = "Vanshaj";
const age = 20;

const user2 = {
    name2,
    age
};

console.log(user2);

// OUTPUT:
// { name: 'Vanshaj', age: 20 }


// ==========================================
// 13. COMPUTED PROPERTY
// ==========================================

const key = "name";

const user3 = {
    [key]: "Vanshaj"
};

console.log(user3);

// OUTPUT:
// { name: 'Vanshaj' }


// ==========================================
// 14. CHECK PROPERTY USING "in"
// ==========================================

const user4 = {
    name: "Vanshaj",
    age: 20
};

console.log("name" in user4);

// OUTPUT:
// true

console.log("email" in user4);

// OUTPUT:
// false


// ==========================================
// 15. OBJECT.hasOwn()
// ==========================================

console.log(Object.hasOwn(user4, "name"));

// OUTPUT:
// true

console.log(Object.hasOwn(user4, "email"));

// OUTPUT:
// false


// ==========================================
// 16. OBJECT.KEYS()
// ==========================================

console.log(Object.keys(user4));

// OUTPUT:
// [ 'name', 'age' ]


// ==========================================
// 17. OBJECT.VALUES()
// ==========================================

console.log(Object.values(user4));

// OUTPUT:
// [ 'Vanshaj', 20 ]


// ==========================================
// 18. OBJECT.ENTRIES()
// ==========================================

console.log(Object.entries(user4));

// OUTPUT:
// [ [ 'name', 'Vanshaj' ], [ 'age', 20 ] ]


// ==========================================
// 19. FOR...IN LOOP
// ==========================================

const user5 = {
    name: "Vanshaj",
    age: 20,
    branch: "Textile"
};

for (const key in user5) {
    console.log(key);
}

// OUTPUT:
// name
// age
// branch


// ==========================================
// 20. FOR...IN — KEY + VALUE
// ==========================================

for (const key in user5) {
    console.log(key, user5[key]);
}

// OUTPUT:
// name Vanshaj
// age 20
// branch Textile


// ==========================================
// 21. OBJECT.ENTRIES() WITH FOR...OF
// ==========================================

for (const [key, value] of Object.entries(user5)) {
    console.log(key, value);
}

// OUTPUT:
// name Vanshaj
// age 20
// branch Textile


// ==========================================
// 22. OBJECT REFERENCE
// ==========================================

const user6 = {
    name: "Vanshaj"
};

const user7 = user6;

user7.name = "Rana";

console.log(user6.name);
console.log(user7.name);

// OUTPUT:
// Rana
// Rana

// WHY?
// user6 and user7 point to the SAME object.


// ==========================================
// 23. COPY OBJECT USING SPREAD
// ==========================================

const user8 = {
    name: "Vanshaj",
    age: 20
};

const user9 = { ...user8 };

user9.name = "Rana";

console.log(user8.name);
console.log(user9.name);

// OUTPUT:
// Vanshaj
// Rana


// ==========================================
// 24. OBJECT.ASSIGN()
// ==========================================

const user10 = {
    name: "Vanshaj",
    age: 20
};

const user11 = Object.assign({}, user10);

console.log(user11);

// OUTPUT:
// { name: 'Vanshaj', age: 20 }


// ==========================================
// 25. MERGING OBJECTS
// ==========================================

const basic = {
    name: "Vanshaj"
};

const details = {
    age: 20,
    branch: "Textile"
};

const merged = {
    ...basic,
    ...details
};

console.log(merged);

// OUTPUT:
// {
//   name: 'Vanshaj',
//   age: 20,
//   branch: 'Textile'
// }


// ==========================================
// 26. DUPLICATE PROPERTY
// ==========================================

const obj1 = {
    name: "Vanshaj"
};

const obj2 = {
    name: "Rana"
};

const merged2 = {
    ...obj1,
    ...obj2
};

console.log(merged2);

// OUTPUT:
// { name: 'Rana' }

// Later value wins.


// ==========================================
// 27. OBJECT DESTRUCTURING
// ==========================================

const user12 = {
    name: "Vanshaj",
    age: 20
};

const { name: userName, age: userAge } = user12;

console.log(userName);
console.log(userAge);

// OUTPUT:
// Vanshaj
// 20


// ==========================================
// 28. DESTRUCTURING WITHOUT RENAMING
// ==========================================

const user13 = {
    name: "Vanshaj",
    age: 20
};

const { name, age: currentAge } = user13;

console.log(name);
console.log(currentAge);

// OUTPUT:
// Vanshaj
// 20


// ==========================================
// 29. DEFAULT VALUE IN DESTRUCTURING
// ==========================================

const user14 = {
    name: "Vanshaj"
};

const { name: n, age: a = 20 } = user14;

console.log(n);
console.log(a);

// OUTPUT:
// Vanshaj
// 20


// ==========================================
// 30. NESTED DESTRUCTURING
// ==========================================

const user15 = {
    name: "Vanshaj",

    address: {
        city: "Amritsar",
        state: "Punjab"
    }
};

const {
    address: { city, state }
} = user15;

console.log(city);
console.log(state);

// OUTPUT:
// Amritsar
// Punjab


// ==========================================
// 31. OPTIONAL CHAINING
// ==========================================

const user16 = {
    name: "Vanshaj"
};

console.log(user16.address?.city);

// OUTPUT:
// undefined

// Without ?. this would cause an error.


// ==========================================
// 32. NULLISH COALESCING
// ==========================================

const user17 = {
    name: "Vanshaj"
};

const userAge2 = user17.age ?? 20;

console.log(userAge2);

// OUTPUT:
// 20


// ==========================================
// 33. JSON.stringify()
// OBJECT → JSON STRING
// ==========================================

const user18 = {
    name: "Vanshaj",
    age: 20
};

const jsonData = JSON.stringify(user18);

console.log(jsonData);

// OUTPUT:
// {"name":"Vanshaj","age":20}

console.log(typeof jsonData);

// OUTPUT:
// string


// ==========================================
// 34. JSON.parse()
// JSON STRING → OBJECT
// ==========================================

const data = '{"name":"Vanshaj","age":20}';

const user19 = JSON.parse(data);

console.log(user19);

// OUTPUT:
// { name: 'Vanshaj', age: 20 }

console.log(user19.name);

// OUTPUT:
// Vanshaj


// ==========================================
// 35. OBJECT.FROMENTRIES()
// ==========================================

const entries = [
    ["name", "Vanshaj"],
    ["age", 20]
];

const user20 = Object.fromEntries(entries);

console.log(user20);

// OUTPUT:
// { name: 'Vanshaj', age: 20 }


// ==========================================
// 36. OBJECT.FREEZE()
// ==========================================

const user21 = {
    name: "Vanshaj"
};

Object.freeze(user21);

user21.name = "Rana";

console.log(user21.name);

// OUTPUT:
// Vanshaj

// Object cannot be modified.


// ==========================================
// 37. OBJECT.SEAL()
// ==========================================

const user22 = {
    name: "Vanshaj"
};

Object.seal(user22);

user22.name = "Rana";

console.log(user22.name);

// OUTPUT:
// Rana

// Existing properties can be changed.

// But adding/removing properties is prevented.


// ==========================================
// 38. OBJECT + ARRAY + NESTED OBJECT
// ==========================================

const studentData = {
    name: "Vanshaj",

    skills: [
        "C++",
        "Python",
        "JavaScript"
    ],

    college: {
        name: "NIT Jalandhar",
        branch: "Textile Technology"
    }
};

console.log(studentData.name);

// OUTPUT:
// Vanshaj

console.log(studentData.skills[2]);

// OUTPUT:
// JavaScript

console.log(studentData.college.name);

// OUTPUT:
// NIT Jalandhar


// ==========================================
// 39. ARRAY OF OBJECTS + MAP
// ==========================================

const students = [
    {
        name: "Vanshaj",
        age: 20
    },
    {
        name: "Rahul",
        age: 21
    },
    {
        name: "Aman",
        age: 19
    }
];

const names = students.map((student) => {
    return student.name;
});

console.log(names);

// OUTPUT:
// [ 'Vanshaj', 'Rahul', 'Aman' ]


// ==========================================
// 40. ARRAY OF OBJECTS + FILTER
// ==========================================

const adults = students.filter((student) => {
    return student.age >= 20;
});

console.log(adults);

// OUTPUT:
// [
//   { name: 'Vanshaj', age: 20 },
//   { name: 'Rahul', age: 21 }
// ]


// ==========================================
// 41. ARRAY OF OBJECTS + FIND
// ==========================================

const foundStudent = students.find((student) => {
    return student.name === "Rahul";
});

console.log(foundStudent);

// OUTPUT:
// { name: 'Rahul', age: 21 }


// ==========================================
// 42. ARRAY OF OBJECTS + FINDINDEX
// ==========================================

const studentIndex = students.findIndex((student) => {
    return student.name === "Rahul";
});

console.log(studentIndex);

// OUTPUT:
// 1


// ==========================================
// 43. OBJECT WITH FUNCTION
// ==========================================

const calculator = {

    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(10, 5));

// OUTPUT:
// 15

console.log(calculator.subtract(10, 5));

// OUTPUT:
// 5

console.log(calculator.multiply(10, 5));

// OUTPUT:
// 50


// ==========================================
// 44. THIS WITH OBJECT
// ==========================================

const account = {

    owner: "Vanshaj",
    balance: 5000,

    showBalance() {
        console.log(this.balance);
    }
};

account.showBalance();

// OUTPUT:
// 5000


// ==========================================
// 45. OBJECT PROPERTY USING VARIABLE
// ==========================================

const property = "age";

const person3 = {
    name: "Vanshaj",
    age: 20
};

console.log(person3[property]);

// OUTPUT:
// 20


// ==========================================
// 46. NESTED OBJECT + OPTIONAL CHAINING
// ==========================================

const profile = {
    name: "Vanshaj",
    address: {
        city: "Amritsar"
    }
};

console.log(profile.address?.city);

// OUTPUT:
// Amritsar

console.log(profile.address?.country);

// OUTPUT:
// undefined


// ==========================================
// 47. OBJECT KEYS LOOP
// ==========================================

const profile2 = {
    name: "Vanshaj",
    age: 20,
    city: "Amritsar"
};

Object.keys(profile2).forEach((key) => {
    console.log(key);
});

// OUTPUT:
// name
// age
// city


// ==========================================
// 48. OBJECT VALUES LOOP
// ==========================================

Object.values(profile2).forEach((value) => {
    console.log(value);
});

// OUTPUT:
// Vanshaj
// 20
// Amritsar


// ==========================================
// 49. OBJECT ENTRIES LOOP
// ==========================================

Object.entries(profile2).forEach(([key, value]) => {
    console.log(key, value);
});

// OUTPUT:
// name Vanshaj
// age 20
// city Amritsar


// ==========================================
// 50. COMPLETE REAL-WORLD EXAMPLE
// ==========================================

const developer = {

    name: "Vanshaj",

    age: 20,

    skills: [
        "JavaScript",
        "C++",
        "Python"
    ],

    education: {
        college: "NIT Jalandhar",
        branch: "Textile Technology"
    },

    introduce() {
        console.log(
            `My name is ${this.name} and I am ${this.age} years old.`
        );
    }
};

developer.introduce();

// OUTPUT:
// My name is Vanshaj and I am 20 years old.

console.log(developer.skills);

// OUTPUT:
// [ 'JavaScript', 'C++', 'Python' ]

console.log(developer.education.college);

// OUTPUT:
// NIT Jalandhar