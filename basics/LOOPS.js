let numbers = [10, -5, 0, 8, -2];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        console.log(numbers[i], "is positive");
    } 
    else if (numbers[i] < 0) {
        console.log(numbers[i], "is negative");
    } 
    else {
        console.log(numbers[i], "is zero");
    }
}