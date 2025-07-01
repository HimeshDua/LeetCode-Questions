/**
 * @param {string} word
 * @return {number}
 */
function possibleStringCount(word) {
  const posStr = [...word].reduce((storedVal, currentValue) => {
    storedVal[currentValue] = (storedVal[currentValue] || 0) + 1;
    return storedVal;
  }, {});

  console.log(posStr);
}
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
