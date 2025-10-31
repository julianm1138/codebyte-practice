//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

function firstReverse(str: string): string {
  let left = 0;
  let right = str.length - 1;
  let temp = "";

  let strArr = str.split("");

  while (left <= right) {
    temp = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = temp;
    left++;
    right--;
  }
  return strArr.join("");
}

console.log(firstReverse("hello"));
