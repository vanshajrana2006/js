
// 1. CREATE ARRAY
const arr = [10, 20, 30, 40];

console.log(arr);


// 2. ACCESS ELEMENTS
console.log(arr[0]);                 // 10
console.log(arr[1]);                 // 20
console.log(arr[arr.length - 1]);    // 40
console.log(arr.at(-1));             // 40


// 3. LENGTH
console.log(arr.length);             // 4


// 4. CHANGE ELEMENT
arr[0] = 100;
console.log(arr);                    // [100, 20, 30, 40]


// 5. PUSH — ADD AT END
arr.push(50);
console.log(arr);


// 6. POP — REMOVE FROM END
const removedEnd = arr.pop();
console.log(removedEnd);
console.log(arr);


// 7. UNSHIFT — ADD AT BEGINNING
arr.unshift(5);
console.log(arr);


// 8. SHIFT — REMOVE FROM BEGINNING
const removedStart = arr.shift();
console.log(removedStart);
console.log(arr);


// 9. SPLICE — REMOVE
const numbers1 = [10, 20, 30, 40, 50];

numbers1.splice(1, 2);
console.log(numbers1);              // [10, 40, 50]


// 10. SPLICE — ADD
const numbers2 = [10, 20, 40];

numbers2.splice(2, 0, 30);
console.log(numbers2);              // [10, 20, 30, 40]


// 11. SPLICE — REPLACE
const numbers3 = [10, 20, 30];

numbers3.splice(1, 1, 200);
console.log(numbers3);              // [10, 200, 30]


// 12. SLICE — COPY PART OF ARRAY
const numbers4 = [10, 20, 30, 40, 50];

const part = numbers4.slice(1, 4);

console.log(part);                  // [20, 30, 40]
console.log(numbers4);              // original unchanged


// 13. INCLUDES
console.log(numbers4.includes(30)); // true
console.log(numbers4.includes(100)); // false


// 14. INDEXOF
console.log(numbers4.indexOf(30));  // 2
console.log(numbers4.indexOf(100)); // -1


// 15. LASTINDEXOF
const numbers5 = [10, 20, 30, 20];

console.log(numbers5.lastIndexOf(20)); // 3


// 16. JOIN
const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills.join());
console.log(skills.join(" "));
console.log(skills.join(" - "));


// 17. REVERSE
const numbers6 = [1, 2, 3, 4];

numbers6.reverse();

console.log(numbers6);              // [4, 3, 2, 1]


// 18. SORT — STRINGS
const fruits = ["banana", "apple", "mango"];

fruits.sort();

console.log(fruits);


// 19. SORT — NUMBERS ASCENDING
const numbers7 = [10, 5, 20, 2];

numbers7.sort((a, b) => a - b);

console.log(numbers7);              // [2, 5, 10, 20]


// 20. SORT — NUMBERS DESCENDING
numbers7.sort((a, b) => b - a);

console.log(numbers7);              // [20, 10, 5, 2]


// 21. FOR LOOP
const numbers8 = [10, 20, 30];

for (let i = 0; i < numbers8.length; i++) {
    console.log(numbers8[i]);
}


// 22. FOR...OF
for (const value of numbers8) {
    console.log(value);
}


// 23. FOREACH
numbers8.forEach((value, index) => {
    console.log(index, value);
});


// 24. MAP — TRANSFORM
const numbers9 = [1, 2, 3, 4];

const doubled = numbers9.map((num) => {
    return num * 2;
});

console.log(doubled);               // [2, 4, 6, 8]


// 25. FILTER
const numbers10 = [1, 2, 3, 4, 5, 6];

const even = numbers10.filter((num) => {
    return num % 2 === 0;
});

console.log(even);                  // [2, 4, 6]


// 26. REDUCE — SUM
const numbers11 = [10, 20, 30, 40];

const sum = numbers11.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum);                   // 100


// 27. REDUCE — PRODUCT
const numbers12 = [2, 3, 4];

const product = numbers12.reduce((total, num) => {
    return total * num;
}, 1);

console.log(product);               // 24


// 28. FIND
const numbers13 = [10, 20, 30, 40];

const found = numbers13.find((num) => {
    return num > 25;
});

console.log(found);                 // 30


// 29. FINDINDEX
const foundIndex = numbers13.findIndex((num) => {
    return num > 25;
});

console.log(foundIndex);             // 2


// 30. SOME
const numbers14 = [1, 3, 5, 8];

console.log(
    numbers14.some((num) => num % 2 === 0)
);                                  // true


// 31. EVERY
const numbers15 = [2, 4, 6, 8];

console.log(
    numbers15.every((num) => num % 2 === 0)
);                                  // true


// 32. CONCAT
const a = [1, 2];
const b = [3, 4];

const combined = a.concat(b);

console.log(combined);              // [1, 2, 3, 4]


// 33. SPREAD OPERATOR
const c = [...a, ...b];

console.log(c);                     // [1, 2, 3, 4]


// 34. COPY ARRAY
const original = [1, 2, 3];

const copy = [...original];

console.log(copy);


// 35. DESTRUCTURING
const values = [10, 20, 30];

const [x, y, z] = values;

console.log(x);                     // 10
console.log(y);                     // 20
console.log(z);                     // 30


// 36. SKIP ELEMENT DURING DESTRUCTURING
const values2 = [10, 20, 30];

const [first, , third] = values2;

console.log(first);                 // 10
console.log(third);                 // 30


// 37. REST WITH ARRAY
const values3 = [10, 20, 30, 40];

const [firstValue, ...remaining] = values3;

console.log(firstValue);            // 10
console.log(remaining);             // [20, 30, 40]


// 38. ARRAY.ISARRAY
const testArray = [1, 2, 3];

console.log(Array.isArray(testArray)); // true
console.log(typeof testArray);         // object


// 39. ARRAY.FROM
const word = "Vanshaj";

const letters = Array.from(word);

console.log(letters);


// 40. ARRAY.OF
const newArray = Array.of(10, 20, 30);

console.log(newArray);


// 41. FLAT
const nested = [1, 2, [3, 4], [5, 6]];

console.log(nested.flat());


// 42. FLAT — DEEP ARRAY
const deepArray = [1, [2, [3, [4]]]];

console.log(deepArray.flat(Infinity));


// 43. FLATMAP
const numbers16 = [1, 2, 3];

const result = numbers16.flatMap((num) => {
    return [num, num * 2];
});

console.log(result);


// 44. FILL
const numbers17 = [1, 2, 3, 4, 5];

numbers17.fill(0);

console.log(numbers17);             // [0, 0, 0, 0, 0]


// 45. FILL WITH RANGE
const numbers18 = [1, 2, 3, 4, 5];

numbers18.fill(0, 1, 4);

console.log(numbers18);             // [1, 0, 0, 0, 5]


// 46. TOSORTED — DOES NOT CHANGE ORIGINAL
const numbers19 = [3, 1, 2];

const sorted = numbers19.toSorted((a, b) => a - b);

console.log(sorted);                // [1, 2, 3]
console.log(numbers19);             // [3, 1, 2]


// 47. TOREVERSED — DOES NOT CHANGE ORIGINAL
const numbers20 = [1, 2, 3];

const reversed = numbers20.toReversed();

console.log(reversed);              // [3, 2, 1]
console.log(numbers20);             // [1, 2, 3]


// 48. WITH — CHANGE COPY AT INDEX
const numbers21 = [10, 20, 30];

const changed = numbers21.with(1, 200);

console.log(changed);               // [10, 200, 30]
console.log(numbers21);             // [10, 20, 30]


// 49. ARRAY REFERENCE
const arr1 = [1, 2, 3];

const arr2 = arr1;

arr2.push(4);

console.log(arr1);                  // [1, 2, 3, 4]
console.log(arr2);                  // [1, 2, 3, 4]


// 50. REAL COPY
const arr3 = [1, 2, 3];

const arr4 = [...arr3];

arr4.push(4);

console.log(arr3);                  // [1, 2, 3]
console.log(arr4);                  // [1, 2, 3, 4]


// 51. ARRAY OF OBJECTS
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

console.log(users[0].name);         // Vanshaj
console.log(users[1].age);          // 21


// 52. FILTER OBJECTS
const adults = users.filter((user) => {
    return user.age >= 21;
});

console.log(adults);


// 53. MAP OBJECTS
const names = users.map((user) => {
    return user.name;
});

console.log(names);


// 54. METHOD CHAINING
const numbers22 = [1, 2, 3, 4, 5, 6];

const finalResult = numbers22
    .filter(num => num % 2 === 0)
    .map(num => num * 2);

console.log(finalResult);            // [4, 8, 12]