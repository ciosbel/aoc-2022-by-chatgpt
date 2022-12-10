// Initialize the three stacks of crates
let stack1 = ["Z", "N"];
let stack2 = ["M", "C", "D"];
let stack3 = ["P"];

// Define the rearrangement procedure
let procedure = [  {from: 2, to: 1, quantity: 1},  {from: 1, to: 3, quantity: 3},  {from: 2, to: 1, quantity: 2},  {from: 1, to: 2, quantity: 1}];

// Execute each step of the procedure
for (let i = 0; i < procedure.length; i++) {
  let step = procedure[i];

  // Determine the source and destination stacks
  let sourceStack = (step.from === 1) ? stack1 : (step.from === 2) ? stack2 : stack3;
  let destStack = (step.to === 1) ? stack1 : (step.to === 2) ? stack2 : stack3;

  // Move the specified number of crates from the source stack to the destination stack
  for (let j = 0; j < step.quantity; j++) {
    let crate = sourceStack.pop();
    destStack.push(crate);
  }
}

// Determine the crate on top of each stack
let topCrate1 = stack1[stack1.length - 1];
let topCrate2 = stack2[stack2.length - 1];
let topCrate3 = stack3[stack3.length - 1];

// Output the final message
console.log(topCrate1 + topCrate2 + topCrate3); // CMZ