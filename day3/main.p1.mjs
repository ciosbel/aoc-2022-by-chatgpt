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
  
  // Loop through all rucksacks
  let sum = 0;
  for (const rucksack of rucksacks) {
    // Split the rucksack into two compartments
    const comp1 = rucksack.slice(0, rucksack.length / 2);
    const comp2 = rucksack.slice(rucksack.length / 2);
  
    // Loop through each item type in the first compartment
    for (const type of comp1) {
      // Check if the item type appears in the second compartment
      if (comp2.includes(type)) {
        // If it does, calculate its priority and add it to the total sum
        sum += getPriority(type);
        break;
      }
    }
  }
  
  console.log(sum); // 157