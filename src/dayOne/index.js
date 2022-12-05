require('fs').readFile('./input.txt', 'utf8', (err, data) => {
  const elfCalorieCounts = data.split('\n\n').map((elf)=>elf.split('\n').reduce((sum, element) => +element + sum,0)).sort((a,b)=> b-a)
  console.log(`max:\t${elfCalorieCounts[0]}\ntop3:\t${elfCalorieCounts[0]+elfCalorieCounts[1]+elfCalorieCounts[2]}`)
});