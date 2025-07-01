/**
 * @param {string} word
 * @return {number}
 */
function possibleStringCount(word: string): any {
  let possiblities: Array<any> = [];
  let charArr = [...word].reduce((storedVal, currentValue) => {
    storedVal[currentValue] = (storedVal[currentValue] || 0) + 1;
    return storedVal;
  }, {});

  for (const key in charArr) {
    if (charArr[key] > 1) {
      const temp: any = {...charArr};
      temp[key] = temp[key] - 1;
      possiblities.push(temp);
    }
  }

  console.log('charArr', '\n', charArr, '');
  console.log('possiblities:', '\n', possiblities);
}
