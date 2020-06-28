function palindrome(str) {
  var pureStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  var revStr = pureStr.split("").reverse().join("");
  return pureStr === revStr;
};
