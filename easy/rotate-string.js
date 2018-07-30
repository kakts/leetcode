// https://leetcode.com/problems/rotate-string/description/

function rotateString(A, B) {
  let modifiedA = A;
  if (A === B) {
    return true;
  }
  let isRotatable = false;
  for (let i = 0, len = A.length; i < len; i++) {
    modifiedA = modifiedA.substr(1, len - 1) + modifiedA[0];
    if (modifiedA === B) {
      isRotatable = true;
      break;
    }
  }
  return isRotatable;
}
console.log(rotateString("abcdefghijklmn", "test"))