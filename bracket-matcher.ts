// Have the function bracketMatcher(str) take the str parameter being passed and return 1 if the parentheses are correctly matched and each one is accounted for.
// Otherwise return 0. The string will not be empty and may contain non-parenthesis characters.
//()
function bracketMatcher(str: string): number {
  let stack: string[] = [];

  for (const char of str) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) {
        return 0;
      }
    }
    stack.pop();
  }

  if (stack.length > 0) {
    return 0;
  } else {
    return 1;
  }
}

console.log(bracketMatcher("(())"));
