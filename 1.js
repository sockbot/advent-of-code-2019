const fs = require("fs");

const calculateFuel = mass => {
  const fuel = Math.floor(mass / 3) - 2;
  if (fuel > 0) {
    return fuel + calculateFuel(fuel);
  } else return 0;
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
