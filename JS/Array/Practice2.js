// Q. start = ["january" , "Jully" , "March ", " August"]
// final = ["july" , "June" , "march" , "august"]
// //using Splice

// ==============================
// Q1. Using splice()
// ==============================

// Original array
let months = ["january", "Jully", "March ", " August"];

// Step 1: Replace first two elements (index 0 and 1)
months.splice(0, 2, "july", "june");

// Step 2: Fix remaining values (trim + lowercase)
months[2] = months[2].trim().toLowerCase();   // "March " → "march"
months[3] = months[3].trim().toLowerCase();   // " August" → "august"

console.log("Final Months Array:", months);


// ==============================
// Q2. Reverse + indexOf()
// ==============================

// Original array
let languages = ["C", "C++", "HTML", "JavaScript", "Python", "Java", "C#", "SQL"];

// Step 1: Reverse the array
languages.reverse();
console.log("Reversed Array:", languages);

// Step 2: Find index of JavaScript
let index = languages.indexOf("JavaScript");

console.log("Index of JavaScript:", index);