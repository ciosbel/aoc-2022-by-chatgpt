import fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf8'); // Read the input from the file

const calories = input.split('\n');

// We'll use this array to keep track of the top three Elves and their total Calories.
const topElves = [];

let currentElfCalories = 0;

for (const calorie of calories) {
  if (calorie === '') {
    // We've reached the end of an Elf's inventory, so we add the current Elf's
    // total Calories to the topElves array and sort the array in descending order
    // by Calories.
    topElves.push({ calories: currentElfCalories });
    topElves.sort((a, b) => b.calories - a.calories);

    // Then, we keep only the top three Elves in the array, discarding the rest.
    topElves.splice(3);

    // Finally, we reset the current Elf's total Calories.
    currentElfCalories = 0;
  } else {
    // We've found a food item, so we add its Calories to the current Elf's total.
    currentElfCalories += parseInt(calorie, 10);
  }
}

// At the end of the loop, the final Elf's total will not have been checked against
// the maximum Calories, so we need to check one last time.
topElves.push({ calories: currentElfCalories });
topElves.sort((a, b) => b.calories - a.calories);
topElves.splice(3);

// We can now calculate the total Calories carried by the top three Elves.
const totalCalories = topElves.reduce((sum, elf) => sum + elf.calories, 0);

console.log(`The top three Elves carrying the most Calories have ${totalCalories} total Calories.`);