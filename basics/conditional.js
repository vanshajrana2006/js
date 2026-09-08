let age = 20;
let marks = 85;
let hasID = true;

if (age >= 18) {

    console.log("You are an adult");

    if (hasID === true) {

        console.log("ID verified");

        if (marks >= 90) {
            console.log("Grade A+");

        } else if (marks >= 80 && marks < 90) {
            console.log("Grade A");

        } else if (marks >= 70 && marks < 80) {
            console.log("Grade B");

        } else {
            console.log("Grade C or below");
        }

    } else {
        console.log("ID not available");
    }

} else {
    console.log("You are under 18");
}