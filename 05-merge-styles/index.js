const fs = require("fs");
const path = require("path");

const styles = path.join(__dirname, "styles");
const bundle = path.join(__dirname, "project-dist");

fs.readdir(styles, (error, files) => {
  if (error) throw error.message;
  const styleList= files.filter(
    (value) => value.slice(value.lastIndexOf(".")) === ".css"
  );
  let str = "";
  styleList.forEach((elem) => {
    fs.readFile(path.join(styles, elem), "utf-8", (error, data) => {
      if (error) throw error.message;
      str = str + data
      fs.writeFile(path.join(bundle, "bundle.css"), str, (error) => {
        if (error) throw error.message;
      });
    });
  });
});
