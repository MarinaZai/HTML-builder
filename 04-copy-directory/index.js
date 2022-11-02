const fs = require("fs");
const path = require("path");

const pathFolder = path.join(__dirname, "files");
const pathCopy = path.join(__dirname, "files-copy");

function copyDirectory() {
  fs.mkdir(pathCopy, { recursive: true }, (error) => {
    if (error) console.log(error.message);
  });

  fs.readdir(pathCopy, (error, data) => {
    if (error) console.log(error.message);

    data.forEach((elem) => {
      fs.unlink(`${pathCopy}/${elem}`, (error) => {
        if (error) console.log(error.message);
      });
    });
  });

  fs.readdir(pathFolder, (error, data) => {
    console.log(data);
    if (error) console.log(error.message);
    data.forEach((elem) => {
      fs.copyFile(`${pathFolder}/${elem}`, `${pathCopy}/${elem}`, (error) => {
        if (error) console.log(error.message);
      });
    });
  });
}
copyDirectory();
