function reverseNum(n, str = String(n)) {
    const thisDigit = str[str.length - 1];
    const recursiveResult = str.length === 1 ? '' : reverseNum(str.slice(0, str.length - 1));
    return Number(thisDigit + recursiveResult);
  }

console.log(  reverseNum(5567443413));