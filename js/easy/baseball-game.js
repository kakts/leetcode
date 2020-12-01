// https://leetcode.com/problems/baseball-game/description/

function calPoints(ops) {
  let result = 0;
  let lastGameRes = [];
  for (let i = 0, len = ops.length; i < len; i++) {
    let point = ops[i];
    if (Number.isInteger(Number(point))) {
      let add = Number(point);
      result += add
      lastGameRes.push(add);
    } else if (point === '+') {
      let add = lastGameRes[lastGameRes.length - 1] + lastGameRes[lastGameRes.length - 2];
      result += add;
      lastGameRes.push(add);
    } else if (point === 'D') {
      let add = lastGameRes[lastGameRes.length - 1] * 2;
      result += add;
      lastGameRes.push(add);
      
    } else if (point === 'C') {
      let lastValid = lastGameRes[lastGameRes.length - 1];
      result -= lastValid;
      lastGameRes.pop();
    }
  }
  return result;
}

calPoints(["5","2","C","D","+"])