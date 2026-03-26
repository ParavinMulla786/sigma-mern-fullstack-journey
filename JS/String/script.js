let str = "Hii!"
console.log(str)


// methods 

// 1.trim()  - It removes white spaces from both ends.
let msg = "              Hello   "
let newmsg = msg.trim();
console.log(newmsg)

// 2.trimEnd() - It removes white spaces from the start.
let newmsg1= msg.trimEnd();
console.log(newmsg1)

//3.trimStart() - It removes white spaces from the end.

let newmsg2= msg.trimStart();
console.log(newmsg2)


//4.toLowerCase()  - Returns the calling string value converted to lowercase.

let str1 = " APNA COLLEGE"
let strnew = str1.toLowerCase()
console.log(strnew)
// 5.	toUpperCase() - Returns the calling string value converted to uppercase.
let str2 = "javascript"
let str2new = str2.toUpperCase()
console.log(str2new)

// 6. charAt()   - Returns the character at the specified index.

let str3 = "Programming"
let spaces = 0;
   for(let i = 0; i<str3.length; i++){
      if(str3.charAt(i) == ' '){
         spaces = spaces + 1;
      }
   }
  console.log("Number of spaces = ", spaces);
console.log("Number of words = ", spaces + 1);


// 7. concat() - Combines the text of two strings and returns a new string.

let s1 = "Happy"
let s2 = "Coding"

let s3 = s1.concat(s2)

console.log(s3)

//8.endsWith()  - Checks whether the string ends with a specific character or substring.

let str4 = "Good Morning";

let result2 = str4.endsWith("Morning");

console.log(result2);


//9.includes() - To check whether one string exists in another string.
let str6 = "Happy Coding";

let result3 = str6.includes("Java");

console.log(result3);


//10.indexOf() - Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

let str7 = "Happy Coding";

let result4 = str7.indexOf("o");

console.log(result4);

//11.lastIndexOf() - Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.

let str8 = "Hello World Hello";
let result5 = str8.lastIndexOf("Hello");

console.log(result5);


// 12.repeat() - To get a new string containing the N number of copies of the current string.
let str9 = "Coding ";
let result6 = str9.repeat(3);

console.log(result6);


//13.replace() - Used to find a match between a regular expression and a string and replace the matched substring with a new one.

let str10 = "Hello World";
let result10 = str10.replace("World", "JavaScript");

console.log(result10);


// 14.replaceAll() - Used to find a match between a regular expression and a string and replace all the matched substring with a new one.

let str11 = "apple apple apple";
let result11 = str11.replaceAll("apple", "mango");

console.log(result11);