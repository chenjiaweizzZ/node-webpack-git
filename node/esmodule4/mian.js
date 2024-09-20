let falg = true
if (falg) {
    let utils = import("./utils.js")
    console.log(utils)
    utils.then(res => {
        console.log(res)
    })
}