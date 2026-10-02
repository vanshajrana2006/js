let mydate=new Date()
console.log(mydate)
const date = new Date();

console.log("Full Date:", date);
console.log("Year:", date.getFullYear());
console.log("Month:", date.getMonth() + 1);
console.log("Day:", date.getDate());

console.log("Hours:", date.getHours());
console.log("Minutes:", date.getMinutes());
console.log("Seconds:", date.getSeconds());

console.log("String:", date.toString());
console.log("Date:", date.toDateString());
console.log("Time:", date.toTimeString());
console.log("ISO:", date.toISOString());
console.log("JSON:", date.toJSON());
console.log("Locale:", date.toLocaleString());