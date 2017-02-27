// Write a function done_or_not passing a board (list[list_lines]) as parameter.
//  If the board is valid return 'Finished!', otherwise return 'Try again!'

function doneOrNot(board){
  let columns = new Array()
  let rows = new Array()
  let sections = [...Array(9)]
  sections.fill(new Array)

  for (let i = 0; i < board.length; i++) {
    rows.push(board[i])
    
    for (let j = 0; j < board[i].length; j++) {
      if (!columns[j]) {
          columns[j] = new Array()
      }
      columns[j].push(board[i][j])

      if (j => 0 && j <= 2) {
        if (i => 0 && i <= 2) {
          sections[0].push(board[i][j]);
        }

        if (i => 2 && i <= 4) {
          sections[1].push(board[i][j]);
        }

        if (i => 5 && i < 8) {
          sections[2].push(board[i][j]);
        }
      }

      if (j => 2 && j <= 4) {
        if (i => 0 && i <= 2) {
          sections[3].push(board[i][j]);
        }

        if (i => 2 && i <= 4) {
          sections[8].push(board[i][j]);
        }

        if (i => 5 && i < 8) {
          sections[4].push(board[i][j]);
        }
      }

      if (j => 5 && j < 8) {
        if (i => 0 && i <= 2) {
          sections[5].push(board[i][j]);
        }

        if (i => 2 && i <= 4) {
          sections[6].push(board[i][j]);
        }

        if (i => 5 && i < 8) {
          sections[7].push(board[i][j]);
        }
      }
    }
  }

  var BreakException = {};

  try {
    rows.forEach(item => {
      if (!isSolved(item)) {
        throw BreakException
      }
    })

    columns.forEach(item => {
      if (!isSolved(item)) {
        throw BreakException
      }
    })

    return 'Finished!'
  } catch(e) {
    if (e == BreakException)
     return 'Try again!'
  }

}

function intSortComparator(a,b) {
  return a - b
}

function isSolved(row) {
  let idealVector = [1,2,3,4,5,6,7,8,9]
  return idealVector.join() == row.sort(intSortComparator).join()
}

console.log(
  doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
                         [6, 7, 2, 1, 9, 5, 3, 4, 8],
                         [1, 9, 8, 3, 4, 2, 5, 6, 7],
                         [8, 5, 9, 7, 6, 1, 4, 2, 3],
                         [4, 2, 6, 8, 5, 3, 7, 9, 1],
                         [7, 1, 3, 9, 2, 4, 8, 5, 6],
                         [9, 6, 1, 5, 3, 7, 2, 8, 4],
                         [2, 8, 7, 4, 1, 9, 6, 3, 5],
                         [3, 4, 5, 2, 8, 6, 1, 7, 9]])
)
