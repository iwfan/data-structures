export const repeatCharCount = (str: string) => {

  const charList = str.split('')

  const charTable = charList.reduce((table, char) => {
    if (table[char]) table[char]++
    else table[char] = 1
    return table;
  }, {} as {[index: string]: number})

  let higherCount = 0;
  let higherKey = '';

  for (let key in charTable) {
    if (higherKey === '') {
      higherKey = key;
      higherCount = charTable[key];
    } else if (charTable[key] > higherCount) {
      higherKey = key;
      higherCount = charTable[key];
    }
  }

  return { [higherKey]: higherCount }
}
