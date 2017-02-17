// Your goal in this kata is to implement an difference function, 
// which subtracts one list from another.
// It should remove all values from list a, which are present in list b.

function array_diff(a, b) {
  b.forEach(item => {
    removeEntry(item, a)
  })
  
  function removeEntry(entry, array) {
    let index = a.indexOf(entry)
    if (index > -1) {
      a.splice(index,1)
      removeEntry(entry, a)
    }
  }

  return a
}

let result = array_diff([1,2],[1])
console.log(result);