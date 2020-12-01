// https://leetcode.com/problems/lemonade-change/description/

function lemonadeChange(bills) {
  let changes = {
    5: 0,
    10: 0,
    20: 0
  };
  let result = true;

  loop1:
  for (let i = 0, len = bills.length; i < len; i++) {
    const bill = bills[i];

    if (bill === 5) {
      changes[bill]++;
      continue;
    }
    
    switch(bill) {
      case 10:
        if (changes[5] > 0) {
          changes[5]--;
        } else {
          result = false;
          break loop1;
        }
        changes[10]++;
        break;
      case 20:
        if (changes[10] > 0 && changes[5] > 0) {
          changes[10]--;
          changes[5]--;
        } else if (changes[10] === 0 && changes[5] > 3) {
          changes[5] -= 3;
        } else {
          result = false;
          break loop1;
        }
        changes[20]++;
    }
  }

  return result;
}
console.log(lemonadeChange([5,5,5,10,20]))