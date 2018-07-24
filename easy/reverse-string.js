// 344. reverse string https://leetcode.com/problems/reverse-string/description/

// O(n/2)
function reverseString(s) {
  let result = [];
  for (let i = 0, len = s.length; i < Math.ceil(len / 2); i++) {
    let tmp = s[i];
    result[i] = s[len - 1 - i];
    result[len - 1 - i] = tmp;
  }
  return result.join('');
}

console.log(reverseString('hello'))