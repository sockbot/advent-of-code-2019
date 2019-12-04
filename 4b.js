const rangeStart = 231832;
const rangeEnd = 767346;
let count = 0;

const hasTrueDouble = num => {
  let digits = num.toString().split("");
  // digits = digits.map(x => parseInt(x, 10));
  // check from 2nd digit to last digit comparing with previous digit
  for (let i = 1; i < digits.length; i++) {
    // if on the last digit, don't loop around to check the 0th digit
    if (i === digits.length - 1) {
      if (digits[i] === digits[i - 1] && digits[i] !== digits[i - 2]) {
        // console.log("end");
        return true;
      }
      // if on the 2nd digit, don't loop around to check the last digit
    } else if (i === 1) {
      if (digits[i] === digits[i - 1] && digits[i] !== digits[i + 1]) {
        // console.log("start");
        return true;
      }
      // if in the middle, check before and after the pair
    } else if (
      digits[i] === digits[i - 1] &&
      digits[i] !== digits[i + 1] &&
      digits[i] !== digits[i - 2]
    ) {
      // console.log("middle");
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

for (let i = rangeStart; i < rangeEnd; i++) {
  if (hasTrueDouble(i) && alwaysIncreasing(i)) {
    count++;
  }
}

console.log(count);

const a = 112233;
const b = 123444;
const c = 111122;
console.log(a, hasTrueDouble(a));
console.log(b, hasTrueDouble(b));
console.log(c, hasTrueDouble(c));
