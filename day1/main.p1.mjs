import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8'); // Read the input from the file

const elfCalories = input.split('\n') // Split the input string by line
  .reduce((acc, cur) => { // Reduce the array of strings to an object
    if (cur.trim() === '') { // If the current line is a blank line
      if (acc.currentElf !== null) { // If we are in the middle of an Elf's inventory
        if (acc.currentElf > acc.max) { // If the currentElf's total is greater than the max so far
          acc.max = acc.currentElf; // Set the max to the currentElf's total
        }
        acc.currentElf = null; // Reset the currentElf's total Calories
      }
    } else { // Otherwise, if the current line is not a blank line
      const calories = parseInt(cur); // Convert the line to an integer
      if (acc.currentElf === null) { // If we are at the start of a new Elf's inventory
        acc.currentElf = calories; // Set the currentElf to the current value
      } else { // Otherwise, if we are in the middle of an Elf's inventory
        acc.currentElf += calories; // Add the current value to the currentElf's total
      }
    }

    return acc; // Return the updated accumulator
  }, { currentElf: null, max: 0 }); // Initialize the accumulator with null and 0

console.log(elfCalories.max); // Output: 24000
