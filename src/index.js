module.exports = function check(str, bracketsConfig) {

  let specialCharacters = ['.', '+', '*', '?', '^', '$', '(', ')', '[', ']', '{', '}', '|', '\\'];
  let brackets = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    let regexPart = '';
    regexPart += specialCharacters.includes(bracketsConfig[i][0]) ? `\\${bracketsConfig[i][0]}` : `${bracketsConfig[i][0]}`;
    regexPart += specialCharacters.includes(bracketsConfig[i][1]) ? `\\${bracketsConfig[i][1]}` : `${bracketsConfig[i][1]}`;
    brackets.push(regexPart);
  }

  brackets = brackets.join('|');

  let regex = new RegExp(brackets);
  console.log(regex);

  while (true) {
    if (!str.match(regex)) {
      
      break;
    }

    str = str.replace(regex, '');
  }
  console.log(str.length);

  return str.length == 0 ? true : false;
 
};