const fileIO = require("./file-io.js");
const http = require("http");
const path = require("path");
const filePath = path.resolve("./new-file.txt");

const server = http.createServer((req, res) => {

    fileIO.createFile(filePath, "<h1>The Legend of Zelda</h1> <h3>Breath of the Wild</h3>");
    fileIO.appendfile(filePath, '\n<img src="https://wallpapercave.com/wp/wp1913609.jpg" alt="zelda" width="700" height="500">');

    res.write(
        fileIO.readFile(filePath)
    );

   
    
    

    res.end();
  });
  server.listen(3000);