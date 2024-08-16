const prompt = require("prompt-sync")();

// Test score >90 (A*), >80 (A), >70 (B), >60 (C), <60 (Fail)
const testScore = Number(prompt("Test score: "));

if (testScore > 90) {
  console.log("A*");
} else if (testScore > 80 && testScore <= 90) {
  console.log("A");
} else if (testScore > 70 && testScore <= 80) {
  console.log("B");
} else if (testScore > 60 && testScore <= 70) {
  console.log("C");
} else {
  console.log("You're a failure.");
}