const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  ouput: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?\n');
reader.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  reader.close();
});

reader.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
