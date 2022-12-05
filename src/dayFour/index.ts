import fs from 'fs';

fs.readFile('./input.txt', 'utf8', (err, data) => {
  console.log(data.split('\n').filter(isSubArrayPair).length)
  console.log(data.split('\n').filter(hasAnyOverlap).length)
})

function isSubArrayPair(line: string): boolean {
  const [ elfOne, elfTwo ] = line.split(',')
  const [ elfOneMin, elfOneMax ] = elfOne.split('-').sort((a,b) => +a-+b)
  const [ elfTwoMin, elfTwoMax ] = elfTwo.split('-').sort((a,b) => +a-+b)
  if ((+elfOneMin <= +elfTwoMin) && (+elfOneMax >= +elfTwoMax)) return true
  if ((+elfTwoMin <= +elfOneMin) && (+elfTwoMax >= +elfOneMax)) return true
  return false
}

function hasAnyOverlap(line: string): boolean {
  const [ elfOne, elfTwo ] = line.split(',')
  const [ elfOneMin, elfOneMax ] = elfOne.split('-').sort((a,b) => +a-+b)
  const [ elfTwoMin, elfTwoMax ] = elfTwo.split('-').sort((a,b) => +a-+b)
  if (+elfOneMin <= +elfTwoMin) {
    if (+elfOneMax >= +elfTwoMin) return true
  } else {
    if (+elfTwoMax >= +elfOneMin) return true
  }
  return false
}