const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'write.txt');

let writeStream = fs.createWriteStream(pathFile);
let { stdout, stdin, exit } = require('process');

stdout.write('Enter the your text:');
stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    end();
  }
  writeStream.write(data);
});
process.on('SIGINT', end);

function end() {
  stdout.write('Have a nice day! You have exited the editing mode in the terminal!');
  exit();
}