const UTIL_NAME = "util_name"

function formatCount() {
    return "200万"
}

function formatDate() {
    return "2022年1月8日"
}


//单一导出
// module.exports.UTIL_NAME = UTIL_NAME
// module.exports.formatCount = formatCount
// module.exports.formatDate = formatDate

module.exports = {
    UTIL_NAME, formatCount, formatDate
}