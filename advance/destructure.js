l// ==========================================
// JAVASCRIPT DESTRUCTURING + JSON
// COMPLETE CHEAT SHEET
// ==========================================


// ==========================================
// 1. OBJECT DESTRUCTURING
// ==========================================

const user = {
    name: "Vanshaj",
    age: 20,
    branch: "Textile Technology"
};

const { name, age, branch } = user;

console.log(name);
console.log(age);
console.log(branch);

// OUTPUT:
// Vanshaj
// 20
// Textile Technology



// ==========================================
// 2. OBJECT DESTRUCTURING WITH RENAMING
// ==========================================

const user2 = {
    name: "Vanshaj",
    age: 20
};

const { name: userName, age: userAge } = user2;

console.log(userName);
console.log(userAge);

// OUTPUT:
// Vanshaj
// 20



// ==========================================
// 3. OBJECT DESTRUCTURING WITH DEFAULT VALUE
// ==========================================

const user3 = {
    name: "Vanshaj"
};

const { name: n, age: a = 20 } = user3;

console.log(n);
console.log(a);

// OUTPUT:
// Vanshaj
// 20



// ==========================================
// 4. NESTED OBJECT DESTRUCTURING
// ==========================================

const user4 = {
    name: "Vanshaj",

    address: {
        city: "Amritsar",
        state: "Punjab"
    }
};

const {
    address: { city, state }
} = user4;

console.log(city);
console.log(state);

// OUTPUT:
// Amritsar
// Punjab



// ==========================================
// 5. ARRAY DESTRUCTURING
// ==========================================

const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);

// OUTPUT:
// 10
// 20
// 30



// ==========================================
// 6. SKIPPING ARRAY ELEMENT
// ==========================================

const numbers2 = [10, 20, 30];

const [first2, , third2] = numbers2;

console.log(first2);
console.log(third2);

// OUTPUT:
// 10
// 30



// ==========================================
// 7. ARRAY DESTRUCTURING WITH DEFAULT
// ==========================================

const numbers3 = [10, 20];

const [a1, b1, c1 = 30] = numbers3;

console.log(a1);
console.log(b1);
console.log(c1);

// OUTPUT:
// 10
// 20
// 30



// ==========================================
// 8. REST OPERATOR WITH ARRAY DESTRUCTURING
// ==========================================

const numbers4 = [10, 20, 30, 40];

const [first3, ...remaining] = numbers4;

console.log(first3);
console.log(remaining);

// OUTPUT:
// 10
// [ 20, 30, 40 ]



// ==========================================
// 9. SWAPPING VARIABLES USING DESTRUCTURING
// ==========================================

let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x);
console.log(y);

// OUTPUT:
// 20
// 10



// ==========================================
// 10. JSON DATA
// ==========================================

const jsonData = `{
    "name": "Vanshaj",
    "age": 20,
    "branch": "Textile Technology"
}`;

console.log(jsonData);

// OUTPUT:
// {
//     "name": "Vanshaj",
//     "age": 20,
//     "branch": "Textile Technology"
// }



// ==========================================
// 11. JSON IS A STRING
// ==========================================

console.log(typeof jsonData);

// OUTPUT:
// string



// ==========================================
// 12. JSON.parse()
// JSON STRING → JAVASCRIPT OBJECT
// ==========================================

const user5 = JSON.parse(jsonData);

console.log(user5);

// OUTPUT:
// {
//   name: 'Vanshaj',
//   age: 20,
//   branch: 'Textile Technology'
// }



// ==========================================
// 13. ACCESS PARSED JSON
// ==========================================

console.log(user5.name);
console.log(user5.age);

// OUTPUT:
// Vanshaj
// 20



// ==========================================
// 14. PARSED JSON + DESTRUCTURING
// ==========================================

const {
    name: parsedName,
    age: parsedAge,
    branch: parsedBranch
} = user5;

console.log(parsedName);
console.log(parsedAge);
console.log(parsedBranch);

// OUTPUT:
// Vanshaj
// 20
// Textile Technology



// ==========================================
// 15. JAVASCRIPT OBJECT → JSON
// JSON.stringify()
// ==========================================

const student = {
    name: "Vanshaj",
    age: 20,
    branch: "Textile Technology"
};

const jsonString = JSON.stringify(student);

console.log(jsonString);

// OUTPUT:
// {"name":"Vanshaj","age":20,"branch":"Textile Technology"}



// ==========================================
// 16. CHECK TYPE AFTER STRINGIFY
// ==========================================

console.log(typeof jsonString);

// OUTPUT:
// string



// ==========================================
// 17. JSON.stringify() WITH ARRAY
// ==========================================

const skills = [
    "C++",
    "Python",
    "JavaScript"
];

const skillsJSON = JSON.stringify(skills);

console.log(skillsJSON);

// OUTPUT:
// ["C++","Python","JavaScript"]



// ==========================================
// 18. JSON.parse() WITH ARRAY
// ==========================================

const skillsData = '["C++","Python","JavaScript"]';

const skillsArray = JSON.parse(skillsData);

console.log(skillsArray);
console.log(skillsArray[0]);

// OUTPUT:
// [ 'C++', 'Python', 'JavaScript' ]
// C++



// ==========================================
// 19. JSON WITH ARRAY + OBJECT
// ==========================================

const complexJSON = `{
    "name": "Vanshaj",
    "age": 20,
    "skills": [
        "C++",
        "Python",
        "JavaScript"
    ],
    "address": {
        "city": "Amritsar",
        "state": "Punjab"
    }
}`;

const data = JSON.parse(complexJSON);

console.log(data.name);
console.log(data.skills);
console.log(data.skills[0]);
console.log(data.address.city);

// OUTPUT:
// Vanshaj
// [ 'C++', 'Python', 'JavaScript' ]
// C++
// Amritsar



// ==========================================
// 20. COMPLEX JSON + DESTRUCTURING
// ==========================================

const {
    name: studentName,
    age: studentAge,
    skills: studentSkills,
    address: { city: studentCity }
} = data;

console.log(studentName);
console.log(studentAge);
console.log(studentSkills);
console.log(studentCity);

// OUTPUT:
// Vanshaj
// 20
// [ 'C++', 'Python', 'JavaScript' ]
// Amritsar



// ==========================================
// 21. JSON.stringify() + JSON.parse()
// COMPLETE CONVERSION
// ==========================================

const originalObject = {
    name: "Vanshaj",
    age: 20
};

// OBJECT → JSON STRING
const json = JSON.stringify(originalObject);

console.log(json);

// OUTPUT:
// {"name":"Vanshaj","age":20}


// JSON STRING → OBJECT
const convertedObject = JSON.parse(json);

console.log(convertedObject);

// OUTPUT:
// { name: 'Vanshaj', age: 20 }



// ==========================================
// 22. DESTRUCTURING THE CONVERTED OBJECT
// ==========================================

const {
    name: finalName,
    age: finalAge
} = convertedObject;

console.log(finalName);
console.log(finalAge);

// OUTPUT:
// Vanshaj
// 20



// ==========================================
// 23. ARRAY OF OBJECTS IN JSON
// ==========================================

const usersJSON = `[
    {
        "name": "Vanshaj",
        "age": 20
    },
    {
        "name": "Rahul",
        "age": 21
    }
]`;

const users = JSON.parse(usersJSON);

console.log(users);

// OUTPUT:
// [
//   { name: 'Vanshaj', age: 20 },
//   { name: 'Rahul', age: 21 }
// ]



// ==========================================
// 24. DESTRUCTURING OBJECT FROM ARRAY
// ==========================================

const [userOne, userTwo] = users;

console.log(userOne);
console.log(userTwo);

// OUTPUT:
// { name: 'Vanshaj', age: 20 }
// { name: 'Rahul', age: 21 }



// ==========================================
// 25. DESTRUCTURING PROPERTIES DIRECTLY
// ==========================================

const [{ name: firstUserName }, { name: secondUserName }] = users;

console.log(firstUserName);
console.log(secondUserName);

// OUTPUT:
// Vanshaj
// Rahul



// ==========================================
// 26. FINAL COMPLETE EXAMPLE
// JSON → OBJECT → DESTRUCTURING
// ==========================================

const apiData = `{
    "id": 101,
    "name": "Vanshaj",
    "age": 20,
    "skills": [
        "JavaScript",
        "Python",
        "C++"
    ],
    "college": {
        "name": "NIT Jalandhar",
        "branch": "Textile Technology"
    }
}`;


// STEP 1: JSON STRING → OBJECT
const studentData = JSON.parse(apiData);


// STEP 2: DESTRUCTURE OBJECT
const {
    id,
    name: apiName,
    age: apiAge,
    skills: apiSkills,
    college: {
        name: collegeName,
        branch: collegeBranch
    }
} = studentData;


// STEP 3: USE VALUES
console.log(id);
console.log(apiName);
console.log(apiAge);
console.log(apiSkills);
console.log(collegeName);
console.log(collegeBranch);

// OUTPUT:
// 101
// Vanshaj
// 20
// [ 'JavaScript', 'Python', 'C++' ]
// NIT Jalandhar
// Textile Technology