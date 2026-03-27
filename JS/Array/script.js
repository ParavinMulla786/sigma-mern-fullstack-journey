// ======================
// ARRAY BASICS
// ======================

// Array creation → multiple values store in one variable
let nums = [2, 4, 6, 8];

// Printing full array
console.log(nums);  

// Accessing element using index (index starts from 0)
console.log(nums[0]);   // Output: 2

// Array is actually an Object in JavaScript (important for exam)
console.log(typeof(nums));   // Output: object

// Length → total number of elements
console.log(nums.length);   // Output: 4



// ======================
// DIFFERENT TYPES OF ARRAYS
// ======================

// Number array → only numbers
let Marks = [99, 90, 85, 70, 77];
console.log(Marks);

// String array → only text values
let names = ["Raj", "Nita", "Rahul", "Gita"];
console.log(names);

// Mixed array → different data types allowed (JS feature)
let info = ["Mohan", 24, 7.5];
console.log(info);

// Empty array → no elements
let emptyarray = [];
console.log(emptyarray, "length of array -", emptyarray.length);



// ======================
// ARRAY MUTABILITY
// ======================

// Arrays are mutable → values can be changed
let Fruits = ["Apple", "banana", "Mango"];
console.log(Fruits);

// Changing value using index
Fruits[0] = "Orange";   // Apple → Orange
console.log(Fruits);

// Adding element at specific index
Fruits[10] = "Grapes";  
// Note: index 3–9 = empty (undefined values create gap)

console.log(Fruits);
console.log(Fruits.length);  // Length becomes 11 (important concept)



// ======================
// ARRAY METHODS
// ======================

// 1. PUSH → add element at END (most used)
let cars = ["Audi", "BMW", "Maruti"];
console.log(cars);

cars.push("Toyota");   
console.log(cars);

cars.push("Ferrari");
console.log(cars);


// 2. POP → remove element from END and return it
cars.pop();   // removes last element (Ferrari)
console.log(cars);


// 3. UNSHIFT → add element at START
cars.unshift("Mahindra");
console.log(cars);

cars.unshift("Tesla");
console.log(cars);


// 4. SHIFT → remove element from START
cars.shift();   // removes Tesla
console.log(cars);


// Example (real-life logic)
let followers = ["A", "B", "C"];
console.log("Followers -", followers);

let blocked = followers.shift();   // remove first follower
console.log("Blocked -", blocked);
console.log("Followers -", followers);



// ======================
// SEARCH METHODS
// ======================

// 5. indexOf() → returns index of element
let primary = ["Red", "Yellow", "Blue"];

console.log("Index Of Blue -", primary.indexOf("Blue"));  // 2
console.log("Index Of Green -", primary.indexOf("Green")); // -1 (not found → important)


// 6. includes() → check if value exists (true/false)
console.log(primary.includes("Red"));    // true
console.log(primary.includes("Green"));  // false



// ======================
// ARRAY MERGE
// ======================

// 7. concat() → merge arrays (non-destructive)
let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8];

let numbers = odd.concat(even);
console.log(numbers);



// ======================
// ARRAY REVERSE
// ======================

// 8. reverse() → reverse array (changes original array ⚠️)
let num = [0,1,2,3,4,5,6,7,8,9];

num.reverse();   
console.log(num);



// ======================
// SLICE METHOD
// ======================

// 9. slice() → copy part of array (non-destructive)
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// From index 2 to end
let firsttwo = days.slice(2);
console.log(firsttwo);

// From index 3 to 5 (5 not included)
let specific = days.slice(3, 5);
console.log(specific);

// Negative index → count from end
let negative = days.slice(-2);
console.log(negative);



// ======================
// SPLICE METHOD
// ======================

// 10. splice() → add/remove/replace (changes original array ⚠️)
let colours = ["Red", "Yellow", "Blue", "Orange", "Pink", "White"];
console.log(colours);

// Remove elements from index 4 to end
colours.splice(4);
console.log(colours);

// Delete 1 element from index 0
colours.splice(0, 1);
console.log("After deleting Red:", colours);

// Replace + add elements
colours.splice(0, 1, "Black", "Gray");
console.log(colours);



// ======================
// SORT METHOD
// ======================

// 11. sort() → default sorting is alphabetical
let sortdays = days.sort();
console.log("Sorted Days -", sortdays);

// Sorting numbers problem
let squares = [81, 49, 16, 64, 25, 36, 9, 4];

// Wrong → treated as string
let sortsquare = squares.sort();
console.log("Wrong Numeric Sort -", sortsquare);

// Correct numeric sorting (important for exam)
let correctSort = squares.sort((a, b) => a - b);
console.log("Correct Numeric Sort -", correctSort);



// ======================
// NESTED ARRAY
// ======================

// Multi-dimensional array → array inside array
let nestedarray = [[2,4], [1,3,5], [6,8], [7,9]];

console.log(nestedarray);

// Access nested elements → [row][column]
console.log(nestedarray[0][1]);  // Output: 4