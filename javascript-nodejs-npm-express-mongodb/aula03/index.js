const fs = require("fs").promises;
const { read } = require("fs");
const path = require("path");

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  browseFiles(files, rootDir);
}

async function browseFiles(files, rootDir) {
  for (let file of files) {
    const fileFullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPath);

    if (stats.isDirectory()) {
      readdir(fileFullPath);
      continue;
    }

    console.log(file, stats.isDirectory());
  }
}

readdir();

// fs.readdir(path.resolve(__dirname))
//   .then((files) => console.log(files))
//   .catch((e) => console.log(e));
