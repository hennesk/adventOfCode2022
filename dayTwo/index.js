const fs = require('fs');

const filePath = './input.txt'
fs.readFile(filePath, 'utf8', (err, data) => {
  let totalpoints = [0,0]
  const matches = data.split('\n')
  for (let match of matches) {
    const matchArray = match.split(' ')
    totalpoints[0] += partOne(matchArray)
    totalpoints[1] += partTwo(matchArray)
  }
  console.log(totalpoints)
});

function partTwo(match) {
  const whatToDo= {
    'A': {
      'X': 3,
      'Y': 4,
      'Z': 8
    },
    'B': {
      'X': 1,
      'Y': 5,
      'Z': 9
    },
    'C': {
      'X': 2,
      'Y': 6,
      'Z': 7
    }
  }
  const enemyMove = match[0]
  const desiredOutcome = match[1]
  return whatToDo[enemyMove][desiredOutcome]
}

function partOne(match) {
  const moves = {
    'X': {
      'A':3+1,
      'B':0+1,
      'C':6+1,
    },
    'Y': {
      'A':6+2,
      'B':3+2,
      'C':0+2,
    },
    'Z': {
      'A':0+3,
      'B':6+3,
      'C':3+3,
    },
  }
  const playerMove = match[1]
  const enemyMove = match[0]
  return moves[playerMove][enemyMove]
}


