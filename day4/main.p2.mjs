import { readFileSync } from 'fs';

function findOverlappingRanges(rangePairs) {
  let overlaps = 0;

  // Loop through each pair of ranges
  for (let i = 0; i < rangePairs.length; i++) {
    const range1 = rangePairs[i][0];
    const range2 = rangePairs[i][1];

    // Check if range1 and range2 overlap
    if (range1.start <= range2.end && range1.end >= range2.start) {
      overlaps++;
    }
  }

  return overlaps;
}

// Read the input file and parse the range pairs
const input = readFileSync('input.txt', 'utf8');
const rangePairs = input.split('\n').map(line => {
  const ranges = line.split(',');
  return ranges.map(range => {
    const [start, end] = range.split('-');
    return { start: parseInt(start), end: parseInt(end) };
  });
});

const overlaps = findOverlappingRanges(rangePairs);
console.log(overlaps);