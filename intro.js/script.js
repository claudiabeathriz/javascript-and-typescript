let name = "Claudia";
console.log("Hi, " + name + "!");

let age = 26;
console.log("You are " + age + " years old.");

let ofLegalAge = age >= 18;
console.log("Are you of legal age? " + ofLegalAge);

// null and undefined

let address = null;
console.log("Address: " + address);

let cellphone;

if (cellphone) {
  console.log("Cellphone: " + cellphone);
  console.log("multiply: " + cellphone * 2); // NaN
} else {
  console.log("Cellphone not provided.");
}
