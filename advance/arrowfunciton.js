const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3));


const add2 = (a, b) => a + b;

console.log(add2(2, 3));


const square = x => x * x;

console.log(square(5));



const hello = () => {
    console.log("Hello");
};

hello();



const user = {
    name: "Vanshaj",

    greet: () => {
        console.log(this.name);
    }
};

user.greet();