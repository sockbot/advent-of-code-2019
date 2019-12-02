require("dotenv").config();
const axios = require("axios");

const calculateFuel = mass => {
  const fuel = Math.floor(mass / 3) - 2;
  if (fuel > 0) {
    return fuel + calculateFuel(fuel);
  }
  return 0;
};

axios
  .get("https://adventofcode.com/2019/day/1/input", {
    headers: {
      Cookie: `session=${process.env.AOC_COOKIE}`
    }
  })
  .then(res => {
    const input = res.data.split("\n");
    const total = input.reduce((a, b) => {
      return a + calculateFuel(b);
    }, 0);
    console.log(total);
    return total;
  });
