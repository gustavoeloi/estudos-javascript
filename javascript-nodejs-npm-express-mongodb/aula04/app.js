const path = require("path");
const write = require("./modules/write");
const read = require("./modules/read");

const pathFile = path.resolve(__dirname, "files", "fsWrite&fsRead.txt");

const fileContent =
  "Estou criando esse arquivo usando o fs.write e lendo o conteúdo com fs.readFile";

const fileJson = JSON.stringify(fileContent, " ", 2);

write(pathFile, fileJson, "w", "utf-8");
read(pathFile);
