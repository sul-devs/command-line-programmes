const prompt = require("prompt-sync")();

const pace = +prompt("pace: ");
const agility = +prompt("agility: ");
const strength = +prompt("strength: ");

let shouldExit = false;
if (pace > 99 || pace < 1) {
  console.log("Pace out of bounds. Pace must be between 1 and 99.");
  shouldExit = true;
}

if (agility > 99 || agility < 1) {
  console.log("Agility out of bounds. Agility must be between 1 and 99.");
  shouldExit = true;
}

if (strength > 99 || strength < 1) {
  console.log("Strength out of bounds. Agility must be between 1 and 99.");
  shouldExit = true;
}

if (shouldExit) {
  process.exit();
}

if (pace > 80 || agility > 80 || strength > 80) {
  console.log("Buy.");
} else {
  console.log("Don't buy.");
}
