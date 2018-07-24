function repeatStringNumTimes(string, number) {

  var Str = "";
  var type = typeof(number);
  if(type === "string") return Str;
  if (number < 0) return Str;

  Str += string.repeat(number);
  return Str;

}
console.log(repeatStringNumTimes("abc", 3));

console.log(repeatStringNumTimes("hello", 5)); // "hellohellohellohellohello"
console.log(repeatStringNumTimes("abc", 3)); // "abcabcabc"
console.log(repeatStringNumTimes("abc", "2")); // ""
console.log(repeatStringNumTimes("mr_robot", -1)); // ""
console.log(repeatStringNumTimes("friend?", "5")); // ""
