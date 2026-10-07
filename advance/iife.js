function hello() {
    console.log("Hello");
}

hello();



function hello2() {
    console.log("Hello");
})();


(() => {
    console.log("Hello");
})();



(function greet() {
    console.log("Hello");//named iife
})();



const result = (function () {
    return 10 + 20;
})();

console.log(result);