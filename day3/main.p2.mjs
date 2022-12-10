import fs from 'fs';

const rucksacks = fs.readFileSync('input.txt', 'utf8').split('\n'); // Read the input from the file
  
  
  // A function to calculate the priority of a given item type
  const getPriority = type => {
    const code = type.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      // Lowercase item types a through z have priorities 1 through 26.
      return code - 97 + 1;
    } else if (code >= 65 && code <= 90) {
      // Uppercase item types A through Z have priorities 27 through 52.
      return code - 65 + 27;
    }
    return 0;
  };
  
  // Loop through all three-Elf groups
  let sum = 0;
  for (let i = 0; i < rucksacks.length; i += 3) {
    // Create a set of all item types in the first rucksack
    const set = new Set([...rucksacks[i]]);
  
    // Loop through each item type in the set
    for (const type of set) {
      // Check if the item type appears in the two other Elves
      if (rucksacks[i + 1].includes(type) &&
          rucksacks[i + 2].includes(type)) {
        // If it does, calculate its priority and add it to the total sum
        sum += getPriority(type);
        break;
      }
    }
  }
  
  console.log(sum); // 70