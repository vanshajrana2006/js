let name = `vanshaj`;
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
let str = "Vanshaj Rana";

str.length              // 12
str[0]                   // "V"
str.charAt(0)            // "V"

str.toUpperCase()        // "VANSHAJ RANA"
str.toLowerCase()        // "vanshaj rana"

str.includes("Rana")     // true
str.startsWith("Van")    // true
str.endsWith("Rana")     // true

str.indexOf("R")         // 8

str.slice(0, 7)          // "Vanshaj"
str.substring(0, 7)      // "Vanshaj"

str.replace("Rana", "singh")
// "Vanshaj Kumar"

str.trim()               // removes spaces from beginning/end

str.split(" ")           // ["Vanshaj", "Rana"]