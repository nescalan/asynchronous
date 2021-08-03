// Exercise 1
function marksDad(dadName) {
  let myDad = `My father's name is: ${dadName}`;
  return myDad;
}

function printName(name, callback) {
  return callback(name, marksDad);
}

console.log(printName("nelson", marksDad));

//Exercise 2 with time
