//Have the function LetterCount(str) take the str parameter being passed and return the first word with the greatest number of repeated letters.

function letterCount(str: string): string {
  const cleanStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  const set = new Set(cleanStr);
  const cleanArr = str
    .replace(/[^a-zA-Z ]/g, "")
    .toLowerCase()
    .split(" ");

  let globalMax = 1;

  for (const [index, word] of cleanArr.entries()) {
    let letterCounts: Record<string, number> = {};
    for (const char of word) {
      if (letterCounts[char] === undefined) {
        letterCounts[char] = 1;
      } else {
        letterCounts[char] += 1;
      }

      const currentMax = Math.max(...Object.values(letterCounts));
      if (currentMax > globalMax) {
        globalMax = currentMax;
        return word;
      }
    }
  }
  return "";
}

console.log(letterCount("Today, is the greatest day eevverr!"));

//input: string, output: string
//greatest value = 1
//t: 1, o: 1, d: 1, a: 1, y: 1 -> if any value > greatest value, return that word
//i: 1, s: 1
//t: 1, h: 1, e: 1      if (letterCounts[word])
//g: 1, r: 1, e: 2  , a: 1, t: 1
