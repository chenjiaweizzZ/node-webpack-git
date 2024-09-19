//单一导入单一使用
// const util = require("./utils")

// console.log(util)
// console.log(util.formatCount())

const { UTIL_NAME, formatCount, formatDate } = require("./utils")
console.log(UTIL_NAME)
console.log(formatCount())