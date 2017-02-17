// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Have fun!

function towerBuilder(nFloors) {
  let foundation = 1 + 2*(nFloors-1)
  let tower = []
  for (let i = nFloors; i > 0; i--) {
    let width = 1 + 2*(i-1)
    tower.push(buildFloor(foundation, width))
  }

  return tower.reverse();
  
  function buildFloor(foundation, width) {
    let floor = new String()
    let gap = foundation - width
    for (let i = 0; i < width; i++) {
      floor += '*'
    }
    
    if (gap > 0) {
      let gapString = new String()
      for (let j = 0; j < gap/2; j++) {
        gapString += ' '
      }
      
      floor = gapString + floor + gapString;
    }

    return floor
  }
}


towerBuilder(2)
console.log(towerBuilder(7));
