const fs = require('fs');
let path = require('path');

const pathFolder = path.join(__dirname, '/secret-folder');

fs.readdir(
    pathFolder,
    { withFileTypes: true },
    (error, files) => {
      if (error) console.log(error.message);
      else {
        files.filter((el) => el.isFile()).forEach((file) => {
          let arr = [];
          let pathFile = path.join(pathFolder, file.name);
          arr.push(path.parse(pathFile).name);
          arr.push(path.extname(pathFile).slice(1));
  
          fs.stat(pathFile, (error, stats) => {
            if (error) console.log(error.message);
            else {
              arr.push(stats.size / 1000);
              console.log(arr.join(' - ') + 'kb');
            }
          });
        });
      }
    },
  );