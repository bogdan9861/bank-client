export const splitOnSymbol = (str: string, symbol: string) => {
  if (!str.length) return;

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if ((i + 1) % 4 == 0) {
      newStr += symbol;
    }
  }

  return newStr;
};
