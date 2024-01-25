const fs = require("fs").promises;

module.exports = (pathFile, file) => {
  fs.writeFile(pathFile, file, {
    flag: "w",
    encoding: "utf-8",
  });
};
