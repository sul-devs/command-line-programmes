// Exercise 3
function pos(n) {
  if (n % 3 === 0) {
    return 15;
  } else if (n % 3 === 1) {
    return 5;
  } else if (n % 3 === 2) {
    return 10;
  }
}

console.log(pos(13412), pos(323), pos(43));
