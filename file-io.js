const fs = require("fs");
const path = require("path");


exports.createFile = function(newPath, data) {
    let newFile = fs.writeFileSync(newPath, data);
    return newFile;
}

exports.appendfile = function(newPath, data) {
    let addedFile = fs.appendFileSync(newPath, data);
    return addedFile;
}

exports.readFile = function(newPath) {
    let file = fs.readFileSync(newPath, "utf-8");
    return file;
}

exports.deleteFile = function(newPath) {
    let deletedFile = fs.unlinkSync(newPath);
    return deletedFile;

}