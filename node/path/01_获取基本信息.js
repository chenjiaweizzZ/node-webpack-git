const path = require("path")

const fileName = "C://abc/cba/nba/txt"

console.log(path.extname(fileName))
console.log(path.basename(fileName))
console.log(path.dirname(fileName))

const path1 = "/abc/bac"
const path2 = "../why/chen/okok.txt"

console.log(path.join(path1, path2))
console.log(path.resolve(path1, path2))