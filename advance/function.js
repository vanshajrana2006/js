

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