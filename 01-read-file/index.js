const fs = require('fs');
const path = require('path');

const pathText = path.join(__dirname, 'text.txt');

readStream = fs.createReadStream(pathText);
  
readStream.on('data', function (content) {
    console.log(content.toString());
});