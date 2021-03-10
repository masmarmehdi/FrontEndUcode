function concat(str1, str2) {
  func.count = 0;
  function func() {
    let str2 = prompt("Enter: ");
    func.count++;
    if (str2 === null) {
      return str1;
    }
    return (str1 += " " + str2);
  }
  if (str2 === undefined) {
    return func;
  } else {
    return (str1 += " " + str2);
  } 
}
