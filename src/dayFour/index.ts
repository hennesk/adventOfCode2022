import fs from 'fs';

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const output = data.split('\n').filter(isSubArrayPair)
  // console.log(output)
  console.log(output.length)
})

function isSubArrayPair(line: string): boolean {
  const [ elfOne, elfTwo ] = line.split(',')
  const [ elfOneMin, elfOneMax ] = elfOne.split('-').sort((a,b) => +a-+b)
  const [ elfTwoMin, elfTwoMax ] = elfTwo.split('-').sort((a,b) => +a-+b)
  if ((+elfOneMin <= +elfTwoMin) && (+elfOneMax >= +elfTwoMax)) return true
  if ((+elfTwoMin <= +elfOneMin) && (+elfTwoMax >= +elfOneMax)) return true
  return false
}