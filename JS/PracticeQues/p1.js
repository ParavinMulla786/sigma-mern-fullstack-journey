// Q1. create a  number  variable num with some Value
// Now , print good if the numbr is divisible by 10 otherwise bad

let num = 20;
if (num %10 ==0){
    console.log("Good")
}
else{
    console.log("bad")
}


//Q2. take a users name and age as input using prompt 
//then return back the folloeing statement to the user as an alert 
// name is age years old

let firstname = prompt("Please enter your name");
let age  = prompt("Please enter your age");

alert(`${firstname} is ${age} years old`);

//Q3. string = golden string if it strat with "A" or "a" and has total length greater than 5 
//for given strint printif is is  golden or not 
let str = "Apple";

if ((str[0] == "A" || str[0] == "a") && str.length > 5) {
    console.log("Golden String");
} else {
    console.log("Not a Golden String");
}

//Q4. find largest of three numbers
let a =10;
let b= 5;
let c= 15;
if(a>b && a>c){
    console.log("a is greater")
}
else if(b>a && b>c){
    console.log("b is greater")
}
else (c>a && c>b){
    console.log("c is greater")
}

// Q5. write a program to check if 2 numbers have same last digit
let num1 = 123;
let num2 = 456;
if (num1 % 10 === num2 % 10) {
    console.log("Same last digit");
} else {
    console.log("Different last digit");
}

