const fs = require('fs');

const filePath = './input.txt'
fs.readFile(filePath, 'utf8', (err, data) => {
  const elves = data.split('\n\n')
  const elfCalorieCounts = []
  for (const elf of elves) {
    const calorieCounts = elf.split('\n')
    let elfTotal = calorieCounts.reduce((sum, element) => +element + sum,0)
    elfCalorieCounts.push(elfTotal)
  }
  elfCalorieCounts.sort((a,b)=> b-a)
  const max = elfCalorieCounts[0]
  const top3 = elfCalorieCounts[0]+elfCalorieCounts[1]+elfCalorieCounts[2]
  console.log(`max:\t${max}\ntop3:\t${top3}`)
});
