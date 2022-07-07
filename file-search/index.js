const fs = require("fs");
const value = process.argv[2];
const readStream = fs.createReadStream("./example.txt");
readStream.on("data", (data) => {
  if (data.toString().split(" ").includes(value)) {
    console.log(true);
  } else {
    console.log(false);
  }
});
