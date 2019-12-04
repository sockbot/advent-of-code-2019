require("dotenv").config();
const axios = require("axios");
const _ = require("lodash");
const fs = require("fs");

axios
  .get("https://adventofcode.com/2019/day/3/input", {
    headers: {
      Cookie: `session=${process.env.AOC_COOKIE}`
    }
  })
  .then(res => {
    let route1 = res.data.split("\n")[0];
    let route2 = res.data.split("\n")[1];
    const data1 = parseData(route1);
    const data2 = parseData(route2);
    let path1 = [{ x: 0, y: 0 }];
    let path2 = [{ x: 0, y: 0 }];
    data1.forEach(instruction => (path1 = travel(instruction, path1)));
    data2.forEach(x => (path2 = travel(x, path2)));

    // Part 1
    for (let i = 0; i < path1.length; i++) {
      if (i % 10000 === 0) {
        console.log(`Iteration: ${i}`);
      }
      for (let j = 0; j < path2.length; j++) {
        if (_.isEqual(path1[i], path2[j])) {
          fs.appendFileSync(
            "3-output.txt",
            `Path 1: ${i} + Path 2: ${j} = Total Path: ${i + j} ` +
              JSON.stringify(path1[i]) +
              "\n",
            "utf8"
          );
          console.log(
            `Found solution at path1 index ${i}: ${JSON.stringify(path1[i])}`
          );
          // Part 2
          console.log(`Path distance is ${i} + ${j} = ${i + j}`);
        }
      }
    }
  });

const parseData = string => {
  data = [];
  string.split(",").map(x => {
    const dir = x.slice(0, 1);
    const value = parseInt(x.slice(1), 10);
    data.push({ dir, value });
  });
  return data;
};

const travel = (instruction, path) => {
  const { dir, value } = instruction;
  const marker = path[path.length - 1];
  const result = [...path];
  switch (dir) {
    case "U":
      for (i = 1; i <= value; i++) {
        result.push({ x: marker.x, y: marker.y - i });
      }
      return result;
    case "D":
      for (i = 1; i <= value; i++) {
        result.push({ x: marker.x, y: marker.y + i });
      }
      return result;
    case "L":
      for (i = 1; i <= value; i++) {
        result.push({ x: marker.x - i, y: marker.y });
      }
      return result;
    case "R":
      for (i = 1; i <= value; i++) {
        result.push({ x: marker.x + i, y: marker.y });
      }
      return result;
    default: {
      console.error("Invalid Direction");
      return undefined;
    }
  }
};
