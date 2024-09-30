const path = require("path")

module.exports = {
    entry: "./src/mian.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build")
    }
}