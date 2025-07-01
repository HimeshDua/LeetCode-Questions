/**
 * @param {string} word
 * @return {number}
 */
function possibleStringCount(word) {
  let arr = [];
  let diffArr = [];
  for (let w of word) {
    arr.push(w);
    if (arr.includes(w)) {
      diffArr.push(arr);
      arr = arr.filter((arr) => arr === w);
    }
  }
  console.log('length', arr.length, '\n', 'arr', arr);
  console.log('\n');
  console.log('diffArr length', diffArr.length, 'diffArr', diffArr);

  // console.log(arr.length);
}

possibleStringCount('abbcccc');
