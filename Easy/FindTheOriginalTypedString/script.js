/**
 * @param {string} word
 * @return {number}
 */
function possibleStringCount(word) {
  let str = [];
  let res = 1;

  for (const c of word) {
    str.at(-1) === c ? res++ : str.push(c);
  }
  console.log(res);
}
// function possibleStringCount(word) {
//   let possiblities = [];
//   let charArr = [...word].reduce((storedVal, currentValue) => {
//     storedVal[currentValue] = (storedVal[currentValue] || 0) + 1;
//     return storedVal;
//   }, {});

//   for (const key in charArr) {
//     let temp = {...charArr};
//     while (temp[key] > 1) {
//       temp[key]--;
//       possiblities.push({...temp});
//     }
//     console.log('pushed:', JSON.stringify(temp));
//     // console.log('pushed:', JSON.stringify(temp));
//   }

// if (charArr[key] > 1) {
//   const temp = {...charArr};
//   temp[key] = temp[key] - 1;
//   possiblities.push(temp);
// }
// console.log(possiblities);
// }

// reduce method summary
// 'a','b','b','c' reduce loops on without mutating actual array
// first iteration:
// storedVal['a'] = (undefined || 0) + 1 = 1
// second iteration:
// storedVal['b'] = (undefined || 0) + 1 = 1
// third iteration:
// storedVal['b'] = (1 || 0) + 1 = 2

// function possibleStringCount(word) {
//   let arr = Array.from(word);
//   let toSet = new Set(arr);
//   console.log(arr.length, 'word', arr);
//   console.log(toSet.length, 'sets', toSet);
//   console.log('\n');
//   // console.log(posStr.length, 'possibleWords', posStr);
// }

// possibleStringCount('abbcccc');

// function possibleStringCount(word) {
//   let arr = []; // splited Word
//   let posStr = []; // possible Word
//   for (let w of word) {
//     arr.push(w);
//     if (arr.includes(w)) {
//       posStr.push(arr);
//       arr = arr.filter((arr) => arr === w);
//     }
//   }
//   console.log(arr.length, 'word', arr);
//   console.log('\n');
//   console.log(posStr.length, 'possibleWords', posStr);

//   // console.log(arr.length);
// }

possibleStringCount('abbcccc');
