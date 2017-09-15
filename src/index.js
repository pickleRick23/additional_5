module.exports = function check(str, bracketsConfig) {
  var isOpen = function(ch) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] == ch) {
        if (bracketsConfig[j][0] == bracketsConfig[j][1]) return 0;
        else return 1
      }
    }
    return -1;
  }
  var rev = function(ch) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][1] == ch) return bracketsConfig[j][0];
    }
  }
  var kek = [];
  for (i = 0; i < str.length; i++) {
    if(kek.length == 0 && isOpen(str[i]) == -1) return false;
    if(isOpen(str[i]) == 1 || (isOpen(str[i]) == 0 && str[i] != kek[kek.length - 1])) kek[kek.length] = str[i];
    else if(rev(str[i]) == kek[kek.length - 1]) kek.pop();
    else return false;
  }
  if(kek.length != 0) return false;
  return true;
}
