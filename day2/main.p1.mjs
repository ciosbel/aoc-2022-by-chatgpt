import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8'); // Read the input from the file

const rounds = input.split('\n'); // split the input into rounds
let score = 0; // initialize the score

// create a map that associates each shape with its score
const shapes = {
  A: 1,
  B: 2,
  C: 3,
  Y: 2,
  X: 1,
  Z: 3,
};

// iterate over the rounds
for (const round of rounds) {
  const [opponent, player] = round.split(' '); // split the round into opponent's shape and player's shape
  const opponentScore = shapes[opponent]; // get the score for the opponent's shape
  const playerScore = shapes[player]; // get the score for the player's shape

  if (opponentScore === playerScore) {
    // if it's a draw, add the score for the player's shape plus 3
    score += playerScore + 3;
  } else if (
    (opponentScore === 1 && playerScore === 2) ||
    (opponentScore === 2 && playerScore === 3) ||
    (opponentScore === 3 && playerScore === 1)
  ) {
    // if the opponent played rock, paper, or scissors and the player played a shape that beats it, add the score for the player's shape plus 6
    score += playerScore + 6;
  } else {
    // otherwise, the player lost, so add the score for the player's shape plus 0
    score += playerScore + 0;
  }
}

console.log(score); // 15