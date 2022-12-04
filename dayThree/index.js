const fs = require('fs');

const filePath = './input.txt'
fs.readFile(filePath, 'utf8', (err, data) => {
  const lines = data.split('\n')
  const p1Value = partOne(lines)
  const p2Value = partTwo(lines)
  console.log(p1Value)
  console.log(p2Value)
});
function partTwo(lines) {
  let tally = 0;
  for (const group of getElfGroups(lines)){
    const badge = getGroupBadge(group);
    tally+= getPriority(badge)
  }
  return tally
}
function partOne(lines) {
  let tally = 0;
  for (let line of lines) {
    tally+= getPriority(getMisplacedItem(line));
  }
  return tally
}
function getMisplacedItem(line) {
  let charsInLine = line.split('');
  const charsInFirstHalf = new Set();
  for (let i = 0; i < line.length / 2; i++) {
    charsInFirstHalf.add(charsInLine[i]);
  }
  for (let i = line.length / 2; i < line.length; i++) {
    if (charsInFirstHalf.has(charsInLine[i])) {
      return charsInLine[i];
    }
  }
}
function getPriority(char) {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) + 1;
}
function getGroupBadge(group) {
  const sets = [];
  for (let line of group) {
    sets.push(new Set(line));
  }
  sets.sort((setA, setB) => setA.size - setB.size);
  for (const key of sets[0]) {
    if (sets[1].has(key) && sets[2].has(key)) {
      return key;
    }
  }
}
function getElfGroups(lines) {
  let groups = Array(lines.length / 3);
  let j = 0;
  for (let line of lines) {
    const index = Math.floor(j / 3);
    if (!groups[index]) {
      groups[index] = [];
    }
    groups[index].push(line);
    j++;
  }
  for (let group in groups){
    group = groups[group]
  }
  return groups;
}
