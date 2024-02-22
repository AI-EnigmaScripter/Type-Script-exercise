// lower case
let personName: string = "ghulam fareed"
console.log("lowercase:",personName.toLocaleLowerCase());

// upper case
let personName: string = "GHULAM FAREED"
console.log("uppercase:",personName.toLocaleUpperCase());

// title case
let personName: string = "Ghulam Fareed"
console.log("title:",personName.replace(/\bw/g,c => c.toUpperCase()));