// Input: two strings representing arrays of numbers, like "1, 3, 4, 7, 13" and "1, 2, 4, 13, 15".

// Output: a string containing the numbers that appear in both arrays, in sorted order, separated by commas.

// If no intersection exists, return "false" (string).

function findIntersection(arr: string[]): string {
  let result = "";

  const [firstStr, secondStr] = arr;
  const set = new Set(firstStr.split(",").map(Number));
  const secondArr = secondStr.split(",").map(Number);
  for (const num of secondArr) {
    if (set.has(num)) {
      result += num.toString() + ",";
    }
  }

  if (result.length === 0) return "false";

  return result.slice(0, -1);
}
console.log(findIntersection(["1, 3, 4, 7, 13", "12"]));
