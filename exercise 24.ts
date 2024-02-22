
// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";

console.log(string1 === string2); // False
console.log(string1 !== string2); // True

// Tests using the lower case function
const str1: string = "HELLO";
const str2: string = "hello";

console.log(str1.toLowerCase() === str2.toLowerCase()); // True
console.log(str1.toLowerCase() !== str2.toLowerCase()); // False

// Numerical tests
const num1: number = 5;
const num2: number = 10;

console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True

// Tests using "and" and "or" operators
const x: number = 5;
const y: number = 10;

console.log(x > 0 && y > 0); // True
console.log(x > 0 && y < 0); // False
console.log(x > 0 || y < 0); // True
console.log(x < 0 || y < 0); // False

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // True
console.log(array.includes(6)); // False

// Test whether an item is not in an array
console.log(!array.includes(6)); // True
console.log(!array.includes(3)); // False

 

