// Q. Start = ["January ", "Jully", "March", "August"]
// End   = ["July", "June", " March", "August"]

// By Using Push , Pop , shift , unshift 

// Step 1: Initial Array
let months = ["January ", "Jully", "March", "August"]
console.log("Start:", months)

// Step 2: Remove first element using shift()
months.shift()   // removes "January "
console.log("After 1st shift:", months)

// Step 3: Remove again first element
months.shift()   // removes "Jully"
console.log("After 2nd shift:", months)

// Step 4: Add "June" at beginning using unshift()
months.unshift("june")
console.log("After adding June:", months)

// Step 5: Add "july" at beginning
months.unshift("july")
console.log("After adding July:", months)

// Final Output
console.log("Final Array:", months)