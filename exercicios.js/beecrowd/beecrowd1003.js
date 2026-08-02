// simple sum

var input = require("fs").readFileSync(0, "utf8");
var lines = input.trim().split("\n");

let a = parseInt(lines[0]);
let b = parseInt(lines[1]);
let soma = a + b;
console.log("SOMA = " + soma);
