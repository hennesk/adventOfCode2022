const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
  const lines = data.split('\n')
  const p1Value = partOne(lines)
  const p2Value = partTwo(lines)
  console.log(p1Value)
  console.log(p2Value)
});

function partTwo(lines) {
  return getElfGroups(lines).map((group)=> getPriority(getGroupBadge(group))).reduce((sum,cur)=> +cur+sum)
}

function partOne(lines) {
  return lines.map((line) => getPriority(getMisplacedItem(line))).reduce((sum,cur)=> +cur + sum);
}

function getMisplacedItem(line) {
  const charsInLine = line.split('');
  const charsInFirstHalf = new Set(charsInLine.slice(0,line.length/2));
  for (const char of charsInLine.slice(line.length/2)) {
    if (charsInFirstHalf.has(char)) return char
  }
}

function getPriority(char) {
  return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) + 1;
}

function getGroupBadge(group) {
  const sets = group.map((line) => new Set(line))
  sets.sort((setA, setB) => setA.size - setB.size);
  for (const key of sets[0]) {
    if (sets[1].has(key) && sets[2].has(key)) {
      return key;
    }
  }
}

function getElfGroups(lines) {
  const groups = Array(lines.length / 3);
  let j = 0;
  for (const line of lines) {
    const index = Math.floor(j / 3);
    if (!groups[index]) {
      groups[index] = [];
    }
    groups[index].push(line);
    j++;
  }
  return groups;
}
