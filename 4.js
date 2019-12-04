const rangeStart = 231832;
const rangeEnd = 767346;
let count = 0;

const hasDouble = num => {
  const digits = num.toString().split("");
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] === digits[i - 1]) {
      return true;
    }
  }
  return false;
};

const alwaysIncreasing = num => {
  const digits = num.toString().split("");
  for (let i = 1; i < digits.length; i++) {
    if (digits[i] < digits[i - 1]) {
      return false;
    }
  }
  return true;
};

const hasTriple = num => {
  const digits = num.toString().split("");
  for (let i = 2; i < digits.length; i++) {
    if (digits[i] === digits[i - 1] && digits[i] === digits[i - 2]) {
      return true;
    }
  }
  return false;
};

for (let i = rangeStart; i < rangeEnd; i++) {
  if (hasDouble(i) && alwaysIncreasing(i) && !hasTriple(i)) {
    count++;
  }
}

console.log(count);
