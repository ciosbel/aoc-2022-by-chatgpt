import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8'); // Read the input from the file

const rounds = input.split('\n'); // split the input into rounds
let score = 0; // initialize the score

// create a map that associates each shape with its score
const shapes = {
  A: 1,
  B: 2,
  C: 3
};

// iterate over the rounds
for (const round of rounds) {
  const [opponent, outcome] = round.split(' '); // split the round into opponent's shape and outcome
  const opponentScore = shapes[opponent]; // get the score for the opponent's shape

  if (opponentScore === 1) {
    // if the opponent played rock...

    if (outcome === 'X') {
      // and the player needs to lose, choose scissors
      score += 3 + 0;
    } else if (outcome === 'Y') {
      // and the player needs to draw, choose rock
      score += 1 + 3;
    } else {
      // and the player needs to win, choose paper
      score += 2 + 6;
    }
  } else   if (opponentScore === 2) {
    // if the opponent played paper...

    if (outcome === 'X') {
      // and the player needs to lose, choose rock
      score += 1 + 0;
    } else if (outcome === 'Y') {
      // and the player needs to draw, choose paper
      score += 2 + 3;
    } else {
      // and the player needs to win, choose scissors
      score += 3 + 6;
    }
  } else {
    // if the opponent played scissors...

    if (outcome === 'X') {
      // and the player needs to lose, choose paper
      score += 2 + 0;
    } else if (outcome === 'Y') {
      // and the player needs to draw, choose scissors
      score += 3 + 3;
    } else {
      // and the player needs to win, choose rock
      score += 1 + 6;
    }
  }
}

console.log(score); // 12