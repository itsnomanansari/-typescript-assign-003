"use strict";
let myName = "MuhAMMAD Noman Ansari";
//Upper Case
console.log("Uppercase :" + myName.toUpperCase()); //Uppercase
//LowerCase
console.log("Lowercase :" + myName.toLowerCase()); //lowercase
//TitleCase
let words = myName.split(" ");
let titleCase = "";
for (let i = 0; i < words.length; i++) {
    titleCase = titleCase + words[i].charAt(0).toUpperCase() + words[i].substring(1).toLowerCase() + " "; //slice can also use instead of substring
}
console.log("Title Case:" + titleCase);
