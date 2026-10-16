

function myname(){
console.group("vanshaj")
}
myname()

function addnumber(num1,num2){
    let result=num1+num2
    console.log(num1+num2)
    return result
}

const result= addnumber(78,22)
console.log("result",result)



function user(user)
{
    if(user===undefined)
       {
         console.log("please enter name")
         return 
       }
return `${user} just logged in`
}
console.log(user())




//hof



// High Order Functions and Callback

function add(a, b, cb) {
    let result = a + b;
    cb(result);
}

add(2, 4, function (val) {
    console.log(val);
});


//arrow
function add(a, b, cb) {
    let result = a + b;
    cb(result);
}

add(2, 4, (val)=>console.log(val)); 
  



function add(a, b, cb) {
    let result = a + b;
    cb(result);
}

add(2, 4, function (val) {
    console.log(val);
});