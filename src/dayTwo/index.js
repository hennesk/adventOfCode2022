const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const totalpoints = [0,0]
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
  const [enemyMove, desiredOutcome] = match
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
  const [ enemyMove, playerMove ] = match
  return moves[playerMove][enemyMove]
}
