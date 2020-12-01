// https://leetcode.com/problems/valid-anagram/description/

// time limit exceededがでてしまう
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let modify = t;
  for (let j = 0, len = s.length; j < len; j++) {
    let char = s[j];
    let index = t.indexOf(char);
    if (index < 0) {
      return false;
    }
    modify = modify.replace(char, '*');
  }

  for (let k = 0, len = modify.length; k < len; k++) {
    if (modify[k] !== '*') {
      return false
    }
  }
  return true;
}

// 一番早い
function isAnagram2(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let sMap = {};
  let tMap = {};
  console.log(tMap)
  for (let i = 0, len = s.length; i < len; i++) {
    let sChar = s[i];
    let tChar = t[i];
    sMap[sChar] = sMap[sChar] || 0;
    sMap[sChar]++;
    tMap[tChar] = tMap[tChar] || 0;
    tMap[tChar]++;
  }
  console.log(sMap, tMap)
  for (let key of Object.keys(sMap)) {
    if (Object.keys(tMap).length === 0) {
      return false;
    }
    if (!tMap[key]) {
      return false;
    }

    if (sMap[key] !== tMap[key]) {
      return false;
    }

    delete tMap[key];
  }
  return Object.keys(tMap).length === 0;
}

function isAnagram3(s, t) {
  // ソートした上で文字列に直したものを比較して同じ値だったらtrue
  return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(isAnagram2('a', 'b'))