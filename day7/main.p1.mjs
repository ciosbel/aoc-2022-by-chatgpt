class File {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  }
  
  class Directory {
    constructor(name) {
      this.name = name;
      this.files = [];
      this.directories = [];
    }
  
    addFile(file) {
      this.files.push(file);
    }
  
    addDirectory(directory) {
      this.directories.push(directory);
    }
  
    getTotalSize() {
      let totalSize = 0;
      for (let file of this.files) {
        totalSize += file.size;
      }
      for (let directory of this.directories) {
        totalSize += directory.getTotalSize();
      }
      return totalSize;
    }
  }
  
  function findTotalSizes(root, maxSize) {
    let totalSizes = [];
    if (root.getTotalSize() <= maxSize) {
      totalSizes.push(root.getTotalSize());
    }
    for (let directory of root.directories) {
      totalSizes = totalSizes.concat(findTotalSizes(directory, maxSize));
    }
    return totalSizes;
  }
  
  // Example usage
  /*
  // Create the filesystem
  const root = new Directory("/");
  const a = new Directory("a");
  const e = new Directory("e");
  const i = new File("i", 584);
  e.addFile(i);
  a.addDirectory(e);
  a.addFile(new File("f", 29116));
  a.addFile(new File("g", 2557));
  a.addFile(new File("h.lst", 62596));
  root.addDirectory(a);
  root.addFile(new File("b.txt", 14848514));
  root.addFile(new File("c.dat", 8504156));
  const d = new Directory("d");
  d.addFile(new File("j", 4060174));
  d.addFile(new File("d.log", 8033020));
  d.addFile(new File("d.ext", 5626152));
  d.addFile(new File("k", 7214296));
  root.addDirectory(d);
  */
import fs from 'fs';
const lines = fs.readFileSync('input.txt', 'utf8').split('\n'); // Read the input from the file
    
//const lines = input.split("\n");
const root = new Directory("/");
let currentDirectory = root;
for (let line of lines) {
  if (line.startsWith("$ cd ")) {
    // Change the current directory
    const parts = line.split(" ");
    if (parts[2] === "/") {
      // Switch to the outermost directory
      currentDirectory = root;
    } else if (parts[2] === "..") {
      // Move out one level
      currentDirectory = currentDirectory.parent;
    } else {
      // Move in one level
      const directory = currentDirectory.directories.find(d => d.name === parts[2]);
      if (directory) {
        currentDirectory = directory;
      }
    }
  } else if (line.startsWith("dir ")) {
    // Add a directory to the current directory
    const directory = new Directory(line.split(" ")[1]);
    directory.parent = currentDirectory;
    currentDirectory.addDirectory(directory);
  } else if (!line.startsWith("$ ls")) {
    // Add a file to the current directory
    const parts = line.split(" ");
    const file = new File(parts[1], parseInt(parts[0], 10));
    currentDirectory.addFile(file);
  }
}

  // Find the total sizes of all directories with a total size of at most 100000
  const totalSizes = findTotalSizes(root, 100000);
  
  // Print the sum of the total sizes of those directories
  console.log(totalSizes.reduce((sum, size) => sum + size, 0));