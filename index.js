var reverse = function(x) {
  //there shoul)d be different method for positive and negative integers
  //if it ends in zero, do not allow
  let numberStr = x.toString();
  let numberArr = numberStr.split("");
  let reverseArr = [];
  let zeros = 0;
  let result = 0;
  let upperRange = Math.pow(2, 31) - 1;
  let lowerRange = -Math.pow(2, 31);
  //   console.log(upperRange);
  //   console.log(lowerRange);
  //the variable declarartion for upper range and lower ranger work, but the if statements do not work for some reason
  // doesn't even work when you write it out
  if (x === 0 || x > 2147483647 || x < -2147483648) {
    result = 0;
    //console.log("this is craazy");
  } else {
    for (let i = numberArr.length; i >= 0; i--) {
      if (numberArr[i] == "0") {
        zeros++;
      }
    }

    if (numberArr[numberArr.length - 1] == "0") {
      if (x % Math.pow(10, zeros) === 0) {
        for (let i = 0; i < zeros; i++) {
          numberArr.pop();
        }
      }
    }

    //   console.log(zeros + " these are the zeros");

    if (x > 0) {
      for (let i = numberArr.length - 1; i >= 0; i--) {
        reverseArr.push(numberArr[i]);
      }
    } else if (x < 0) {
      for (let i = numberArr.length - 1; i > 0; i--) {
        reverseArr.push(numberArr[i]);
      }
      reverseArr.unshift("-");
    }

    //   console.log(numberArr + " is the number array");
    //   console.log(reverseArr + " is reverse array");

    let resultStr = reverseArr.join("");
    result = parseInt(resultStr, 10);
  }
  return result;
};

console.log(reverse(123) + " should return 321 for 123");
console.log(reverse(-123) + " should return -321 for -123");
console.log(reverse(120) + " should return 21 for 120");
console.log(reverse(9000000) + " should return 9 for 9000000");
console.log(reverse(0) + " shoudl return 0");
//need to figure out cases like this
console.log(reverse(9090000) + " should return 909 for 9090000");
console.log(reverse(1534236469) + " should return 0");
console.log(Math.pow(2, 31));
