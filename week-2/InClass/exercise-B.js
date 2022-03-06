function boolChecker(bool) {
  if (typeof bool === 'boolean') {
    return "You've given me a bool, thanks!";
  }else {
    return "No bool, not cool.";
  }

  
}

boolChecker(true);    //el valor se regresa solo en consola

console.log(boolChecker(true));