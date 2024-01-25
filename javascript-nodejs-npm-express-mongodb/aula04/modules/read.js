const fs = require("fs").promises;

module.exports = (pathFile) => {
  fs.readFile(pathFile, "utf-8")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

// fs.readFile("../files/Test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });
