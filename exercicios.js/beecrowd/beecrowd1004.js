// simple product

var input = require("fs").readFileSync(0, "utf8");
var lines = input.trim().split("\n");

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let produto = a * b;
console.log("PROD = " + produto);
