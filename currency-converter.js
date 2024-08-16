const prompt = require("prompt-sync")();

// asks user if they want to convert pounds to dollars=1 or dollars to pounds=2
const conversion = prompt(
  "Type 1 to convert pounds to dollars, or type 2 to convert dollars to pounds. "
);

// ask user amount of pounds/dollars
const amount = Number(prompt("How much? "));

// convert to other currency and print it out
if (conversion == 1) {
  console.log("$" + amount * 1.28);
} else if (conversion == 2) {
  console.log("£" + amount / 1.28);
}