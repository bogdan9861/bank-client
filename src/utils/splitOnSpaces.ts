export const splitOnSpaces = (str: string) => {
  if (!str.length) return;

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    newStr += str[i];
    if ((i + 1) % 4 == 0) {
      newStr += " ";
    }
  }

  return newStr;
};
