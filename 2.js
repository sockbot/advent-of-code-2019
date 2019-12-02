require("dotenv").config();
const axios = require("axios");

axios
  .get("https://adventofcode.com/2019/day/2/input", {
    headers: {
      Cookie: `session=${process.env.AOC_COOKIE}`
    }
  })
  .then(res => {
    const data = res.data.split(",").map(x => parseInt(x, 10));

    let instructions = [...data];

    const runComputer = (opcode, input1, input2, output) => {
      let value = 0;
      if (opcode === 99) {
        return instructions[0];
      } else if (opcode === 1) {
        value = instructions[input1] + instructions[input2];
      } else if (opcode === 2) {
        value = instructions[input1] * instructions[input2];
      }
      instructions[output] = value;
    };

    for (let noun = 0; noun < 100; noun++) {
      for (let verb = 0; verb < 100; verb++) {
        instructions[1] = noun;
        instructions[2] = verb;
        for (let i = 0; i < instructions.length; i += 4) {
          const answer = runComputer(
            instructions[i],
            instructions[i + 1],
            instructions[i + 2],
            instructions[i + 3]
          );
          if (answer === 19690720) {
            console.log(100 * noun + verb);
          }
        }
        instructions = [...data];
      }
    }
  });
