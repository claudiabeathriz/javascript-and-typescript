// area of a circle
// The formula to calculate the area of a circumference is defined as
// A = π . R2. Considering to this problem that π = 3.14159:
// Calculate the area using the formula given

var input = require("fs").readFileSync(0, "utf8");
var lines = input.trim().split("\n");

let r = parseFloat(lines[0]);
const pi = 3.14159;
let area = pi * r * r;
console.log("A = " + area.toFixed(4));
