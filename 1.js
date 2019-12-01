const fs = require("fs");

const calculateFuel = mass => {
  return Math.floor(mass / 3) - 2;
};

fs.readFile("1-input.txt", "utf-8", (err, data) => {
  if (err) throw err;
  const input = data.split("\n");
  const total = input.reduce((a, b) => {
    return a + calculateFuel(b);
  }, 0);
  console.log(total);
  return total;
});
