// https://leetcode.com/problems/jewels-and-stones/description/

// O(n^2)
function numJewelsInStones(J, S) {
  let count = 0;
  for (let i = 0, jLen = J.length; i < jLen; i++) {
    let jewel = J[i];
    for (let j = 0, sLen = S.length; j < sLen; j++) {
      const ownStone = S[j];
      if (jewel === ownStone) {
        count++;
      }
    }    
  }
  return count;
}


