// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive.
//  The string can contains any char.

function XO(str) {
  let input = str.toLowerCase().split("")
  let xArray = input.filter(value => value == 'x') || new Array()
  let oArray = input.filter(value => value == 'o') || new Array()

  return xArray.length == oArray.length
}

XO("Oo")