// https://leetcode.com/problems/1-bit-and-2-bit-characters/description/

function isOneBitCharacter(bits) {
  let result = true;
  let len = bits.length;
  if (bits[len - 1] === 1) {
    return false;
  }

  let i = 0;
  while (i < len) {

    let data = bits[i];
    let next = bits[i + 1];
    if (data === 0) {
      i++;
      continue;
    }
    if (i === len - 2 && data === 1 && next === 0) {
      return false;
    }
    i += 2;
  }
  return true;

}