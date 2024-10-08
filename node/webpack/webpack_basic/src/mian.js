import { sum } from "./utils/maths"
import { createApp } from "vue"
import Hello from "./vue_demo/hello"
import "./components/div_cpn"

const message = "hello world"

console.log(sum(1, 4))
console.log(sum(1, 7))

console.log(message.length)

const bar = () => {
    console.log("NAME" + NAME)
    console.log("env" + process.env.NODE_ENV)
}

bar()

createApp(Hello).mount("#app")