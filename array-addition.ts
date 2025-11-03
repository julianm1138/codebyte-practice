// Have the function arrayAddition(arr) take the array of numbers stored in arr and return true if any combination of numbers in the array (excluding the largest number) can add up exactly to the largest number in the array.
// Otherwise return false. The array will not be empty, will not contain duplicates, and may contain negative numbers.

function arrayAddition(arr: number[]): boolean {
  let seen = new Set<number>();

  const max = Math.max(...arr);
  for (const num of arr) {
    if (seen.has(max - num)) {
      return true;
    }
    seen.add(num);
    console.log(seen);
  }

  return false;
}
console.log(arrayAddition([1, 2, 3, 4]));
