// https://leetcode.com/problems/add-digits/description/

/**
 * num % 10を繰り返して、 1の位の数を足していく
 */

function addDigits(num) {
  if (num < 10) {
    return num;
  }
  let sum = 0;
  let digits = num;
  while(digits >= 10) {
    let a = digits % 10;
    sum += a;
    digits = Math.floor(digits / 10);
  }
  sum += digits;

  return addDigits(sum);
}

console.log(addDigits(38));