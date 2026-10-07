if (true) {

    var x = 10;
}

console.log(x);

if (true) {

    let x = 10;
}

console.log(x);
function outer() {

    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

let counter = outer();

counter();
counter();
counter();